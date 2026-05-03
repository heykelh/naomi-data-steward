type Props = {
  label: string;
  value: string | number;
  sub?: string;
  trend?: string;
};

export default function StatCard({ label, value, sub, trend }: Props) {
  return (
    <div className="bg-white p-5 border border-stone-200">
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2 font-medium">
        {label}
      </div>
      <div className="text-3xl font-display font-semibold mb-1">{value}</div>
      {sub && <div className="text-xs text-stone-500">{sub}</div>}
      {trend && <div className="text-xs text-emerald-700 mt-1">{trend}</div>}
    </div>
  );
}