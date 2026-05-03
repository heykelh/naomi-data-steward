'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', label: 'Accueil', sublabel: 'Le métier expliqué' },
  { href: '/lexique', label: 'Lexique', sublabel: 'Tous les termes' },
  { href: '/naomi', label: 'Naomi', sublabel: 'Ce qu\'elle fait vraiment' },
  { href: '/donnees', label: 'Données', sublabel: 'Datasets SNCF en live' },
  { href: '/cas-usage', label: 'Cas d\'usage', sublabel: 'Travail du Steward' },
  { href: '/a-propos', label: 'À propos', sublabel: 'Le projet' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-stone-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-rose-700 to-rose-900 rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base font-display">N</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">
                Naomi Data Steward Lab
              </div>
              <div className="text-sm font-semibold font-display">
                Simulation pédagogique
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm transition-colors border-b-2 ${
                    active
                      ? 'border-rose-700 text-stone-900 font-medium'
                      : 'border-transparent text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-stone-700"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <nav className="lg:hidden border-t border-stone-200 py-2">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-3 border-l-2 transition-colors ${
                    active
                      ? 'border-rose-700 bg-rose-50'
                      : 'border-transparent hover:bg-stone-50'
                  }`}
                >
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="text-xs text-stone-500">{item.sublabel}</div>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}