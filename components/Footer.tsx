import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">Le projet</div>
            <p className="text-sm leading-relaxed mb-3">
              Site pédagogique simulant le rôle de Data Steward sur l'écosystème Naomi de SNCF Voyageurs. Construit pour comprendre et expliquer le métier à partir de données réelles ouvertes.
            </p>
            <Link href="/a-propos" className="text-sm text-rose-400 hover:text-rose-300 underline">
              En savoir plus →
            </Link>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">Sources de données</div>
            <ul className="text-sm space-y-1">
              <li>
                <a href="https://ressources.data.sncf.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  ressources.data.sncf.com
                </a>
              </li>
              <li className="text-stone-400 text-xs">Licence ODbL · Mise à jour quotidienne</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">Cadre méthodologique</div>
            <ul className="text-sm space-y-1">
              <li>DAMA-DMBOK (Data Management)</li>
              <li>BCBS 239 (transposition)</li>
              <li>RGPD</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-6 text-xs text-stone-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>Simulation indépendante — non affiliée à SNCF</span>
          <span>Sources publiques uniquement</span>
        </div>
      </div>
    </footer>
  );
}