'use client';

import { BookOpen } from 'lucide-react';

type Props = {
  term: string;
  children: React.ReactNode;
};

export default function InfoBox({ term, children }: Props) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded-r">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen size={14} className="text-amber-700" />
        <span className="text-xs uppercase tracking-wider font-semibold text-amber-800">
          C'est quoi {term} ?
        </span>
      </div>
      <div className="text-sm text-stone-800 leading-relaxed">{children}</div>
    </div>
  );
}