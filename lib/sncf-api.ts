/**
 * Couche d'accès aux APIs Open Data SNCF.
 * Source : https://ressources.data.sncf.com (Opendatasoft v2.1)
 * Licence des données : ODbL (Open Database License)
 *
 * Toutes les requêtes sont mises en cache 24h via Next.js fetch revalidation,
 * ce qui rend le déploiement Vercel très économe.
 */

const BASE_URL = 'https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets';
const REVALIDATE_SECONDS = 60 * 60 * 24; // 24h

// ============================================================
// TYPES
// ============================================================

export type FrequentationGare = {
  nom_gare: string;
  code_uic_complet?: string;
  code_postal?: string;
  segmentation_drg?: string;
  total_voyageurs_2023?: number;
  total_voyageurs_2022?: number;
  total_voyageurs_non_voyageurs_2023?: number;
};

export type RegulariteTGV = {
  date: string;          // YYYY-MM
  service: string;
  gare_depart: string;
  gare_arrivee: string;
  duree_moyenne: number;
  nb_train_prevu: number;
  nb_annulation: number;
  nb_train_retard_arrivee: number;
  retard_moyen_arrivee: number;
  commentaire_annulation?: string;
  commentaire_retards_arrivee?: string;
};

export type GareReference = {
  nom: string;
  code_uic: string;
  segmentdrg_libelle?: string;
  position_geographique?: { lon: number; lat: number };
  commune_code: string;
  departement_numero?: string;
};

type OpendatasoftResponse<T> = {
  total_count: number;
  results: T[];
};

// ============================================================
// HELPER GÉNÉRIQUE
// ============================================================

async function fetchSncf<T>(
  dataset: string,
  params: Record<string, string | number> = {}
): Promise<OpendatasoftResponse<T>> {
  const url = new URL(`${BASE_URL}/${dataset}/records`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      console.error(`SNCF API error: ${res.status} ${res.statusText}`);
      return { total_count: 0, results: [] };
    }

    return (await res.json()) as OpendatasoftResponse<T>;
  } catch (err) {
    console.error('SNCF API fetch failed:', err);
    return { total_count: 0, results: [] };
  }
}

// ============================================================
// FRÉQUENTATION DES GARES
// Dataset: frequentation-gares
// ============================================================

export async function getTopFrequentationGares(limit = 20) {
  return fetchSncf<FrequentationGare>('frequentation-gares', {
    limit,
    order_by: 'total_voyageurs_2023 desc',
    select: 'nom_gare,code_uic_complet,code_postal,segmentation_drg,total_voyageurs_2023,total_voyageurs_2022',
  });
}

export async function getFrequentationStats() {
  // On récupère un échantillon assez large pour calculer des stats côté serveur
  return fetchSncf<FrequentationGare>('frequentation-gares', {
    limit: 100,
    order_by: 'total_voyageurs_2023 desc',
    select: 'nom_gare,segmentation_drg,total_voyageurs_2023,total_voyageurs_2022',
  });
}

// ============================================================
// RÉGULARITÉ TGV (par liaison)
// Dataset: regularite-mensuelle-tgv-aqst
// ============================================================

export async function getRegulariteTGVRecente(limit = 100) {
  return fetchSncf<RegulariteTGV>('regularite-mensuelle-tgv-aqst', {
    limit,
    order_by: 'date desc',
  });
}

export async function getRegulariteParAxe() {
  // Régularité agrégée des liaisons depuis Paris (les 4 axes principaux)
  return fetchSncf<RegulariteTGV>('regularite-mensuelle-tgv-aqst', {
    limit: 100,
    order_by: 'date desc',
    where: "gare_depart like 'PARIS%'",
  });
}

// ============================================================
// RÉFÉRENTIEL GARES
// Dataset: gares-de-voyageurs
// ============================================================

export async function getGaresReference(limit = 50) {
  return fetchSncf<GareReference>('gares-de-voyageurs', {
    limit,
    select: 'nom,code_uic,segmentdrg_libelle,commune_code,departement_numero',
  });
}

// ============================================================
// MÉTRIQUES DATA QUALITY simulées (calcul réel sur résultats API)
// ============================================================

export function computeDataQualityMetrics(records: FrequentationGare[]) {
  const total = records.length;
  if (total === 0) {
    return {
      completude_nom: 0, completude_segment: 0, completude_voyageurs: 0,
      coherence_evolution: 0, total,
    };
  }

  const avecNom = records.filter(r => r.nom_gare && r.nom_gare.trim()).length;
  const avecSegment = records.filter(r => r.segmentation_drg).length;
  const avecVoyageurs2023 = records.filter(r => r.total_voyageurs_2023 != null).length;

  // Cohérence : 2023 ne devrait pas être radicalement différent de 2022 (>500% écart = anomalie)
  const coherent = records.filter(r => {
    if (r.total_voyageurs_2023 == null || r.total_voyageurs_2022 == null) return true;
    if (r.total_voyageurs_2022 === 0) return true;
    const ratio = r.total_voyageurs_2023 / r.total_voyageurs_2022;
    return ratio > 0.2 && ratio < 5;
  }).length;

  return {
    completude_nom: Math.round((avecNom / total) * 1000) / 10,
    completude_segment: Math.round((avecSegment / total) * 1000) / 10,
    completude_voyageurs: Math.round((avecVoyageurs2023 / total) * 1000) / 10,
    coherence_evolution: Math.round((coherent / total) * 1000) / 10,
    total,
  };
}