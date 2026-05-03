import { Briefcase, FileText, BarChart3, Database, GitBranch } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import InfoBox from '@/components/InfoBox';
import JiraMockup from '@/components/mockups/JiraMockup';
import ConfluenceMockup from '@/components/mockups/ConfluenceMockup';
import PowerBIMockup from '@/components/mockups/PowerBIMockup';
import DatabricksMockup from '@/components/mockups/DatabricksMockup';
import CycleProjet from '@/components/mockups/CycleProjet';

export default function OutilsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 lg:py-20">
      <SectionTitle
        eyebrow="Outils & méthode"
        title="Comment un Data Steward utilise concrètement ses outils"
        subtitle="Présentation didactique des outils-clés du quotidien : JIRA pour les exigences, Confluence pour la documentation, PowerBI pour la restitution, Databricks pour l'analyse. Chaque outil illustré par un cas concret simulé sur les données SNCF."
      />

      {/* INTRO */}
      <InfoBox term="cette page">
        Les écrans présentés ci-dessous sont des <strong>mockups pédagogiques</strong> reconstitués pour expliquer l'usage de chaque outil. Ce sont des reconstitutions fidèles d'interfaces que vous trouverez dans n'importe quelle équipe Data en entreprise — pas des captures réelles SNCF.
      </InfoBox>

      {/* SOMMAIRE */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-stone-200 my-12">
        {[
          { num: '01', label: 'Cycle projet', icon: GitBranch, anchor: '#cycle' },
          { num: '02', label: 'JIRA', icon: Briefcase, anchor: '#jira' },
          { num: '03', label: 'Confluence', icon: FileText, anchor: '#confluence' },
          { num: '04', label: 'PowerBI', icon: BarChart3, anchor: '#powerbi' },
          { num: '05', label: 'Databricks', icon: Database, anchor: '#databricks' },
        ].map((item) => (
          <a key={item.num} href={item.anchor} className="bg-white p-4 hover:bg-stone-50 transition-colors group">
            <item.icon size={18} className="text-rose-700 mb-2" />
            <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-1">{item.num}</div>
            <div className="text-sm font-display font-semibold group-hover:text-rose-700 transition-colors">{item.label}</div>
          </a>
        ))}
      </div>

      {/* CYCLE PROJET */}
      <section id="cycle" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">01 — Le cycle de vie d'un projet data</h2>
        <p className="text-stone-600 max-w-3xl mb-8 leading-relaxed">
          Avant de plonger dans les outils, il faut comprendre où chacun s'insère dans le cycle d'un projet. De l'idée métier jusqu'à la maintenance opérationnelle, voici les phases types et le rôle du Data Steward à chaque étape.
        </p>
        <CycleProjet />
      </section>

      {/* JIRA */}
      <section id="jira" className="mb-20 scroll-mt-32">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
            <Briefcase size={20} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">02 — JIRA</h2>
        </div>
        <p className="text-stone-600 max-w-3xl mb-2 leading-relaxed">
          <strong>Outil de gestion des exigences et du backlog projet.</strong> Chaque demande métier devient un ticket JIRA, qualifié, priorisé, suivi jusqu'à sa livraison.
        </p>
        <p className="text-sm text-stone-500 mb-6 italic">
          Le Data Steward est souvent rapporteur ou assignee sur les tickets de cadrage et de validation qualité.
        </p>

        <JiraMockup />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { label: 'Création du ticket', desc: "Le Data Steward formalise la demande métier en User Story claire avec critères d'acceptance." },
            { label: 'Affinage et estimation', desc: "Lors du refinement, il aide l'équipe à estimer la charge en story points selon la complexité data." },
            { label: 'Validation à la livraison', desc: "À la recette, il vérifie que la donnée livrée respecte les règles de qualité définies dans le ticket." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-stone-200 p-4">
              <div className="text-xs uppercase tracking-wider text-blue-700 mb-2 font-semibold">{item.label}</div>
              <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONFLUENCE */}
      <section id="confluence" className="mb-20 scroll-mt-32">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
            <FileText size={20} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">03 — Confluence</h2>
        </div>
        <p className="text-stone-600 max-w-3xl mb-2 leading-relaxed">
          <strong>Wiki d'entreprise pour toute la documentation projet.</strong> Spécifications, fiches de données, procédures, comptes-rendus de réunion : tout y vit.
        </p>
        <p className="text-sm text-stone-500 mb-6 italic">
          Le Data Steward y produit notamment les fiches de spécification fonctionnelle et alimente le data catalog interne.
        </p>

        <ConfluenceMockup />

        <div className="bg-stone-900 text-white p-6 mt-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 mb-2 font-medium">Pourquoi c'est essentiel</div>
          <p className="text-sm leading-relaxed">
            Sans Confluence, la connaissance reste dans la tête des gens. Quand un Data Steward part en vacances, son successeur doit pouvoir reprendre un dossier en lisant la documentation. C'est aussi ce qui permet l'audit (« qui a validé cette règle ? quand ? »).
          </p>
        </div>
      </section>

      {/* POWERBI */}
      <section id="powerbi" className="mb-20 scroll-mt-32">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center">
            <BarChart3 size={20} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">04 — PowerBI</h2>
        </div>
        <p className="text-stone-600 max-w-3xl mb-2 leading-relaxed">
          <strong>Plateforme de data visualisation Microsoft.</strong> Permet de construire des dashboards interactifs à partir de sources SQL, Excel, Databricks…
        </p>
        <p className="text-sm text-stone-500 mb-6 italic">
          Le Data Steward n'est pas le développeur principal des dashboards mais il valide la qualité des données qui les alimentent et participe à la définition des indicateurs.
        </p>

        <PowerBIMockup />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white border border-stone-200 p-5">
            <h3 className="font-display font-semibold text-yellow-700 mb-2">Le Data Steward et PowerBI</h3>
            <ul className="text-sm space-y-2 text-stone-700">
              <li>• Définit les indicateurs avec le métier (KPI, SLA)</li>
              <li>• Valide les sources et leur qualité avant connexion</li>
              <li>• Vérifie la cohérence des chiffres affichés</li>
              <li>• Identifie les zones grises et fait corriger</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-200 p-5">
            <h3 className="font-display font-semibold text-stone-900 mb-2">Niveau attendu (poste type)</h3>
            <ul className="text-sm space-y-2 text-stone-700">
              <li>• <strong>Débutant suffit</strong> pour la plupart des postes Data Steward</li>
              <li>• Lire et comprendre un rapport existant</li>
              <li>• Modifier un visuel simple</li>
              <li>• Connecter une source Databricks ou SQL Server</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DATABRICKS */}
      <section id="databricks" className="mb-20 scroll-mt-32">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center">
            <Database size={20} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">05 — Databricks</h2>
        </div>
        <p className="text-stone-600 max-w-3xl mb-2 leading-relaxed">
          <strong>Plateforme cloud d'analyse de données à grande échelle.</strong> Combine SQL, Python, R et Spark dans une interface unifiée. Largement adoptée par les grandes entreprises pour leurs lakehouses.
        </p>
        <p className="text-sm text-stone-500 mb-6 italic">
          Le Data Steward y exécute des requêtes d'audit qualité, explore la donnée pour répondre à un besoin métier, valide des règles avant industrialisation par les Data Engineers.
        </p>

        <DatabricksMockup />

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8">
          <div className="text-[10px] uppercase tracking-wider text-orange-800 font-semibold mb-2">Cas d'usage typique</div>
          <p className="text-sm text-stone-800 leading-relaxed">
            « L'équipe Marketing demande combien de Grands Voyageurs n'ont pas voyagé depuis 12 mois. Avant de demander un développement, le Data Steward ouvre Databricks, écrit la requête SQL d'analyse, vérifie le volume retourné et la cohérence du résultat. Si le besoin est récurrent, alors seulement on industrialise via une vue dans le Socle Data. »
          </p>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="mt-20">
        <div className="bg-stone-900 text-white p-8 lg:p-12">
          <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 mb-4 font-medium">L'écosystème complet</div>
          <h3 className="text-2xl md:text-3xl font-display font-light mb-6 leading-relaxed">
            Ces 4 outils couvrent <em className="text-rose-300 font-medium not-italic">l'intégralité du cycle quotidien</em> d'un Data Steward : du recueil du besoin à la validation finale, en passant par l'analyse exploratoire et la documentation.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { o: 'JIRA', r: 'Tracer les exigences' },
              { o: 'Confluence', r: 'Documenter durablement' },
              { o: 'Databricks', r: 'Explorer la donnée' },
              { o: 'PowerBI', r: 'Restituer aux métiers' },
            ].map((item, i) => (
              <div key={i} className="border-t border-stone-700 pt-4">
                <div className="text-xs text-stone-400 mb-1">{item.o}</div>
                <div className="font-display font-semibold text-white">{item.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}