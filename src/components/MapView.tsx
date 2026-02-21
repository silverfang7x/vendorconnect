import { MapPin, Navigation } from "lucide-react";
import { vendors } from "@/data/mockData";

const MapView = () => {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-green-50 vendor-card-shadow">
      {/* Simulated map background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(210 20% 70%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Roads */}
          <line x1="0" y1="80" x2="400" y2="80" stroke="hsl(210 15% 75%)" strokeWidth="3" />
          <line x1="120" y1="0" x2="120" y2="200" stroke="hsl(210 15% 75%)" strokeWidth="3" />
          <line x1="280" y1="0" x2="280" y2="200" stroke="hsl(210 15% 75%)" strokeWidth="2" />
          <line x1="0" y1="150" x2="400" y2="150" stroke="hsl(210 15% 75%)" strokeWidth="2" />
        </svg>
      </div>

      {/* Vendor dots */}
      {vendors.slice(0, 5).map((v, i) => (
        <div
          key={v.id}
          className="absolute flex flex-col items-center"
          style={{
            left: `${15 + i * 18}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
        >
          <div
            className={`h-3 w-3 rounded-full border-2 border-card ${
              v.isOpen ? "bg-vendor-open animate-pulse-dot" : "bg-vendor-closed"
            }`}
          />
          <span className="mt-0.5 max-w-[60px] truncate rounded bg-card/90 px-1 text-[8px] font-semibold text-foreground shadow-sm">
            {v.name.split(" ")[0]}
          </span>
        </div>
      ))}

      {/* User location */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-3 animate-ping rounded-full bg-distance/20" />
          <div className="relative h-4 w-4 rounded-full border-2 border-card bg-distance shadow-lg" />
        </div>
      </div>

      {/* Location button */}
      <button className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-md transition-colors hover:bg-secondary">
        <Navigation className="h-3.5 w-3.5 text-primary" />
        My Location
      </button>

      {/* Label */}
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
        <MapPin className="h-3.5 w-3.5 text-primary" />
        {vendors.filter((v) => v.isOpen).length} vendors nearby
      </div>
    </div>
  );
};

export default MapView;
