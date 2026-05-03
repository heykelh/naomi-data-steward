import { ArrowRight, AlertCircle, CheckCircle2, Search, Wrench, BookCheck } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import InfoBox from '@/components/InfoBox';

export default function CasUsagePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 lg:py-20">
      <SectionTitle
        eyebrow="Cas d'usage concret"
        title="Une journée dans la vie d'un Data Steward"
        subtitle="Suivons un scénario réaliste : une équipe marketing remarque un chiffre qui semble étrange dans un dashboard. Que se passe-t-il ensuite ? Étape par étape, le Data Steward intervient."
      />

      {/* SCÉNARIO */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-12">
        <div className="text-[10px] uppercase tracking-wider text-amber-800 mb-2 font-medium">Le scénario</div>
        <p className="text-stone-800 leading-relaxed">
          <strong>Lundi 9h.</strong> L'équipe Marketing TGV-IC ouvre son dashboard hebdomadaire et constate que le nombre de clients « Grand Voyageur Le Club » actifs sur la liaison Paris-Lyon a chuté de 32% en une semaine. Personne ne s'attendait à ça. Un email arrive dans la boîte du Data Steward : <em>« Est-ce que les chiffres sont bons ? »</em>
        </p>
      </div>

      {/* ÉTAPES */}
      <div className="space-y-6">
        <Step
          num="01"
          icon={Search}
          title="Reproduire et qualifier"
          duree="30 minutes"
          actions={[
            "Le Data Steward ouvre le dashboard, vérifie qu'il voit bien la même chose que le métier.",
            "Il regarde si la baisse est isolée à cette liaison ou présente ailleurs : c'est uniquement Paris-Lyon.",
            "Il vérifie l'historique : la métrique était stable depuis 6 mois, la chute est brutale et concerne une seule semaine.",
          ]}
          conclusion="Hypothèse : c'est probablement un problème de donnée, pas un effondrement business réel. À investiguer."
        />

        <Step
          num="02"
          icon={Wrench}
          title="Remonter le lineage"
          duree="1h30"
          actions={[
            "Le Data Steward ouvre le data catalog et consulte la fiche de la métrique : elle est calculée par une vue SQL sur le Socle Data Relation Client.",
            "Il remonte les sources de cette vue : table Transactions (depuis la billetterie) + table Client (depuis le RCU) + table ContratFidelite (depuis le programme Grand Voyageur).",
            "Il interroge chaque source isolément. La table Transactions affiche un volume normal. La table Client aussi. Mais la table ContratFidelite a perdu 28% de ses lignes pour la semaine en question.",
          ]}
          conclusion="L'anomalie vient bien de la source ContratFidelite. Reste à comprendre pourquoi."
        />

        <InfoBox term="le lineage">
          Le data lineage, c'est la traçabilité d'une donnée. Quand un chiffre est faux dans un dashboard, on remonte la chaîne : ce chiffre vient de telle vue, qui vient de telle table, qui est alimentée par tel pipeline, qui pioche dans telle source. Sans lineage documenté, déboguer une anomalie peut prendre des semaines. Avec, ça se fait en heures.
        </InfoBox>

        <Step
          num="03"
          icon={AlertCircle}
          title="Diagnostiquer la cause racine"
          duree="2h"
          actions={[
            "Le Data Steward contacte l'équipe IT qui maintient le pipeline d'ingestion du programme Grand Voyageur.",
            "Il découvre qu'un changement de format sur le système source (mise à jour applicative le mardi précédent) a fait échouer silencieusement l'ingestion d'un sous-ensemble de contrats.",
            "Plus précisément : tous les contrats créés avant 2018 ont un champ date au format ancien, désormais rejeté par le pipeline.",
          ]}
          conclusion="Cause racine identifiée : régression dans la transformation après mise à jour de la source. Pas une perte business mais une perte de visibilité sur la donnée."
        />

        <Step
          num="04"
          icon={CheckCircle2}
          title="Piloter la correction"
          duree="Sur 3 jours"
          actions={[
            "Le Data Steward déclare officiellement un incident dans l'outil de ticketing (criticité élevée car le métier prend des décisions sur cette donnée).",
            "Il coordonne avec les Data Engineers : correctif du pipeline pour gérer les deux formats de date.",
            "Il déclenche un rattrapage de données : on rejoue l'ingestion sur la fenêtre temporelle perdue (1 semaine).",
            "Il vérifie après rattrapage que le dashboard remonte bien les bons chiffres.",
            "Il informe l'équipe Marketing du retour à la normale, en expliquant ce qui s'est passé.",
          ]}
          conclusion="Données corrigées. Le métier a confiance que le problème est résolu et compris."
        />

        <Step
          num="05"
          icon={BookCheck}
          title="Capitaliser pour la prochaine fois"
          duree="1h"
          actions={[
            "Le Data Steward documente l'incident dans l'outil de gestion des connaissances : symptôme, cause racine, correctif, leçon apprise.",
            "Il propose d'ajouter un contrôle qualité automatique : alerte si le volume d'une table source chute de plus de 15% d'une semaine à l'autre.",
            "Il met à jour la fiche de la métrique dans le data catalog avec une note sur les deux formats historiques de date.",
            "Il partage le retour d'expérience avec ses pairs Data Stewards lors du point hebdomadaire.",
          ]}
          conclusion="L'incident est une opportunité d'amélioration. La gouvernance progresse à chaque fois."
        />
      </div>

      {/* CE QU'ON RETIENT */}
      <section className="mt-16">
        <div className="bg-stone-900 text-white p-8 lg:p-12">
          <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 mb-4 font-medium">Ce qu'on retient</div>
          <h3 className="text-2xl md:text-3xl font-display font-light mb-8 leading-relaxed">
            Le Data Steward n'écrit pas de code à la place du Data Engineer. Il <em className="text-rose-300 font-medium not-italic">orchestre, coordonne et documente</em> tout ce qui touche à la donnée pour qu'elle reste fiable et utilisable par tous.
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Investigation', val: '~4h' },
              { label: 'Coordination', val: 'Multi-équipes' },
              { label: 'Documentation', val: 'Systématique' },
              { label: 'Capitalisation', val: 'Continue' },
            ].map((k, i) => (
              <div key={i} className="border-t border-stone-700 pt-4">
                <div className="text-xs text-stone-400 mb-1">{k.label}</div>
                <div className="font-display text-xl font-semibold text-white">{k.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Step({
  num,
  icon: Icon,
  title,
  duree,
  actions,
  conclusion,
}: {
  num: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  duree: string;
  actions: string[];
  conclusion: string;
}) {
  return (
    <div className="bg-white border border-stone-200 p-6 lg:p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="text-5xl font-display font-bold text-rose-700 leading-none mb-3">{num}</div>
          <div className="bg-stone-100 px-3 py-1 inline-block text-xs text-stone-600 font-medium">{duree}</div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <Icon size={20} className="text-rose-700" />
            <h3 className="text-xl font-display font-semibold">{title}</h3>
          </div>
          <ul className="space-y-2 mb-4">
            {actions.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-stone-700 leading-relaxed">
                <ArrowRight size={14} className="text-stone-400 mt-1 flex-shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <div className="bg-rose-50 border-l-2 border-rose-700 pl-4 py-2">
            <div className="text-[10px] uppercase tracking-wider text-rose-700 mb-1 font-medium">Conclusion</div>
            <p className="text-sm text-stone-700 leading-relaxed">{conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}