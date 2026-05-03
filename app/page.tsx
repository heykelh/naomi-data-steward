import Link from 'next/link';
import { ArrowRight, Database, Shield, Workflow, BookOpen, BarChart3, Target } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function HomePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 lg:py-20">
      {/* HERO */}
      <section className="mb-20 lg:mb-32">
        <div className="text-[11px] uppercase tracking-[0.25em] text-rose-700 font-semibold mb-6">
          Le métier de Data Steward, expliqué simplement
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-8 max-w-5xl">
          Comprendre la donnée d'un grand opérateur ferroviaire <span className="text-rose-700">comme si vous y étiez</span>.
        </h1>
        <p className="text-lg md:text-xl font-light text-stone-600 max-w-3xl leading-relaxed mb-10">
          Ce site est une simulation pédagogique du rôle de Data Steward sur l'écosystème Naomi de SNCF Voyageurs. Construit avec des <strong className="text-stone-900 font-medium">données réelles ouvertes</strong> par SNCF, il explique chaque concept au fur et à mesure — pour que la donnée parle à tous, pas seulement aux experts.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/donnees" className="bg-stone-900 text-white px-6 py-3 text-sm font-medium hover:bg-rose-700 transition-colors flex items-center gap-2">
            Voir les données SNCF en live <ArrowRight size={16} />
          </Link>
          <Link href="/lexique" className="border border-stone-900 text-stone-900 px-6 py-3 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors">
            Comprendre le jargon
          </Link>
          <Link href="/naomi" className="border border-stone-300 text-stone-700 px-6 py-3 text-sm font-medium hover:border-stone-900 hover:text-stone-900 transition-colors">
            Qu'est-ce que Naomi ?
          </Link>
        </div>
      </section>

      {/* C'EST QUOI UN DATA STEWARD */}
      <section className="mb-20 lg:mb-32">
        <SectionTitle
          eyebrow="01 — Le métier"
          title="Un Data Steward, c'est quoi exactement ?"
          subtitle="Imaginez une grande bibliothèque où des millions de livres arrivent chaque jour, dans des langues différentes, avec des classements incohérents. Le Data Steward, c'est le bibliothécaire en chef qui fait en sorte que tout le monde retrouve le bon livre, à jour, avec la bonne définition."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
          {[
            {
              icon: BookOpen,
              title: 'Documenter',
              desc: "Il définit ce qu'est précisément chaque donnée. \"Un client actif\", c'est qui ? \"Un voyage\" ça commence quand ? Ces définitions sont écrites, validées, partagées.",
            },
            {
              icon: Shield,
              title: 'Garantir la qualité',
              desc: "Il met en place des contrôles automatiques : pas de doublons, pas de champs manquants, pas d'incohérences. Quand un problème survient, il enquête et fait corriger.",
            },
            {
              icon: Workflow,
              title: 'Faire dialoguer',
              desc: "Entre les équipes métier (marketing, opérations) qui ont des besoins, et les équipes IT (data engineers) qui construisent. Le Data Steward traduit dans les deux sens.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8">
              <item.icon size={28} className="text-rose-700 mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-stone-900 text-white p-8 lg:p-10">
          <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 mb-3 font-medium">
            En une phrase
          </div>
          <p className="text-xl md:text-2xl font-display font-light leading-relaxed">
            Le Data Steward est <em className="text-rose-300 not-italic font-medium">le gardien quotidien de la qualité et de la compréhension</em> d'un domaine de données dans une organisation. Il met en œuvre concrètement les règles de gouvernance définies par les Data Owners.
          </p>
          <p className="text-xs text-stone-400 mt-4">Source : DAMA-DMBOK 2017 (référence internationale du data management)</p>
        </div>
      </section>

      {/* CONTEXTE SNCF */}
      <section className="mb-20 lg:mb-32">
        <SectionTitle
          eyebrow="02 — Pourquoi la SNCF a besoin de ça"
          title="Une révolution silencieuse : la donnée client devient stratégique"
          subtitle="Avec l'ouverture du marché ferroviaire à la concurrence, fidéliser ses voyageurs n'est plus une option. SNCF Voyageurs investit massivement dans la connaissance de ses clients — et donc dans la qualité des données qui la rendent possible."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-200 p-8">
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-3 font-medium">Avant</div>
            <h3 className="text-2xl font-display font-semibold mb-4">Données dispersées</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Pendant longtemps, les informations sur les voyageurs étaient éparpillées dans une dizaine de systèmes différents : la billetterie, le programme de fidélité Grand Voyageur, le site web, l'application mobile, les enquêtes en gare…
            </p>
            <p className="text-sm text-stone-500">
              Résultat : un même client pouvait être traité comme trois personnes différentes selon le canal qu'il utilisait. Les campagnes marketing tiraient à l'aveugle.
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-8">
            <div className="text-[10px] uppercase tracking-[0.2em] text-rose-700 mb-3 font-medium">Aujourd'hui</div>
            <h3 className="text-2xl font-display font-semibold mb-4">Données unifiées via Naomi</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Naomi est la plateforme Big Data de connaissance client de SNCF Voyageurs. Elle agrège l'ensemble des données pour offrir une vue 360° de chaque voyageur, prédire ses usages et personnaliser les offres.
            </p>
            <Link href="/naomi" className="text-sm text-rose-700 font-medium hover:underline inline-flex items-center gap-1">
              Comprendre Naomi en détail <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT THIS SITE OFFERS */}
      <section>
        <SectionTitle
          eyebrow="03 — Ce que vous trouverez ici"
          title="Six entrées pour explorer le métier"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {[
            { href: '/lexique', icon: BookOpen, title: 'Le lexique', desc: "Tous les termes (RCU, MDM, DAMA, lineage…) définis simplement, avec exemples SNCF." },
            { href: '/naomi', icon: Database, title: 'Naomi expliqué', desc: "Ce que fait vraiment cette plateforme, comment elle est née, ce qu'elle alimente." },
            { href: '/donnees', icon: BarChart3, title: 'Les vraies données', desc: "Dashboards interactifs sur les datasets ouverts SNCF (fréquentation, régularité)." },
            { href: '/cas-usage', icon: Target, title: 'Cas d\'usage Steward', desc: "Comment un Data Steward analyse et corrige une donnée concrète." },
            { href: '/a-propos', icon: Shield, title: 'À propos', desc: "L'objectif de ce projet, ses sources, son auteur." },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="bg-white p-6 hover:bg-stone-50 transition-colors group">
              <item.icon size={20} className="text-rose-700 mb-3" />
              <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-rose-700 transition-colors">{item.title}</h3>
              <p className="text-sm text-stone-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}