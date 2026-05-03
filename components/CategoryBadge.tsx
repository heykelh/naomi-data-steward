import { CATEGORIES } from '@/lib/lexique';

type Props = {
  categorie: keyof typeof CATEGORIES;
};

export default function CategoryBadge({ categorie }: Props) {
  const cat = CATEGORIES[categorie];
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${cat.color}`}>
      {cat.label}
    </span>
  );
}