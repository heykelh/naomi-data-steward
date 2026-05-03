import { Play, Save, Settings, ChevronDown, Check, Database as DBIcon } from 'lucide-react';

export default function DatabricksMockup() {
  return (
    <div className="bg-[#1b1f24] border border-stone-700 shadow-md rounded-sm overflow-hidden text-stone-200">
      {/* Top bar */}
      <div className="bg-[#0e1116] border-b border-stone-800 px-4 py-2 flex items-center gap-3 text-xs">
        <div className="flex items-center gap-1.5 text-orange-400 font-bold">
          <DBIcon size={14} />
          <span>Databricks</span>
        </div>
        <span className="text-stone-500">/</span>
        <span className="text-stone-400">naomi-workspace</span>
        <span className="text-stone-500">/</span>
        <span className="text-stone-200">audit_qualite_clients_dormants.sql</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="flex items-center gap-1 bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded text-[10px]">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            Cluster « Naomi-Steward » actif
          </span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#1b1f24] border-b border-stone-800 px-4 py-1.5 flex items-center gap-2 text-xs">
        <button className="flex items-center gap-1 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded">
          <Play size={11} /> Exécuter tout
        </button>
        <button className="flex items-center gap-1 bg-stone-700 text-stone-200 px-2 py-1 rounded hover:bg-stone-600">
          <Save size={11} /> Sauvegarder
        </button>
        <div className="ml-auto flex items-center gap-2 text-stone-400">
          <span>SQL</span>
          <ChevronDown size={11} />
        </div>
      </div>

      {/* Notebook cells */}
      <div className="p-4 space-y-3 font-mono text-[12px]">
        {/* Markdown cell */}
        <div className="bg-[#22272d] border border-stone-700 rounded">
          <div className="px-3 py-1 bg-[#0e1116] border-b border-stone-700 text-[10px] text-stone-500 flex items-center justify-between">
            <span>Cell 1 · Markdown</span>
            <span className="text-stone-600">Cmd 1</span>
          </div>
          <div className="p-3 text-stone-300 font-sans text-sm">
            <h4 className="text-base font-bold text-white mb-1"># Audit qualité — Clients dormants éligibles</h4>
            <p className="text-stone-400 text-xs">Validation des règles R01 à R04 avant industrialisation de la vue dans le Socle Data RC. Auteur : Data Steward · Ticket : NAOMI-1249</p>
          </div>
        </div>

        {/* SQL cell */}
        <div className="bg-[#22272d] border border-stone-700 rounded">
          <div className="px-3 py-1 bg-[#0e1116] border-b border-stone-700 text-[10px] text-stone-500 flex items-center justify-between">
            <span>Cell 2 · SQL</span>
            <span className="text-emerald-400 flex items-center gap-1"><Check size={10} /> Exécuté il y a 3 min · 2,4s</span>
          </div>
          <div className="p-3 leading-relaxed">
            <span className="text-stone-500">-- Comptage et qualité par segment de fidélité</span><br/>
            <span className="text-pink-400">SELECT</span>{' '}
            <span className="text-blue-300">c.segment_fidelite</span>,<br/>
            {'  '}<span className="text-pink-400">COUNT</span>(<span className="text-pink-400">DISTINCT</span> c.id_client) <span className="text-pink-400">AS</span> nb_clients,<br/>
            {'  '}<span className="text-pink-400">COUNT</span>(<span className="text-pink-400">CASE WHEN</span> c.email <span className="text-pink-400">IS NOT NULL THEN</span> <span className="text-orange-400">1</span> <span className="text-pink-400">END</span>) <span className="text-pink-400">AS</span> avec_email,<br/>
            {'  '}<span className="text-pink-400">COUNT</span>(<span className="text-pink-400">CASE WHEN</span> cons.consentement_marketing = <span className="text-pink-400">TRUE THEN</span> <span className="text-orange-400">1</span> <span className="text-pink-400">END</span>) <span className="text-pink-400">AS</span> avec_consentement,<br/>
            {'  '}<span className="text-pink-400">MAX</span>(t.derniere_transaction) <span className="text-pink-400">AS</span> activite_la_plus_recente<br/>
            <span className="text-pink-400">FROM</span> sdr.client c<br/>
            <span className="text-pink-400">LEFT JOIN</span> sdr.consentement cons <span className="text-pink-400">ON</span> c.id_client = cons.id_client<br/>
            <span className="text-pink-400">LEFT JOIN</span> sdr.derniere_transaction t <span className="text-pink-400">ON</span> c.id_client = t.id_client<br/>
            <span className="text-pink-400">WHERE</span> t.derniere_transaction &lt; <span className="text-pink-400">CURRENT_DATE</span> - <span className="text-pink-400">INTERVAL</span> <span className="text-orange-400">'12 months'</span><br/>
            <span className="text-pink-400">GROUP BY</span> c.segment_fidelite<br/>
            <span className="text-pink-400">ORDER BY</span> nb_clients <span className="text-pink-400">DESC</span>;
          </div>

          {/* Result */}
          <div className="border-t border-stone-700 bg-[#0e1116]">
            <div className="px-3 py-1.5 text-[10px] text-stone-500 flex items-center gap-3">
              <span>Résultats · 4 lignes · 2,4s</span>
              <span className="text-emerald-400">▸ Table</span>
            </div>
            <table className="w-full text-[11px] font-sans">
              <thead>
                <tr className="bg-[#1b1f24] text-stone-400">
                  <th className="text-left px-3 py-1.5 border-r border-stone-700">segment_fidelite</th>
                  <th className="text-right px-3 py-1.5 border-r border-stone-700">nb_clients</th>
                  <th className="text-right px-3 py-1.5 border-r border-stone-700">avec_email</th>
                  <th className="text-right px-3 py-1.5 border-r border-stone-700">avec_consentement</th>
                  <th className="text-left px-3 py-1.5">activite_la_plus_recente</th>
                </tr>
              </thead>
              <tbody className="text-stone-300">
                {[
                  ['Grand Voyageur Le Club', '2 134', '2 098', '1 945', '2024-12-18'],
                  ['Grand Voyageur Plus', '4 218', '4 102', '3 712', '2024-11-22'],
                  ['Grand Voyageur', '6 884', '6 542', '5 123', '2024-10-04'],
                  ['Sans programme', '1 596', '1 476', '858', '2024-08-30'],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-stone-800 hover:bg-[#1b1f24]">
                    {row.map((v, j) => (
                      <td key={j} className={`px-3 py-1.5 border-r border-stone-800 last:border-r-0 ${j === 0 ? 'text-orange-300' : j > 0 && j < 4 ? 'text-right text-cyan-300' : 'text-stone-400'}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Markdown commentary */}
        <div className="bg-[#22272d] border border-stone-700 rounded">
          <div className="px-3 py-1 bg-[#0e1116] border-b border-stone-700 text-[10px] text-stone-500">
            <span>Cell 3 · Markdown</span>
          </div>
          <div className="p-3 text-stone-300 font-sans text-sm space-y-2">
            <p className="text-stone-200"><strong className="text-orange-400">Observations :</strong></p>
            <ul className="text-xs text-stone-400 space-y-1 ml-4 list-disc">
              <li>Volume total <strong className="text-stone-200">14 832 clients</strong> dormants — cohérent avec l'estimation annoncée à CRMS</li>
              <li>Taux de complétude email <strong className="text-stone-200">96%</strong> — au-dessus du seuil R04 (95%) ✓</li>
              <li>Taux de consentement marketing <strong className="text-amber-400">78%</strong> — application stricte de R03 va exclure 22% de la cible. À remonter au métier.</li>
              <li>Segment "Sans programme" représente 11% — vérifier avec le PO si on les inclut ou non</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}