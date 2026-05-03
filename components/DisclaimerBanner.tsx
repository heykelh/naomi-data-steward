'use client';

import { Info } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-900 flex items-center gap-2 justify-center text-center">
      <Info size={14} className="flex-shrink-0" />
      <span>
        <strong>Simulation</strong> — Projet d'apprentissage indépendant. Données issues de l'open data SNCF (licence ODbL).
      </span>
    </div>
  );
}