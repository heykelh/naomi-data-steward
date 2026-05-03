'use client';

import { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { LEXIQUE, CATEGORIES, TermeLexique } from '@/lib/lexique';
import SectionTitle from '@/components/SectionTitle';
import CategoryBadge from '@/components/CategoryBadge';

export default function LexiquePage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    return LEXIQUE.filter((t) => {
      const matchSearch =
        search === '' ||
        t.acronyme.toLowerCase().includes(search.toLowerCase()) ||
        t.nom_complet.toLowerCase().includes(search.toLowerCase()) ||
        t.definition_simple.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === 'all' || t.categorie === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 lg:py-20">
      <SectionTitle
        eyebrow="Lexique complet"
        title="Tout le jargon de la data, en français simple"
        subtitle={`${LEXIQUE.length} termes définis avec exemples concrets dans le contexte SNCF. Chaque définition est sourcée et adaptée au contexte ferroviaire.`}
      />

      {/* Filtres */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 bg-stone-50 py-4 z-30">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-3 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un terme, un acronyme ou un mot-clé…"
            className="w-full pl-10 pr-4 py-2.5 border border-stone-300 bg-white text-sm focus:outline-none focus:border-rose-700 rounded"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')} label="Tous" />
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <FilterButton key={key} active={filter === key} onClick={() => setFilter(key)} label={cat.label} />
          ))}
        </div>
      </div>

      {/* Résultats */}
      <div className="text-sm text-stone-500 mb-6">
        {filtered.length} terme{filtered.length > 1 ? 's' : ''} affiché{filtered.length > 1 ? 's' : ''}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((t) => (
          <TermeCard key={t.acronyme} terme={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-stone-500">
          <BookOpen size={32} className="mx-auto mb-4 opacity-30" />
          Aucun terme ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
}

function FilterButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs font-medium border transition-colors rounded ${
        active
          ? 'bg-stone-900 text-white border-stone-900'
          : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
      }`}
    >
      {label}
    </button>
  );
}

function TermeCard({ terme }: { terme: TermeLexique }) {
  return (
    <article className="bg-white border border-stone-200 p-6 hover:border-stone-400 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-2xl font-display font-bold text-stone-900">{terme.acronyme}</h3>
          <p className="text-sm text-stone-500 italic">{terme.nom_complet}</p>
        </div>
        <CategoryBadge categorie={terme.categorie} />
      </div>

      <p className="text-stone-700 leading-relaxed mb-4">{terme.definition_simple}</p>

      {terme.definition_technique && (
        <div className="bg-stone-50 border-l-2 border-stone-400 pl-4 py-2 mb-4">
          <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Précision technique</div>
          <p className="text-sm text-stone-700 leading-relaxed">{terme.definition_technique}</p>
        </div>
      )}

      {terme.exemple_sncf && (
        <div className="bg-rose-50 border-l-2 border-rose-700 pl-4 py-2 mb-4">
          <div className="text-[10px] uppercase tracking-wider text-rose-700 mb-1 font-medium">Exemple SNCF</div>
          <p className="text-sm text-stone-700 leading-relaxed">{terme.exemple_sncf}</p>
        </div>
      )}

      {terme.source && (
        <div className="text-[11px] text-stone-400 mt-3 pt-3 border-t border-stone-100">
          Source : {terme.source}
        </div>
      )}
    </article>
  );
}