/**
 * Lexique du Data Management appliqué au contexte SNCF/Naomi.
 * Toutes les définitions sont issues de sources publiques (DAMA-DMBOK,
 * Wikipedia, sites spécialisés CustUp, Cartelis, etc.) et adaptées au contexte.
 */

export type TermeLexique = {
  acronyme: string;
  nom_complet: string;
  definition_simple: string;
  definition_technique?: string;
  exemple_sncf?: string;
  source?: string;
  categorie: 'sncf' | 'data-gov' | 'data-tech' | 'metier';
};

export const LEXIQUE: TermeLexique[] = [
  // ========== TERMES SNCF / NAOMI ==========
  {
    acronyme: 'Naomi',
    nom_complet: 'Plateforme Big Data Client SNCF Voyageurs',
    definition_simple: "Naomi est la plateforme Big Data de connaissance client de SNCF Voyageurs (TGV-Intercités). Elle agrège l'ensemble des données pour analyser les comportements des voyageurs, prédire leurs usages et optimiser les offres commerciales.",
    definition_technique: "Plateforme décisionnelle s'appuyant sur Dataiku, présentée à Big Data Paris et Viva Tech 2023. Elle alimente le CRM Grande Vitesse et la modélisation marketing.",
    exemple_sncf: "Lorsqu'un client reçoit une offre personnalisée pour un voyage Paris-Marseille en juillet, c'est Naomi qui a croisé son historique d'achats, son profil et les tendances saisonnières pour cibler cette communication.",
    source: 'Conférences publiques SNCF Big Data Paris & Viva Tech 2023',
    categorie: 'sncf',
  },
  {
    acronyme: 'TGV-IC',
    nom_complet: 'TGV-Intercités',
    definition_simple: "Branche de SNCF Voyageurs qui exploite les trains à grande vitesse (TGV INOUI, OUIGO) et les trains Intercités (lignes structurantes nationales). C'est le périmètre métier sur lequel Naomi opère principalement.",
    categorie: 'sncf',
  },
  {
    acronyme: 'TGV INOUI',
    nom_complet: 'Marque commerciale haut de gamme TGV',
    definition_simple: "Marque déployée par SNCF depuis 2017 sur ses TGV à offre de service complète. Distincte de OUIGO (offre low-cost). INOUI cible une clientèle prête à payer pour confort et services.",
    source: 'SNCF Voyageurs',
    categorie: 'sncf',
  },
  {
    acronyme: 'AQST',
    nom_complet: 'Autorité de la Qualité de Service dans les Transports',
    definition_simple: "Organisme public français qui définit et publie les indicateurs officiels de régularité des trains. Les datasets de régularité TGV utilisés sur ce site suivent les normes AQST.",
    source: 'data.sncf.com',
    categorie: 'sncf',
  },

  // ========== TERMES DATA GOUVERNANCE ==========
  {
    acronyme: 'Data Steward',
    nom_complet: 'Intendant des données',
    definition_simple: "Personne responsable au quotidien de la qualité, de la documentation et de la bonne utilisation d'un domaine de données. C'est le \"chef d'orchestre en coulisses\" qui fait dialoguer métiers et IT pour que la donnée reste fiable.",
    definition_technique: "Selon DAMA-DMBOK, le Data Steward met en œuvre opérationnellement la gouvernance définie par le Data Owner. Il standardise les noms, valide les définitions, définit les règles métier, supervise les contrôles qualité et documente les métadonnées.",
    exemple_sncf: "Sur Naomi, un Data Steward « Relation Client » vérifie que la donnée \"client Grand Voyageur\" a la même définition partout, qu'elle est de qualité suffisante pour les campagnes CRM, et que les anomalies sont tracées et corrigées.",
    source: 'DAMA-DMBOK 2nd Edition (2017), Wikipédia',
    categorie: 'data-gov',
  },
  {
    acronyme: 'Data Owner',
    nom_complet: 'Propriétaire de la donnée',
    definition_simple: "Responsable métier (souvent un directeur ou manager) qui détient la responsabilité finale d'un jeu de données : ses définitions, sa qualité attendue, ses règles d'accès. Il décide, le Data Steward exécute.",
    exemple_sncf: "Le Directeur Marketing TGV-IC pourrait être Data Owner du domaine \"client Grande Vitesse\". Il définit ce qu'est un \"client actif\", le Data Steward s'assure que la définition est appliquée partout.",
    source: 'DAMA-DMBOK',
    categorie: 'data-gov',
  },
  {
    acronyme: 'CDO',
    nom_complet: 'Chief Data Officer',
    definition_simple: "Directeur de la donnée. Responsable global de la stratégie data d'une organisation. Pilote les Data Owners et Data Stewards, anime la gouvernance, porte la transformation par la donnée.",
    exemple_sncf: "SNCF Voyageurs a une fonction de CDO portée historiquement par des cadres comme Julien Iris (présentations publiques 2021).",
    categorie: 'data-gov',
  },
  {
    acronyme: 'DAMA-DMBOK',
    nom_complet: 'Data Management Body of Knowledge',
    definition_simple: "Référentiel international (publié par l'association DAMA) qui définit les bonnes pratiques de gestion des données : rôles, processus, qualité, métadonnées, gouvernance, etc. C'est la \"Bible\" de la discipline data.",
    definition_technique: "DAMA-DMBOK 2 (2017) structure le data management en 11 domaines de connaissance, dont la Data Governance est au centre. Définit les rôles (Data Owner, Steward, Custodian) et les dimensions de qualité.",
    source: 'DAMA International, https://www.dama.org',
    categorie: 'data-gov',
  },
  {
    acronyme: 'BCBS 239',
    nom_complet: 'Principles for effective risk data aggregation',
    definition_simple: "Norme publiée par le Comité de Bâle (banques) en 2013 imposant des règles strictes sur la qualité, la traçabilité et l'auditabilité des données critiques. Souvent transposée hors banque comme référence d'excellence en gouvernance.",
    exemple_sncf: "Hors contexte bancaire, ses 14 principes (lineage de bout en bout, ownership formalisée, contrôles automatisés) inspirent les pratiques de gouvernance dans des secteurs comme le transport.",
    source: 'Bank for International Settlements, BCBS 239 (2013)',
    categorie: 'data-gov',
  },
  {
    acronyme: 'Data Quality',
    nom_complet: 'Qualité des données',
    definition_simple: "Mesure de l'aptitude d'une donnée à servir l'usage qu'on en fait. S'évalue selon des dimensions : complétude (pas de manque), exactitude (juste), fraîcheur (à jour), unicité (pas de doublons), cohérence, conformité.",
    exemple_sncf: "Si 4% des fiches client n'ont pas d'email, c'est un problème de complétude qui empêche les campagnes email de toucher 4% de la cible.",
    source: 'DAMA-DMBOK',
    categorie: 'data-gov',
  },
  {
    acronyme: 'Data Lineage',
    nom_complet: 'Traçabilité de la donnée',
    definition_simple: "Capacité à retracer l'origine d'une donnée et toutes les transformations qu'elle a subies, du système source jusqu'à son usage final. Essentiel pour comprendre, auditer et corriger.",
    exemple_sncf: "Si un dashboard marketing affiche un chiffre faux, le lineage permet de remonter : ce chiffre vient de telle vue SQL, qui vient de telle table SDR, qui agrège telles sources RCU et Distribution.",
    categorie: 'data-gov',
  },
  {
    acronyme: 'Data Catalog',
    nom_complet: 'Catalogue de données',
    definition_simple: "Inventaire documenté des jeux de données d'une organisation. Contient pour chaque entité : sa définition, son propriétaire, ses attributs, sa qualité, ses usages autorisés. C'est le \"Wikipédia interne\" de la donnée.",
    categorie: 'data-gov',
  },

  // ========== TERMES DATA TECHNIQUES ==========
  {
    acronyme: 'RCU',
    nom_complet: 'Référentiel Client Unique (Single Customer View)',
    definition_simple: "Système qui unifie toutes les informations clients dispersées dans l'entreprise (web, mobile, CRM, fidélité, support…) en une vue unique et cohérente par client. C'est le socle indispensable d'une vraie connaissance client.",
    definition_technique: "Le RCU intègre, normalise, déduplique et expose les données clients aux applicatifs marketing/CRM. Il produit un identifiant unique (golden record) par personne réelle. Souvent matérialisé via une CDP, un MDM client ou une couche dédiée dans le data warehouse.",
    exemple_sncf: "Un client peut avoir un compte SNCF Connect, une carte Grand Voyageur, et acheter au guichet. Le RCU réconcilie ces trois identités pour parler à \"une seule personne\" dans les campagnes.",
    source: 'CustUp, Cartelis (références françaises sur le sujet)',
    categorie: 'data-tech',
  },
  {
    acronyme: 'MDM',
    nom_complet: 'Master Data Management',
    definition_simple: "Discipline et outils visant à gérer les données de référence d'une entreprise (clients, produits, fournisseurs, gares…) comme un actif critique : unique, fiable, partagé. Le RCU est le MDM appliqué aux clients.",
    exemple_sncf: "Un MDM \"Gares\" garantit qu'il y a une seule définition canonique de la gare \"Lyon Part-Dieu\" (code UIC, coordonnées GPS, segmentation), utilisée par tous les systèmes.",
    categorie: 'data-tech',
  },
  {
    acronyme: 'Golden Record',
    nom_complet: 'Enregistrement de référence',
    definition_simple: "Version unique et faisant autorité d'un enregistrement (ex : un client) résultant de la fusion d'informations issues de plusieurs sources. C'est le \"vrai\" client, après réconciliation des doublons et arbitrage des conflits.",
    categorie: 'data-tech',
  },
  {
    acronyme: 'CDP',
    nom_complet: 'Customer Data Platform',
    definition_simple: "Plateforme logicielle qui centralise les données clients de toutes sources, les unifie en profils 360°, et permet d'activer ces données dans des canaux marketing. Une CDP joue souvent le rôle de RCU.",
    source: 'CustUp',
    categorie: 'data-tech',
  },
  {
    acronyme: 'CRM',
    nom_complet: 'Customer Relationship Management',
    definition_simple: "Système de gestion de la relation client. Outil opérationnel utilisé par les équipes marketing/vente/support pour suivre les interactions avec les clients, lancer des campagnes, suivre les opportunités.",
    exemple_sncf: "Un CRM SNCF stocke l'historique des emails marketing envoyés à chaque client, les réponses, les ouvertures de campagne.",
    categorie: 'data-tech',
  },
  {
    acronyme: 'Code UIC',
    nom_complet: 'Code Union Internationale des Chemins de fer',
    definition_simple: "Identifiant unique standardisé internationalement pour chaque gare ferroviaire. Pivot indispensable pour faire dialoguer les systèmes SNCF, RFF et opérateurs étrangers.",
    exemple_sncf: "Lyon Part-Dieu a le code UIC 87723197. Tous les systèmes SNCF (réservation, info voyageurs, distribution) l'identifient via ce code.",
    source: 'data.sncf.com',
    categorie: 'data-tech',
  },
  {
    acronyme: 'Data Mesh',
    nom_complet: 'Maillage de données',
    definition_simple: "Approche d'architecture data décentralisée où chaque domaine métier est responsable de ses propres \"data products\", plutôt qu'une équipe data centrale qui sert tout le monde. Inspirée des microservices.",
    categorie: 'data-tech',
  },
  {
    acronyme: 'ETL / ELT',
    nom_complet: 'Extract Transform Load / Extract Load Transform',
    definition_simple: "Processus d'ingestion de données : on extrait des sources, on transforme (nettoyage, calculs), on charge dans la destination. ELT (variante moderne) charge d'abord puis transforme dans le data warehouse.",
    categorie: 'data-tech',
  },

  // ========== TERMES MÉTIER (génériques pour le contexte CRM SNCF) ==========
  {
    acronyme: 'CRMS',
    nom_complet: 'Cellule CRM Stratégique (terme générique)',
    definition_simple: "Dans une organisation marketing client, la CRMS désigne une équipe en charge des campagnes CRM stratégiques (segmentation, ciblage, orchestration multicanal). Sur ce site, on simule une telle cellule comme cliente type d'un Data Steward Naomi.",
    exemple_sncf: "Une CRMS lance une campagne email de réactivation des clients Grand Voyageur dormants. Pour cela, elle a besoin d'un dataset fiable issu du Socle Data Relation Client.",
    categorie: 'metier',
  },
  {
    acronyme: 'CCM',
    nom_complet: 'Connaissance Client Marketing (terme générique)',
    definition_simple: "Équipe en charge de l'analyse comportementale et de la modélisation prédictive des clients. Travaille sur des cas comme la prédiction du churn, la valeur vie client (LTV), la propension à l'achat.",
    categorie: 'metier',
  },
  {
    acronyme: 'Churn',
    nom_complet: 'Attrition client',
    definition_simple: "Phénomène de perte de clients sur une période donnée. Un \"modèle de churn\" prédit la probabilité qu'un client cesse d'utiliser le service.",
    exemple_sncf: "Avec l'ouverture à la concurrence sur certaines lignes TGV, la prédiction du churn devient un enjeu stratégique.",
    categorie: 'metier',
  },
  {
    acronyme: 'LTV',
    nom_complet: 'Lifetime Value (Valeur vie client)',
    definition_simple: "Estimation du chiffre d'affaires qu'un client va générer sur toute la durée de sa relation avec l'entreprise.",
    categorie: 'metier',
  },
  {
    acronyme: 'RGPD',
    nom_complet: 'Règlement Général sur la Protection des Données',
    definition_simple: "Réglementation européenne (2018) qui encadre l'utilisation des données personnelles. Impose notamment le consentement explicite, le droit à l'oubli, la traçabilité des usages.",
    exemple_sncf: "Avant d'envoyer une campagne email à un client, il faut vérifier qu'il a donné son consentement marketing actif - c'est une règle bloquante.",
    categorie: 'data-gov',
  },
];

export const CATEGORIES = {
  sncf: { label: 'Contexte SNCF', color: 'bg-rose-100 text-rose-800' },
  'data-gov': { label: 'Gouvernance data', color: 'bg-amber-100 text-amber-800' },
  'data-tech': { label: 'Technique data', color: 'bg-blue-100 text-blue-800' },
  metier: { label: 'Métier CRM', color: 'bg-emerald-100 text-emerald-800' },
};