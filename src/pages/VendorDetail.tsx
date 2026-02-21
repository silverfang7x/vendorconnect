import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, Phone, Navigation, Share2 } from "lucide-react";
import { vendors } from "@/data/mockData";

const VendorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vendor = vendors.find((v) => v.id === id);

  if (!vendor) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Vendor not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Hero Image */}
      <div className="relative h-56 w-full">
        <img src={vendor.image} alt={vendor.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 shadow-md backdrop-blur-sm"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 shadow-md backdrop-blur-sm">
          <Share2 className="h-4 w-4 text-foreground" />
        </button>

        {/* Name overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-primary-foreground">{vendor.name}</h1>
            {vendor.isFeatured && (
              <span className="rounded-full bg-vendor-featured px-2 py-0.5 text-[10px] font-bold">⭐ Featured</span>
            )}
          </div>
          <p className="mt-0.5 text-xs text-primary-foreground/80">{vendor.address}</p>
        </div>
      </div>

      <div className="mx-auto max-w-lg px-4">
        {/* Stats */}
        <div className="mt-4 flex items-center gap-4 rounded-2xl bg-card p-4 vendor-card-shadow">
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-vendor-featured text-vendor-featured" />
            <span className="text-sm font-bold text-foreground">{vendor.rating}</span>
            <span className="text-xs text-muted-foreground">({vendor.reviews})</span>
          </div>
          <div className="h-5 w-px bg-border" />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-distance" />
            {vendor.distance}
          </div>
          <div className="h-5 w-px bg-border" />
          <div className="flex items-center gap-1.5 text-xs">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            <span className={vendor.isOpen ? "font-semibold text-vendor-open" : "font-semibold text-vendor-closed"}>
              {vendor.isOpen ? "Open" : "Closed"}
            </span>
            <span className="text-muted-foreground">
              · {vendor.openTime} - {vendor.closeTime}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{vendor.description}</p>

        {/* Action buttons */}
        <div className="mt-4 flex gap-3">
          <a
            href={`tel:${vendor.phone}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${vendor.lat},${vendor.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-bold text-secondary-foreground transition-colors hover:bg-muted"
          >
            <Navigation className="h-4 w-4" />
            Directions
          </a>
        </div>

        {/* Products */}
        <section className="mt-6">
          <h2 className="mb-3 text-base font-bold text-foreground">🛒 Products & Prices</h2>
          <div className="flex flex-col gap-2">
            {vendor.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between rounded-xl bg-card p-3 vendor-card-shadow"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      product.available ? "bg-vendor-open status-glow-open" : "bg-vendor-closed status-glow-closed"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{product.name}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {product.available ? "In stock" : "Out of stock"}
                    </p>
                  </div>
                </div>
                <span className="rounded-lg bg-secondary px-3 py-1 text-sm font-bold text-price">
                  ₹{product.price}
                  <span className="text-xs font-normal text-muted-foreground">/{product.unit}</span>
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VendorDetail;
