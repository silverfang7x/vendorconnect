import { Star, MapPin, Clock } from "lucide-react";
import { Vendor } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/vendor/${vendor.id}`)}
      className="group relative flex w-full gap-3 rounded-2xl p-3 text-left glass-surface vendor-card-shadow hover:vendor-card-shadow-hover hover-lift soft-glow transition-all duration-300 ease-in-out animate-slide-up"
    >
      {/* Image */}
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {vendor.isFeatured && (
          <span className="absolute left-2 top-2 rounded-full bg-vendor-featured px-2 py-0.5 text-[10px] font-extrabold text-foreground shadow-sm">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-sm font-extrabold text-foreground">{vendor.name}</h3>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                vendor.isOpen
                  ? "bg-vendor-open/15 text-vendor-open"
                  : "bg-vendor-closed/15 text-vendor-closed"
              }`}
            >
              {vendor.isOpen ? "Open" : "Closed"}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{vendor.description}</p>
        </div>

        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1 font-semibold text-foreground">
            <Star className="h-3.5 w-3.5 fill-vendor-featured text-vendor-featured" />
            {vendor.rating}
            <span className="font-normal text-muted-foreground">({vendor.reviews})</span>
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-distance" />
            {vendor.distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Till {vendor.closeTime}
          </span>
        </div>

        {/* Quick prices */}
        <div className="mt-1.5 flex gap-1.5 overflow-hidden">
          {vendor.products.slice(0, 2).map((p) => (
            <span
              key={p.id}
              className="truncate rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-secondary-foreground transition-colors group-hover:bg-muted"
            >
              {p.name} · ₹{p.price}/{p.unit}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default VendorCard;
