import { TrendingUp, TrendingDown, Minus, Filter, Download, Maximize2 } from 'lucide-react';

export default function PowerBIMockup() {
  return (
    <div className="bg-[#f3f2f1] border border-stone-300 shadow-sm rounded-sm overflow-hidden">
      {/* Top bar */}
      <div className="bg-[#f8c93d] border-b border-yellow-600 px-4 py-2 flex items-center gap-3 text-xs">
        <div className="font-bold text-stone-900">Power BI</div>
        <span className="text-stone-700">|</span>
        <span className="text-stone-700">Pilotage Campagne Réactivation Q2 2026</span>
        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 bg-white rounded text-stone-700"><Filter size={11} /> Filtres</button>
          <button className="flex items-center gap-1 px-2 py-1 bg-white rounded text-stone-700"><Download size={11} /> Exporter</button>
          <button className="flex items-center gap-1 px-2 py-1 bg-white rounded text-stone-700"><Maximize2 size={11} /></button>
        </div>
      </div>

      {/* Filters bar */}
      <div className="bg-white border-b border-stone-200 px-4 py-2 flex flex-wrap items-center gap-3 text-xs">
        <span className="text-stone-500">Filtres actifs :</span>
        <span className="bg-yellow-100 border border-yellow-300 px-2 py-0.5 rounded">Période : Q2 2026</span>
        <span className="bg-yellow-100 border border-yellow-300 px-2 py-0.5 rounded">Segment : Grand Voyageur</span>
        <span className="bg-yellow-100 border border-yellow-300 px-2 py-0.5 rounded">Statut : Dormant 12m+</span>
      </div>

      {/* Dashboard */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* KPIs */}
        <KPI label="Cible identifiée" value="14 832" sub="clients dormants éligibles" trend="up" delta="+5,2%" />
        <KPI label="Email valides" value="14 218" sub="taux de joignabilité 95,9%" trend="up" delta="+1,1%" />
        <KPI label="Taux d'ouverture" value="22,4 %" sub="vs cible 25%" trend="down" delta="-2,6 pts" />
        <KPI label="Conversions" value="1 187" sub="voyages réalisés post-campagne" trend="up" delta="+8 ce jour" />

        {/* Bar chart */}
        <div className="md:col-span-7 bg-white border border-stone-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-stone-900">Performance par segment</h3>
            <span className="text-[10px] text-stone-500">Mise à jour : il y a 4h</span>
          </div>
          <div className="space-y-2">
            {[
              { seg: 'Grand Voyageur Le Club', cible: 100, conv: 78 },
              { seg: 'Grand Voyageur Plus', cible: 100, conv: 64 },
              { seg: 'Grand Voyageur', cible: 100, conv: 41 },
              { seg: 'Sans programme actif', cible: 100, conv: 18 },
            ].map((row, i) => (
              <div key={i} className="text-xs">
                <div className="flex justify-between mb-1">
                  <span className="text-stone-700">{row.seg}</span>
                  <span className="font-mono text-stone-600">{row.conv}%</span>
                </div>
                <div className="h-3 bg-stone-100 relative">
                  <div className="absolute inset-y-0 left-0 bg-yellow-400" style={{ width: `${row.conv}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie placeholder */}
        <div className="md:col-span-5 bg-white border border-stone-200 p-4">
          <h3 className="text-sm font-semibold text-stone-900 mb-3">Répartition canaux d'acquisition</h3>
          <div className="flex items-center justify-center py-2">
            <svg viewBox="0 0 100 100" className="w-32 h-32">
              <circle cx="50" cy="50" r="40" fill="#fcd34d" />
              <path d="M50,50 L50,10 A40,40 0 0,1 88,62 z" fill="#f59e0b" />
              <path d="M50,50 L88,62 A40,40 0 0,1 60,87 z" fill="#9f1239" />
              <circle cx="50" cy="50" r="20" fill="white" />
            </svg>
          </div>
          <div className="space-y-1.5 text-xs">
            <Legend color="#fcd34d" label="Email direct" pct="58%" />
            <Legend color="#f59e0b" label="Push application" pct="27%" />
            <Legend color="#9f1239" label="SMS" pct="15%" />
          </div>
        </div>

        {/* Time series */}
        <div className="md:col-span-12 bg-white border border-stone-200 p-4">
          <h3 className="text-sm font-semibold text-stone-900 mb-3">Évolution quotidienne — taux d'ouverture & clic</h3>
          <svg viewBox="0 0 600 120" className="w-full h-24">
            <defs>
              <linearGradient id="gradPB" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,80 L50,70 L100,75 L150,55 L200,60 L250,40 L300,45 L350,30 L400,35 L450,25 L500,30 L550,20 L600,25 L600,120 L0,120 Z" fill="url(#gradPB)" />
            <path d="M0,80 L50,70 L100,75 L150,55 L200,60 L250,40 L300,45 L350,30 L400,35 L450,25 L500,30 L550,20 L600,25" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <path d="M0,100 L50,95 L100,98 L150,85 L200,88 L250,75 L300,78 L350,68 L400,72 L450,62 L500,68 L550,58 L600,62" fill="none" stroke="#9f1239" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
          <div className="flex items-center gap-4 text-xs mt-2">
            <Legend color="#f59e0b" label="Taux d'ouverture" />
            <Legend color="#9f1239" label="Taux de clic" />
          </div>
        </div>
      </div>
    </div>
  );
}

function KPI({ label, value, sub, trend, delta }: { label: string; value: string; sub: string; trend: 'up' | 'down' | 'flat'; delta: string }) {
  const Icon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const color = trend === 'up' ? 'text-emerald-600' : trend === 'down' ? 'text-rose-600' : 'text-stone-500';
  return (
    <div className="md:col-span-3 bg-white border border-stone-200 p-4">
      <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-stone-900">{value}</div>
      <div className="text-[11px] text-stone-500 mb-1">{sub}</div>
      <div className={`text-xs flex items-center gap-1 ${color}`}><Icon size={11} /> {delta}</div>
    </div>
  );
}

function Legend({ color, label, pct }: { color: string; label: string; pct?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-3 h-3 rounded-sm" style={{ background: color }} />
      <span className="text-stone-700">{label}</span>
      {pct && <span className="text-stone-500 font-mono ml-1">{pct}</span>}
    </div>
  );
}