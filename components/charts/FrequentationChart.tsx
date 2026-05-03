'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { FrequentationGare } from '@/lib/sncf-api';

export default function FrequentationChart({ data }: { data: FrequentationGare[] }) {
  const chartData = data.map((g) => ({
    nom: g.nom_gare?.replace('Paris ', 'P. ').slice(0, 22) || 'N/A',
    voyageurs: Math.round((g.total_voyageurs_2023 || 0) / 1_000_000 * 10) / 10,
  }));

  return (
    <div className="bg-white border border-stone-200 p-4 md:p-6">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis type="number" tick={{ fontSize: 11 }} label={{ value: 'Millions de voyageurs', position: 'insideBottom', offset: -5, fontSize: 11 }} />
          <YAxis dataKey="nom" type="category" tick={{ fontSize: 11 }} width={150} />
          <Tooltip formatter={(v) => `${v} M voyageurs`} contentStyle={{ fontSize: 12 }} />
          <Bar dataKey="voyageurs" fill="#9f1239" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}