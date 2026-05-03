const PHASES = [
  { num: '1', name: 'Étude émergente', desc: 'Le métier exprime un besoin flou', acteur: 'Data Steward · Métier', livrable: 'Note de cadrage' },
  { num: '2', name: 'Cadrage', desc: 'On précise le périmètre, on chiffre', acteur: 'Data Steward · PO', livrable: 'User Stories JIRA' },
  { num: '3', name: 'Spécifications', desc: 'Règles de gestion détaillées', acteur: 'Data Steward', livrable: 'Page Confluence' },
  { num: '4', name: 'Développement', desc: 'Construction des pipelines', acteur: 'Data Engineer', livrable: 'Code + tests' },
  { num: '5', name: 'Recette', desc: 'Validation métier de la livraison', acteur: 'Data Steward · Métier', livrable: 'PV de recette' },
  { num: '6', name: 'Mise en prod', desc: 'Déploiement en production', acteur: 'Data Engineer · Ops', livrable: 'Donnée disponible' },
  { num: '7', name: 'MCO', desc: 'Maintenance, surveillance, évolutions', acteur: 'Data Steward', livrable: 'Suivi continu' },
];

export default function CycleProjet() {
  return (
    <div className="bg-white border border-stone-200 p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 overflow-x-auto pb-4">
        {PHASES.map((phase, i) => (
          <div key={phase.num} className="flex-1 min-w-[140px] relative">
            <div className="bg-stone-50 border border-stone-200 p-3 lg:p-4 h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-rose-700 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  {phase.num}
                </div>
                <div className="text-xs font-display font-semibold leading-tight">{phase.name}</div>
              </div>
              <p className="text-[11px] text-stone-600 mb-3 leading-snug">{phase.desc}</p>
              <div className="text-[9px] uppercase tracking-wider text-stone-500 mb-1">Acteurs</div>
              <p className="text-[10px] text-stone-700 mb-2 leading-snug">{phase.acteur}</p>
              <div className="text-[9px] uppercase tracking-wider text-stone-500 mb-1">Livrable</div>
              <p className="text-[10px] text-rose-700 font-medium leading-snug">{phase.livrable}</p>
            </div>
            {i < PHASES.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-stone-300 z-10"></div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div><span className="text-stone-500">Méthodologie :</span> <strong>Agile / Scrum</strong></div>
        <div><span className="text-stone-500">Cadence :</span> <strong>Sprints 2 semaines</strong></div>
        <div><span className="text-stone-500">Cérémonies :</span> <strong>Daily, Refinement, Sprint Review</strong></div>
        <div><span className="text-stone-500">Outil pivot :</span> <strong>JIRA</strong></div>
      </div>
    </div>
  );
}