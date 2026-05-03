import Link from 'next/link';
import { ExternalLink, Database, Users, Calendar, Sparkles } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import InfoBox from '@/components/InfoBox';

export default function NaomiPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 lg:py-20">
      <SectionTitle
        eyebrow="Plateforme Big Data Client"
        title="Naomi, c'est quoi vraiment ?"
        subtitle="Tout ce qu'il faut savoir sur la plateforme de connaissance client de SNCF Voyageurs, à partir de sources publiques uniquement (conférences, articles, retours d'expérience SNCF)."
      />

      {/* DEFINITION */}
      <section className="mb-16">
        <div className="bg-stone-900 text-white p-8 lg:p-12 mb-8">
          <Sparkles size={32} className="text-rose-400 mb-6" />
          <h2 className="text-2xl md:text-3xl font-display font-light leading-relaxed mb-6">
            Naomi est la <strong className="font-bold text-rose-300">plateforme Big Data Client</strong> de SNCF Voyageurs (TGV-Intercités). Elle agrège l'ensemble des données au service de la connaissance client et de l'animation relationnelle.
          </h2>
          <p className="text-stone-300 leading-relaxed">
            Concrètement, Naomi permet d'analyser les comportements des voyageurs vis-à-vis des offres actuelles, de prédire ces comportements, et de construire les offres de demain. C'est le système qui sait, par exemple, qu'un certain client voyage régulièrement Paris-Lyon en classe affaires le jeudi matin et qu'il pourrait être intéressé par une offre Business Première.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
          {[
            { icon: Calendar, label: 'Présentée publiquement', value: 'Viva Tech 2023', sub: 'Big Data Paris (Dataiku)' },
            { icon: Database, label: 'Technologie cœur', value: 'Dataiku', sub: 'Plateforme d\'IA / Big Data' },
            { icon: Users, label: 'Périmètre métier', value: 'TGV-Intercités', sub: 'CRM Grande Vitesse' },
          ].map((kpi, i) => (
            <div key={i} className="bg-white p-6">
              <kpi.icon size={20} className="text-rose-700 mb-3" />
              <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2 font-medium">{kpi.label}</div>
              <div className="text-xl font-display font-semibold mb-1">{kpi.value}</div>
              <div className="text-xs text-stone-500">{kpi.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Comment Naomi fonctionne, en simple</h2>

        <div className="space-y-6">
          {[
            {
              num: '01',
              title: 'On collecte',
              desc: "Naomi récupère des données depuis plusieurs sources : les achats de billets, les inscriptions au programme Grand Voyageur, les interactions web et application, les enquêtes de satisfaction, et même les données d'exploitation des trains (retards, perturbations).",
              tech: 'On parle de pipelines d\'ingestion : des programmes qui vont chercher la donnée à intervalle régulier dans chaque système source.',
            },
            {
              num: '02',
              title: 'On unifie',
              desc: "C'est l'étape clé. Un même voyageur peut avoir un compte SNCF Connect, une carte Grand Voyageur, et acheter parfois au guichet. Naomi réconcilie ces identités pour comprendre que c'est la même personne.",
              tech: 'C\'est le rôle d\'un RCU (Référentiel Client Unique) : produire un "golden record" unique par client réel.',
            },
            {
              num: '03',
              title: 'On nettoie et on calcule',
              desc: "Les données brutes contiennent des erreurs, des doublons, des champs manquants. Naomi les corrige (avec l'aide des Data Stewards qui définissent les règles), puis calcule des indicateurs : valeur du client, fréquence de voyage, segment marketing.",
              tech: 'C\'est la phase de "transformation" : standardisation, déduplication, enrichissement, scoring.',
            },
            {
              num: '04',
              title: 'On analyse et on prédit',
              desc: "Les équipes marketing utilisent Naomi pour comprendre qui voyage où, quand, comment. Des modèles d'IA prédisent qui risque de partir à la concurrence, qui pourrait acheter une nouvelle offre, qui répondrait à telle campagne.",
              tech: 'Naomi alimente les outils CRM, qui à leur tour activent les campagnes email, SMS, push.',
            },
          ].map((step, i) => (
            <div key={i} className="bg-white border border-stone-200 p-6 lg:p-8 flex flex-col md:flex-row gap-6">
              <div className="text-5xl md:text-6xl font-display font-bold text-rose-700 leading-none flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-stone-700 leading-relaxed mb-3">{step.desc}</p>
                <div className="bg-stone-50 border-l-2 border-stone-400 pl-4 py-2">
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Le mot juste</div>
                  <p className="text-sm text-stone-700">{step.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OÙ INTERVIENT LE DATA STEWARD */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Où le Data Steward intervient-il ?</h2>

        <p className="text-lg text-stone-600 mb-8 max-w-3xl leading-relaxed">
          Sur Naomi, le Data Steward n'écrit pas le code des pipelines (c'est le Data Engineer). Il ne décide pas non plus de la stratégie marketing (c'est le Data Owner / les équipes métier). Il est le <strong className="text-stone-900">chef d'orchestre invisible</strong> qui fait que la donnée reste fiable, comprise, et bien utilisée.
        </p>

        <InfoBox term="un Data Owner">
          Un Data Owner est le responsable métier d'un domaine de données (ex : le directeur marketing pour les données clients). Il décide ce qu'est la donnée, qui peut y accéder, quels sont les standards de qualité attendus. Le Data Steward met en œuvre ces décisions au quotidien.
        </InfoBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {[
            { title: 'Quand le métier demande une nouvelle analyse', desc: "Le Data Steward cadre le besoin, identifie quelles données du Socle Data sont nécessaires, vérifie qu'elles existent et sont de qualité suffisante." },
            { title: "Quand un dashboard affiche un chiffre douteux", desc: "Le Data Steward enquête : il remonte le lineage de la donnée, identifie l'anomalie (source, transformation, agrégation), pilote la correction." },
            { title: 'Quand une nouvelle source est intégrée', desc: "Le Data Steward documente la nouvelle entité, définit ses règles de qualité, met à jour le data catalog, forme les utilisateurs." },
            { title: 'Quand un Data Engineer livre un nouveau dataset', desc: "Le Data Steward valide que la documentation est à jour, que les contrôles qualité sont en place, que l'objet est conforme aux standards." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-stone-200 p-6">
              <h3 className="font-display font-semibold mb-2 text-rose-700">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCES */}
      <section>
        <div className="bg-stone-100 border border-stone-200 p-6">
          <h3 className="font-semibold mb-3">Sources publiques utilisées pour cette page</h3>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex gap-2">
              <ExternalLink size={14} className="text-stone-400 mt-1 flex-shrink-0" />
              <span>Présentation officielle SNCF à Viva Tech 2023 (« 20 projets phares »)</span>
            </li>
            <li className="flex gap-2">
              <ExternalLink size={14} className="text-stone-400 mt-1 flex-shrink-0" />
              <span>Présentations Big Data Paris par les équipes Data SNCF Voyageurs</span>
            </li>
            <li className="flex gap-2">
              <ExternalLink size={14} className="text-stone-400 mt-1 flex-shrink-0" />
              <span>Articles Le Monde Informatique / CIO Online sur l'organisation Data SNCF Voyageurs (2023)</span>
            </li>
          </ul>
          <p className="text-xs text-stone-500 mt-4 italic">
            Aucune information confidentielle ou interne n'est utilisée. L'objectif est purement pédagogique.
          </p>
        </div>
      </section>
    </div>
  );
}