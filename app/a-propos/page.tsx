import Link from 'next/link';
import { ExternalLink, Code2, Mail } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function AProposPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 lg:py-20">
      <SectionTitle
        eyebrow="À propos du projet"
        title="Pourquoi ce site existe"
        subtitle="Un projet personnel construit pour comprendre, expliquer et illustrer le métier de Data Steward avec rigueur — et avec des données réelles."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-display font-bold mb-4">L'objectif</h2>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                Le métier de Data Steward est encore mal connu en France, y compris des personnes qui travaillent dans la donnée. Ce site est une tentative honnête de le rendre <strong>compréhensible et concret</strong>, en s'appuyant sur :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Des <strong>définitions sourcées</strong> issues de références reconnues (DAMA-DMBOK, sources spécialisées française) plutôt que d'invention.</li>
                <li>Des <strong>données réelles ouvertes</strong> publiées par SNCF (sous licence ODbL), récupérées en direct via leur API publique.</li>
                <li>Un <strong>cas d'usage concret</strong> simulé pas-à-pas, qui montre ce que fait vraiment un Data Steward face à une anomalie.</li>
              </ul>
              <p>
                L'écosystème <strong>Naomi</strong> de SNCF Voyageurs est utilisé comme cadre narratif parce qu'il représente bien les enjeux modernes de gouvernance de la donnée client : multi-sources, RGPD, ouverture à la concurrence, modélisation prédictive. Mais ce n'est ni un outil interne SNCF, ni une recréation de leur infrastructure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">Ce que ce site n'est pas</h2>
            <div className="space-y-3 text-stone-700">
              <div className="flex gap-3">
                <span className="text-rose-700 font-bold">✗</span>
                <p>Pas un outil interne SNCF — c'est un projet indépendant à des fins pédagogiques.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-rose-700 font-bold">✗</span>
                <p>Pas un benchmark exhaustif des plateformes data — c'est une simulation simplifiée.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-rose-700 font-bold">✗</span>
                <p>Pas un substitut à une formation — c'est une porte d'entrée, pas un cours complet.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-rose-700 font-bold">✗</span>
                <p>Pas affilié à SNCF — aucune information confidentielle ou interne n'a été utilisée.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">Sources & références</h2>
            <p className="text-stone-700 mb-4">
              Toutes les définitions et concepts sont issus de sources publiques que vous pouvez vérifier librement.
            </p>
            <div className="space-y-3">
              {[
                { titre: 'DAMA-DMBOK 2nd Edition (2017)', url: 'https://www.dama.org', desc: 'Référentiel international du data management' },
                { titre: 'Open Data SNCF', url: 'https://ressources.data.sncf.com', desc: 'Datasets sous licence ODbL' },
                { titre: 'Wikipédia — Data Steward', url: 'https://fr.wikipedia.org/wiki/Data_steward', desc: 'Article de référence en français' },
                { titre: 'Présentations publiques SNCF (Big Data Paris, Viva Tech 2023)', url: 'https://www.larevuedudigital.com/les-20-projets-phares-de-sncf-presentes-lors-de-viva-tech-2023/', desc: 'Pour le contexte Naomi' },
                { titre: 'CustUp / Cartelis (références françaises RCU/CDP)', url: 'https://www.custup.com', desc: 'Pour les concepts métier' },
              ].map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 bg-white border border-stone-200 hover:border-stone-900 transition-colors">
                  <ExternalLink size={16} className="text-rose-700 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{s.titre}</div>
                    <div className="text-xs text-stone-600 mt-1">{s.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">Stack technique</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                { name: 'Next.js 16', cat: 'Framework' },
                { name: 'TypeScript', cat: 'Langage' },
                { name: 'Tailwind v4', cat: 'CSS' },
                { name: 'Recharts', cat: 'Data viz' },
                { name: 'Lucide', cat: 'Icônes' },
                { name: 'Vercel', cat: 'Hébergement' },
              ].map((t, i) => (
                <div key={i} className="bg-white border border-stone-200 p-3">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-stone-500">{t.cat}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-4">
              Les données SNCF sont récupérées via Server Components Next.js avec une mise en cache de 24h, ce qui rend l'hébergement gratuit sur Vercel free tier.
            </p>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-32 space-y-4">
            <div className="bg-stone-900 text-white p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-rose-400 mb-3 font-medium">L'auteur</div>
              <h3 className="text-xl font-display font-semibold mb-3">Un projet personnel</h3>
              <p className="text-sm text-stone-300 leading-relaxed mb-6">
                Ce site a été construit dans le cadre d'une démarche personnelle d'apprentissage et de projection sur le métier de Data Steward. Tout retour, correction ou suggestion est le bienvenu.
              </p>
              <div className="space-y-2 text-sm">
                <a href="#" className="flex items-center gap-2 text-stone-300 hover:text-white">
                  <Mail size={14} /> Contact
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-300 hover:text-white">
                  <Code2 size={14} /> GitHub du projet
                </a>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6">
              <div className="text-[10px] uppercase tracking-wider text-amber-800 mb-2 font-medium">Transparence</div>
              <p className="text-sm text-amber-900 leading-relaxed">
                Aucune information interne SNCF n'a été utilisée. Le projet ne représente pas l'organisation, les outils ou les données réelles de SNCF Voyageurs au-delà de ce qui est public.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}