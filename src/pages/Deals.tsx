import { ArrowLeft, Tag, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deals, categories } from "@/data/mockData";

const Deals = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("all");

  const visibleDeals = useMemo(() => {
    if (selected === "all") return deals;
    return deals.filter((d) => d.category === selected);
  }, [selected]);

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-30 glass-effect border-b border-border/50 px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Deals</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories
            .filter((c) => c.id === "all" || c.id !== "supplements")
            .map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                  selected === c.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {c.icon} {c.name}
              </button>
            ))}
        </div>

        <section className="mt-4">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-base font-bold text-foreground">🔥 Available Offers</h2>
            <span className="text-xs font-medium text-muted-foreground">{visibleDeals.length} deals</span>
          </div>

          {visibleDeals.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-card py-12 vendor-card-shadow">
              <span className="text-4xl">🏷️</span>
              <p className="text-sm font-medium text-muted-foreground">No deals found</p>
              <p className="text-xs text-muted-foreground">Try a different category</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {visibleDeals.map((deal) => (
                <button
                  key={deal.id}
                  onClick={() => navigate(`/vendor/${deal.vendorId}`)}
                  className="text-left rounded-2xl bg-card p-4 vendor-card-shadow transition-transform active:scale-[0.99]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-extrabold text-foreground">{deal.title}</p>
                        {deal.badge && (
                          <span className="rounded-full bg-vendor-featured/20 px-2 py-0.5 text-[10px] font-bold text-vendor-featured">
                            {deal.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{deal.description}</p>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                        {deal.discountLabel}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                        <span>Valid:</span>
                        <span className="text-foreground/80">{deal.validTill}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary px-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-secondary-foreground">{deal.vendorName}</p>
                      <p className="text-[10px] font-medium text-muted-foreground">Tap to view vendor</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Deals;
