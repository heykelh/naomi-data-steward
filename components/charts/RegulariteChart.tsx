'use client';

import { useMemo } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { RegulariteTGV } from '@/lib/sncf-api';

export default function RegulariteChart({ data }: { data: RegulariteTGV[] }) {
  const chartData = useMemo(() => {
    // Groupe par mois, calcule moyenne du taux de ponctualité
    const byMonth: Record<string, { total: number; ponctualite: number; count: number }> = {};
    data.forEach((r) => {
      if (!r.date || !r.nb_train_prevu) return;
      const ponct = 1 - (r.nb_train_retard_arrivee || 0) / r.nb_train_prevu;
      if (!byMonth[r.date]) byMonth[r.date] = { total: 0, ponctualite: 0, count: 0 };
      byMonth[r.date].ponctualite += ponct;
      byMonth[r.date].count += 1;
    });

    return Object.entries(byMonth)
      .map(([date, v]) => ({
        mois: date,
        ponctualite: Math.round((v.ponctualite / v.count) * 1000) / 10,
      }))
      .sort((a, b) => a.mois.localeCompare(b.mois))
      .slice(-12);
  }, [data]);

  return (
    <div className="bg-white border border-stone-200 p-4 md:p-6">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="mois" tick={{ fontSize: 11 }} />
          <YAxis domain={[60, 100]} tick={{ fontSize: 11 }} label={{ value: '% à l\'heure', angle: -90, position: 'insideLeft', fontSize: 11 }} />
          <Tooltip formatter={(v) => `${v}%`} contentStyle={{ fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="ponctualite" stroke="#9f1239" strokeWidth={2.5} dot={{ r: 4 }} name="Taux ponctualité moyen" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}