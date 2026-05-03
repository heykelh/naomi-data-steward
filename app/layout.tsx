import type { Metadata } from 'next';
import { Kanit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisclaimerBanner from '@/components/DisclaimerBanner';

const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Naomi Data Steward Lab — Simulation pédagogique',
  description: "Projet d'apprentissage simulant le rôle de Data Steward sur l'écosystème Naomi de SNCF Voyageurs, à partir de données ouvertes SNCF.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${kanit.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-stone-50 text-stone-900 font-body">
        <DisclaimerBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}