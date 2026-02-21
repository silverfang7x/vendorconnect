import { categories } from "@/data/mockData";

interface CategoryBarProps {
  selected: string;
  onSelect: (id: string) => void;
}

const CategoryBar = ({ selected, onSelect }: CategoryBarProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            selected === cat.id
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card text-foreground vendor-card-shadow hover:bg-secondary"
          }`}
        >
          <span className="text-base">{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
