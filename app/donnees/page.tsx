import Link from 'next/link';
import { Database, ExternalLink, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import StatCard from '@/components/StatCard';
import InfoBox from '@/components/InfoBox';
import {
  getTopFrequentationGares,
  getFrequentationStats,
  getRegulariteTGVRecente,
  computeDataQualityMetrics,
} from '@/lib/sncf-api';
import RegulariteChart from '@/components/charts/RegulariteChart';
import FrequentationChart from '@/components/charts/FrequentationChart';
import DataQualityCard from '@/components/charts/DataQualityCard';

export const revalidate = 86400; // 24h

export default async function DonneesPage() {
  // Fetch en parallèle côté serveur
  const [topGares, statsData, regulariteData] = await Promise.all([
    getTopFrequentationGares(15),
    getFrequentationStats(),
    getRegulariteTGVRecente(60),
  ]);

  const dqMetrics = computeDataQualityMetrics(statsData.results);
  const totalVoyageursTop = topGares.results.reduce(
    (sum, g) => sum + (g.total_voyageurs_2023 || 0),
    0
  );

  const apiOk = topGares.total_count > 0;

  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 lg:py-20">
      <SectionTitle
        eyebrow="Données réelles · API SNCF en direct"
        title="Le Socle Data Relation Client, simulé sur des données ouvertes"
        subtitle="Les données affichées ci-dessous sont récupérées en temps réel depuis l'API publique de SNCF Open Data. Elles sont mises en cache 24h pour rester gratuites en hébergement Vercel."
      />

      {/* Status API */}
      <div className={`flex items-center gap-3 p-4 mb-8 border rounded ${apiOk ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
        {apiOk ? (
          <CheckCircle2 size={20} className="text-emerald-700" />
        ) : (
          <AlertCircle size={20} className="text-amber-700" />
        )}
        <div className="text-sm">
          {apiOk ? (
            <>
              <strong className="text-emerald-900">API SNCF Open Data en ligne</strong>
              <span className="text-emerald-700"> · {topGares.total_count.toLocaleString('fr-FR')} gares dans le référentiel · Données rafraîchies toutes les 24h</span>
            </>
          ) : (
            <>
              <strong className="text-amber-900">API temporairement indisponible.</strong>
              <span className="text-amber-700"> Réessayez dans quelques minutes ou consultez directement le portail SNCF.</span>
            </>
          )}
        </div>
      </div>

      {/* Sources */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold mb-4">Quelles données voyez-vous ici ?</h2>
        <p className="text-stone-600 mb-6 max-w-3xl leading-relaxed">
          Trois jeux de données ouverts publiés par SNCF, qui simulent à petite échelle le type de données qu'un Data Steward manipule sur Naomi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              titre: 'Fréquentation des gares',
              desc: "Nombre de voyageurs annuel pour les ~3000 gares françaises depuis 2015.",
              usage: "Sur Naomi, l'équivalent serait la table des transactions de billetterie, qui permet de mesurer le volume client par gare.",
              url: 'https://ressources.data.sncf.com/explore/dataset/frequentation-gares/',
            },
            {
              titre: 'Régularité TGV par liaison',
              desc: "Taux de ponctualité mensuel par liaison TGV, normes AQST.",
              usage: "Sur Naomi, on croiserait la régularité avec la satisfaction client pour comprendre l'impact des retards sur la fidélité.",
              url: 'https://ressources.data.sncf.com/explore/dataset/regularite-mensuelle-tgv-aqst/',
            },
            {
              titre: 'Référentiel Gares',
              desc: "Liste des gares avec leur code UIC, segmentation, position GPS.",
              usage: "C'est exactement le type de référentiel MDM (Master Data Management) qu'un Data Steward documente et fiabilise.",
              url: 'https://ressources.data.sncf.com/explore/dataset/gares-de-voyageurs/',
            },
          ].map((d, i) => (
            <div key={i} className="bg-white border border-stone-200 p-5">
              <Database size={18} className="text-rose-700 mb-3" />
              <h3 className="font-display font-semibold mb-2">{d.titre}</h3>
              <p className="text-sm text-stone-600 mb-3">{d.desc}</p>
              <div className="bg-stone-50 border-l-2 border-stone-400 pl-3 py-2 mb-3">
                <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Parallèle Naomi</div>
                <p className="text-xs text-stone-600 leading-relaxed">{d.usage}</p>
              </div>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-700 hover:underline inline-flex items-center gap-1">
                Source <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold mb-6">Les chiffres clés du périmètre</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200">
          <StatCard label="Gares dans le référentiel" value={topGares.total_count.toLocaleString('fr-FR')} sub="Source open data SNCF" />
          <StatCard label="Voyageurs (top 15 gares)" value={`${(totalVoyageursTop / 1_000_000).toFixed(1)} M`} sub="Année 2023" />
          <StatCard label="Données régularité" value={regulariteData.total_count.toLocaleString('fr-FR')} sub="Mesures mensuelles disponibles" />
          <StatCard label="Score qualité global" value={`${Math.round((dqMetrics.completude_nom + dqMetrics.completude_voyageurs + dqMetrics.coherence_evolution) / 3)}%`} sub="Calculé sur l'échantillon" />
        </div>
      </section>

      {/* Top fréquentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold mb-2">Top 15 des gares les plus fréquentées (2023)</h2>
        <p className="text-stone-600 mb-6 text-sm">
          Visualisation directe des données issues de l'API. Sur Naomi, le Data Steward s'assurerait que cette donnée de volume client soit cohérente avec les transactions de billetterie.
        </p>
        <FrequentationChart data={topGares.results.slice(0, 15)} />
      </section>

      {/* Régularité */}
      {regulariteData.results.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold mb-2">Régularité TGV — derniers mois</h2>
          <p className="text-stone-600 mb-6 text-sm">
            Évolution du taux de ponctualité (calculé : 1 − retards/trains prévus). Sur Naomi, ce serait croisé avec les données de satisfaction client pour mesurer l'impact opérationnel.
          </p>
          <RegulariteChart data={regulariteData.results} />
        </section>
      )}

      {/* Data Quality */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold mb-2">Qualité des données — vue Data Steward</h2>
        <p className="text-stone-600 mb-6 text-sm max-w-3xl">
          Voici comment un Data Steward mesurerait la qualité de l'échantillon récupéré, selon les dimensions du framework DAMA-DMBOK.
        </p>

        <InfoBox term="les dimensions de qualité">
          DAMA définit 6 dimensions universelles : <strong>complétude</strong> (champs renseignés), <strong>exactitude</strong> (valeurs justes), <strong>fraîcheur</strong> (à jour), <strong>unicité</strong> (pas de doublons), <strong>cohérence</strong> (logique entre champs), <strong>conformité</strong> (respect des règles métier).
        </InfoBox>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <DataQualityCard label="Complétude — nom de gare" value={dqMetrics.completude_nom} />
          <DataQualityCard label="Complétude — segment" value={dqMetrics.completude_segment} />
          <DataQualityCard label="Complétude — voyageurs 2023" value={dqMetrics.completude_voyageurs} />
          <DataQualityCard label="Cohérence évolution 2022→2023" value={dqMetrics.coherence_evolution} />
        </div>

        <div className="mt-6 bg-stone-900 text-white p-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 mb-2 font-medium">Posture Data Steward</div>
          <p className="text-sm leading-relaxed">
            Si la complétude tombe sous 95% sur un champ critique, le Data Steward déclenche une investigation : <strong>est-ce un problème côté source</strong> (un système qui n'envoie plus la donnée) ? <strong>Côté pipeline</strong> (un bug dans une transformation) ? Une fois la cause identifiée, il pilote la correction et documente l'incident pour éviter qu'il se reproduise.
          </p>
        </div>
      </section>

      <div className="text-center text-sm text-stone-500 pt-8 border-t border-stone-200">
        Données récupérées en direct via l'API <Link href="https://ressources.data.sncf.com" className="text-rose-700 hover:underline">ressources.data.sncf.com</Link>. Licence ODbL.
      </div>
    </div>
  );
}