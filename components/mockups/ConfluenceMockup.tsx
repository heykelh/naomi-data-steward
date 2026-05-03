import { Star, MessageSquare, Share2, Edit2, ChevronRight } from 'lucide-react';

export default function ConfluenceMockup() {
  return (
    <div className="bg-white border border-stone-300 shadow-sm rounded-sm overflow-hidden">
      {/* Top bar */}
      <div className="bg-white border-b border-stone-200 px-4 py-2 flex items-center gap-3 text-xs">
        <div className="font-bold text-blue-600">Confluence</div>
        <ChevronRight size={12} className="text-stone-400" />
        <span className="text-stone-600">Espace Naomi Data</span>
        <ChevronRight size={12} className="text-stone-400" />
        <span className="text-stone-600">Spécifications</span>
        <ChevronRight size={12} className="text-stone-400" />
        <span className="text-stone-900 font-medium">SF-2026-SDR-014</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        {/* Sidebar */}
        <div className="hidden lg:block lg:col-span-1 bg-stone-50 border-r border-stone-200 p-4 text-xs">
          <div className="font-semibold text-stone-700 mb-3 uppercase tracking-wider text-[10px]">Pages dans cet espace</div>
          <ul className="space-y-1.5">
            <li className="text-stone-600 hover:text-blue-600 cursor-pointer">📁 Vue d'ensemble Naomi</li>
            <li className="text-stone-600 hover:text-blue-600 cursor-pointer">📁 Architecture SDR</li>
            <li className="text-stone-700 font-semibold">📁 Spécifications</li>
            <li className="ml-3 text-stone-500 hover:text-blue-600 cursor-pointer">SF-2026-SDR-013</li>
            <li className="ml-3 text-blue-700 font-semibold bg-blue-50 px-2 py-1 -ml-1">▸ SF-2026-SDR-014</li>
            <li className="ml-3 text-stone-500 hover:text-blue-600 cursor-pointer">SF-2026-SDR-015</li>
            <li className="text-stone-600 hover:text-blue-600 cursor-pointer mt-2">📁 Data Catalog</li>
            <li className="text-stone-600 hover:text-blue-600 cursor-pointer">📁 Procédures MCO</li>
            <li className="text-stone-600 hover:text-blue-600 cursor-pointer">📁 Comptes-rendus</li>
          </ul>
        </div>

        {/* Page content */}
        <div className="lg:col-span-3 p-6 lg:p-8">
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
            <span>Créé le 14 jan 2026 par <strong className="text-stone-700">Data Steward</strong></span>
            <span>·</span>
            <span>Mis à jour il y a 2h</span>
          </div>

          <h1 className="text-3xl font-bold text-stone-900 mb-2">SF-2026-SDR-014 — Vue Client Dormant Eligible</h1>
          <p className="text-stone-500 italic mb-6">Spécification fonctionnelle pour exposition d'une vue analytique dans le Socle Data Relation Client</p>

          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-stone-200 text-xs">
            <button className="flex items-center gap-1 text-stone-600 hover:text-blue-600"><Star size={12} /> Suivre</button>
            <button className="flex items-center gap-1 text-stone-600 hover:text-blue-600"><MessageSquare size={12} /> 6 commentaires</button>
            <button className="flex items-center gap-1 text-stone-600 hover:text-blue-600"><Share2 size={12} /> Partager</button>
            <button className="flex items-center gap-1 text-stone-600 hover:text-blue-600 ml-auto"><Edit2 size={12} /> Modifier</button>
          </div>

          {/* Status banner */}
          <div className="bg-amber-50 border border-amber-200 p-3 mb-6 flex items-center gap-3 text-xs">
            <span className="bg-amber-500 text-white px-2 py-0.5 rounded font-semibold">EN REVUE</span>
            <span className="text-stone-700">Validation attendue de : Data Owner Marketing TGV-IC</span>
          </div>

          {/* Sommaire */}
          <div className="bg-stone-50 border border-stone-200 p-4 mb-6">
            <div className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-semibold">Sommaire</div>
            <ol className="text-sm text-blue-600 space-y-1">
              <li>1. Contexte métier</li>
              <li>2. Règles de gestion</li>
              <li>3. Schéma de la vue exposée</li>
              <li>4. Lineage des données</li>
              <li>5. Contrôles qualité</li>
              <li>6. SLA et fréquence</li>
            </ol>
          </div>

          {/* Section 1 */}
          <h2 className="text-xl font-bold text-stone-900 mb-3 mt-6 pb-2 border-b border-stone-200">1. Contexte métier</h2>
          <p className="text-sm text-stone-700 leading-relaxed mb-4">
            Suite à la demande de la cellule Marketing CRM (ticket <span className="text-blue-600 underline">NAOMI-1247</span>), il est nécessaire d'exposer une vue analytique listant les clients du programme Grand Voyageur n'ayant pas effectué de voyage depuis 12 mois ou plus, afin de cibler une campagne de réactivation au Q2 2026.
          </p>

          {/* Section 2 - Règles */}
          <h2 className="text-xl font-bold text-stone-900 mb-3 mt-6 pb-2 border-b border-stone-200">2. Règles de gestion</h2>
          <table className="w-full text-xs border border-stone-200 mb-4">
            <thead className="bg-blue-50">
              <tr>
                <th className="text-left p-2 border-b border-stone-200 font-semibold">ID</th>
                <th className="text-left p-2 border-b border-stone-200 font-semibold">Règle</th>
                <th className="text-left p-2 border-b border-stone-200 font-semibold">Criticité</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['R01', 'Périmètre : clients porteurs d\'un contrat Grand Voyageur actif', 'Bloquante'],
                ['R02', 'Dormance : aucun voyage effectué depuis ≥ 12 mois glissants', 'Bloquante'],
                ['R03', 'Conformité RGPD : consentement marketing actif requis', 'Bloquante (légal)'],
                ['R04', 'Email présent et au format RFC 5322', 'Importante'],
                ['R05', 'Calcul indicateur de potentiel CA réactivation', 'Recommandée'],
              ].map((row, i) => (
                <tr key={i} className="border-b border-stone-100">
                  <td className="p-2 font-mono text-blue-600">{row[0]}</td>
                  <td className="p-2 text-stone-700">{row[1]}</td>
                  <td className="p-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded ${
                      row[2].includes('légal') ? 'bg-rose-100 text-rose-800' :
                      row[2] === 'Bloquante' ? 'bg-amber-100 text-amber-800' :
                      'bg-stone-100 text-stone-700'
                    }`}>{row[2]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tags */}
          <div className="pt-4 mt-6 border-t border-stone-200 flex flex-wrap gap-1.5 text-[10px]">
            {['data-steward', 'sdr', 'crm-marketing', 'rgpd', 'campagne-q2'].map((t) => (
              <span key={t} className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded">#{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}