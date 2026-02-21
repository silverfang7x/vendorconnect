import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = 'Search "eggs near me"...' }: SearchBarProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`relative flex items-center gap-3 rounded-2xl bg-card px-4 py-3 transition-all duration-200 vendor-card-shadow ${
        focused ? "ring-2 ring-primary/40 vendor-card-shadow-hover" : ""
      }`}
    >
      <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
};

export default SearchBar;
