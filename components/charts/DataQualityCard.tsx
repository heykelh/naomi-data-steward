type Props = {
  label: string;
  value: number;
};

export default function DataQualityCard({ label, value }: Props) {
  const status = value >= 95 ? 'ok' : value >= 80 ? 'warn' : 'bad';
  const colors = {
    ok: { bg: 'bg-emerald-50', text: 'text-emerald-700', bar: 'bg-emerald-600' },
    warn: { bg: 'bg-amber-50', text: 'text-amber-700', bar: 'bg-amber-500' },
    bad: { bg: 'bg-rose-50', text: 'text-rose-700', bar: 'bg-rose-700' },
  };
  const c = colors[status];

  return (
    <div className={`${c.bg} p-5 border border-stone-200`}>
      <div className="text-xs uppercase tracking-wider text-stone-600 mb-2 font-medium leading-tight">{label}</div>
      <div className={`text-3xl font-display font-bold ${c.text} mb-2`}>{value}%</div>
      <div className="h-1.5 bg-white rounded overflow-hidden">
        <div className={`h-full ${c.bar} transition-all`} style={{ width: `${value}%` }} />
      </div>
      <div className="text-[10px] text-stone-500 mt-2 uppercase tracking-wider">
        {status === 'ok' && 'Conforme'}
        {status === 'warn' && 'À surveiller'}
        {status === 'bad' && 'Non conforme'}
      </div>
    </div>
  );
}