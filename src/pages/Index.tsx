import { useState, useMemo } from "react";
import { MapPin, Bell, User, Store } from "lucide-react";
import { vendors } from "@/data/mockData";
import SearchBar from "@/components/SearchBar";
import CategoryBar from "@/components/CategoryBar";
import VendorCard from "@/components/VendorCard";
import MapView from "@/components/MapView";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return vendors.filter((v) => {
      const matchesCategory = category === "all" || v.category === category;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.products.some((p) => p.name.toLowerCase().includes(q)) ||
        v.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const featuredVendors = filtered.filter((v) => v.isFeatured);
  const otherVendors = filtered.filter((v) => !v.isFeatured);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-30 glass-effect border-b border-border/50 px-4 pb-3 pt-4">
        <div className="mx-auto max-w-lg">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[10px] font-medium text-muted-foreground">Delivering to</p>
                <p className="text-sm font-bold text-foreground">Sector 15, Noida ▾</p>
              </div>
            </div>
            <button className="relative rounded-full bg-secondary p-2.5 transition-colors hover:bg-muted">
              <Bell className="h-5 w-5 text-foreground" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
            </button>
          </div>
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-4">
        {/* Map */}
        <MapView />

        {/* Categories */}
        <div className="mt-4">
          <CategoryBar selected={category} onSelect={setCategory} />
        </div>

        {/* Featured */}
        {featuredVendors.length > 0 && (
          <section className="mt-5">
            <h2 className="mb-3 text-base font-bold text-foreground">⭐ Featured Vendors</h2>
            <div className="flex flex-col gap-3">
              {featuredVendors.map((v) => (
                <VendorCard key={v.id} vendor={v} />
              ))}
            </div>
          </section>
        )}

        {/* All Vendors */}
        <section className="mt-5">
          <h2 className="mb-3 text-base font-bold text-foreground">
            📍 Nearby{category !== "all" ? ` ${category}` : ""} ({filtered.length})
          </h2>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-card py-12 vendor-card-shadow">
              <span className="text-4xl">🔍</span>
              <p className="text-sm font-medium text-muted-foreground">No vendors found</p>
              <p className="text-xs text-muted-foreground">Try a different search or category</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {(category === "all" ? otherVendors : filtered).map((v) => (
                <VendorCard key={v.id} vendor={v} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card">
        <div className="mx-auto flex max-w-lg items-center justify-around py-2">
          <button className="flex flex-col items-center gap-0.5 px-4 py-1 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="text-[10px] font-semibold">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-4 py-1 text-muted-foreground transition-colors hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="text-[10px] font-medium">Deals</span>
          </button>
          <button
            onClick={() => navigate("/vendor-dashboard")}
            className="flex flex-col items-center gap-0.5 px-4 py-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Store className="h-5 w-5" />
            <span className="text-[10px] font-medium">Sell</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-4 py-1 text-muted-foreground transition-colors hover:text-foreground">
            <User className="h-5 w-5" />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
