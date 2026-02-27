import { ArrowLeft, Moon, Sun, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const THEME_STORAGE_KEY = "vendorconnect_theme";

type ThemeMode = "light" | "dark";

const applyThemeToDom = (mode: ThemeMode) => {
  const root = document.documentElement;
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
};

const Settings = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return "light";
  });

  useEffect(() => {
    applyThemeToDom(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background app-gradient pb-8">
      <header className="sticky top-0 z-30 glass-effect border-b border-border/50 px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Settings</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-4">
        <section className="rounded-2xl p-4 glass-surface vendor-card-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-extrabold text-foreground">Appearance</p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">Light / Dark mode</p>
            </div>

            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="flex shrink-0 items-center gap-2 rounded-full bg-secondary px-3 py-2 text-xs font-bold text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-muted"
            >
              {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              {theme === "dark" ? "Dark" : "Light"}
            </button>
          </div>

          <div className="mt-4 rounded-xl bg-secondary p-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold text-secondary-foreground">Theme</p>
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-[10px] font-bold text-muted-foreground">Light</span>
                <button
                  role="switch"
                  aria-checked={theme === "dark"}
                  onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-all duration-300 ease-in-out ${
                    theme === "dark" ? "bg-primary" : "bg-border"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform duration-300 ease-in-out ${
                      theme === "dark" ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
                <span className="text-[10px] font-bold text-muted-foreground">Dark</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <h2 className="mb-3 text-base font-bold text-foreground">⚙️ Preferences</h2>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl bg-card p-4 vendor-card-shadow">
              <p className="text-sm font-bold text-foreground">Notifications</p>
              <p className="mt-1 text-xs text-muted-foreground">Deals, order updates, and vendor alerts</p>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary px-3 py-2">
                <span className="text-xs font-semibold text-secondary-foreground">Enable notifications</span>
                <span className="text-xs font-bold text-muted-foreground">Coming soon</span>
              </div>
            </div>

            <div className="rounded-2xl bg-card p-4 vendor-card-shadow">
              <p className="text-sm font-bold text-foreground">Location</p>
              <p className="mt-1 text-xs text-muted-foreground">Used to show nearby vendors</p>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary px-3 py-2">
                <span className="text-xs font-semibold text-secondary-foreground">Allow location access</span>
                <span className="text-xs font-bold text-muted-foreground">Coming soon</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settings;
