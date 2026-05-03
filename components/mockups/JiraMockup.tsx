import { User, MessageSquare, Paperclip, Eye, ChevronDown, MoreHorizontal } from 'lucide-react';

export default function JiraMockup() {
  return (
    <div className="bg-white border border-stone-300 shadow-sm rounded-sm overflow-hidden">
      {/* Top bar */}
      <div className="bg-[#0747a6] text-white px-4 py-2 flex items-center gap-3 text-xs">
        <div className="font-bold">Jira</div>
        <div className="opacity-70">Naomi-Data /</div>
        <div className="opacity-70">Backlog Steward Q2</div>
        <div className="ml-auto opacity-70">Sprint 26.4</div>
      </div>

      {/* Breadcrumb + Title */}
      <div className="px-6 py-4 border-b border-stone-200">
        <div className="text-[11px] text-stone-500 mb-2">Naomi-Data / NAOMI-1247</div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">USER STORY</span>
          <span className="text-xs text-stone-500">NAOMI-1247</span>
        </div>
        <h3 className="text-xl font-semibold text-stone-900">
          Définir et exposer la vue « Grands Voyageurs Dormants » pour la campagne Q2
        </h3>
      </div>

      {/* Body : 2 cols */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* LEFT - Description */}
        <div className="lg:col-span-2 space-y-5">
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-semibold">Description</div>
            <div className="text-sm text-stone-700 leading-relaxed space-y-3">
              <p><strong>En tant que</strong> responsable CRM Marketing,</p>
              <p><strong>je veux</strong> disposer d'une liste fiabilisée des Grands Voyageurs n'ayant pas voyagé depuis 12 mois,</p>
              <p><strong>afin de</strong> lancer une campagne de réactivation ciblée au Q2 2026.</p>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-semibold">Critères d'acceptance</div>
            <ul className="text-sm text-stone-700 space-y-1.5">
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>La vue expose <code className="bg-stone-100 px-1 text-xs">id_client</code>, <code className="bg-stone-100 px-1 text-xs">email</code>, <code className="bg-stone-100 px-1 text-xs">segment_fidelite</code>, <code className="bg-stone-100 px-1 text-xs">dernier_voyage</code></span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>Filtrage strict sur consentement marketing actif (RGPD bloquant)</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>Dormance définie comme : aucun voyage effectué depuis ≥ 12 mois</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>Refresh quotidien à J-1 06:00</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>Documentation Confluence à jour avec le data lineage</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>Volumétrie attendue entre 12 000 et 18 000 lignes (alerte sinon)</span></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-semibold">Tâches techniques</div>
            <div className="space-y-2">
              {[
                { id: 'NAOMI-1248', titre: 'Spec ingestion consentement RGPD', status: 'Done' },
                { id: 'NAOMI-1249', titre: 'Création de la vue sdr.v_client_dormant', status: 'In Progress' },
                { id: 'NAOMI-1250', titre: 'Contrôles qualité dédiés (DQ-014)', status: 'In Progress' },
                { id: 'NAOMI-1251', titre: 'Documentation Confluence + Data Catalog', status: 'To Do' },
              ].map((t) => (
                <div key={t.id} className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded text-sm">
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-medium">TASK</span>
                  <span className="text-blue-700 font-mono text-xs">{t.id}</span>
                  <span className="flex-1 text-stone-700">{t.titre}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                    t.status === 'Done' ? 'bg-emerald-100 text-emerald-800' :
                    t.status === 'In Progress' ? 'bg-amber-100 text-amber-800' :
                    'bg-stone-200 text-stone-700'
                  }`}>{t.status.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200">
            <div className="flex items-center gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-1"><MessageSquare size={12} /> 8 commentaires</div>
              <div className="flex items-center gap-1"><Paperclip size={12} /> 2 fichiers</div>
              <div className="flex items-center gap-1"><Eye size={12} /> 4 watchers</div>
            </div>
          </div>
        </div>

        {/* RIGHT - Details panel */}
        <div className="lg:col-span-1">
          <div className="bg-stone-50 border border-stone-200 p-4 text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <span className="font-semibold text-stone-700">Détails</span>
              <ChevronDown size={14} className="text-stone-400" />
            </div>

            <Field label="Statut" value={<span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-medium">IN PROGRESS</span>} />
            <Field label="Sprint" value="Sprint 26.4" />
            <Field label="Points" value="8" />
            <Field label="Priorité" value={<span className="text-rose-700 font-medium">⬆ Haute</span>} />
            <Field label="Composant" value="Socle Data RC" />
            <Field label="Epic" value="Campagne Réactivation Q2 2026" />

            <div className="pt-2 border-t border-stone-200">
              <Field label="Assigné à" value={
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-rose-700 text-white rounded-full flex items-center justify-center text-[9px] font-bold">DS</div>
                  <span>Data Steward</span>
                </div>
              } />
              <Field label="Rapporteur" value={
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[9px] font-bold">PO</div>
                  <span>Product Owner SDR</span>
                </div>
              } />
            </div>

            <div className="pt-2 border-t border-stone-200">
              <Field label="Créé le" value="14 jan 2026" />
              <Field label="MAJ" value="il y a 2h" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-2 items-center py-1">
      <span className="text-stone-500">{label}</span>
      <span className="col-span-2 text-stone-800">{value}</span>
    </div>
  );
}