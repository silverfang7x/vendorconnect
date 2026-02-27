import { ArrowLeft, User, Heart, Clock, MapPin, Phone, ChevronRight, PencilLine, Save, Settings as SettingsIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userProfile, vendors } from "@/data/mockData";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(() => ({
    name: userProfile.name,
    phone: userProfile.phone,
    city: userProfile.city,
    defaultAddress: userProfile.defaultAddress,
  }));

  const favorites = useMemo(() => {
    return userProfile.favoritesVendorIds
      .map((id) => vendors.find((v) => v.id === id))
      .filter((v): v is NonNullable<typeof v> => Boolean(v));
  }, []);

  const recent = useMemo(() => {
    return userProfile.recentVendorIds
      .map((id) => vendors.find((v) => v.id === id))
      .filter((v): v is NonNullable<typeof v> => Boolean(v));
  }, []);

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
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <h1 className="text-lg font-bold text-foreground">Profile</h1>
            </div>
            <button
              onClick={() => navigate("/settings")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-muted"
            >
              <SettingsIcon className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-4">
        <section className="rounded-2xl p-4 glass-surface vendor-card-shadow">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm font-semibold text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                />
              ) : (
                <p className="truncate text-base font-extrabold text-foreground">{profile.name}</p>
              )}
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">Member since {userProfile.memberSince}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            <div className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                  className="flex-1 bg-transparent text-sm font-semibold text-foreground outline-none"
                />
              ) : (
                <span className="text-sm font-semibold text-foreground">{profile.phone}</span>
              )}
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div className="min-w-0">
                {isEditing ? (
                  <div className="grid gap-1">
                    <input
                      type="text"
                      value={profile.city}
                      onChange={(e) => setProfile((p) => ({ ...p, city: e.target.value }))}
                      className="w-full bg-transparent text-sm font-semibold text-foreground outline-none"
                    />
                    <input
                      type="text"
                      value={profile.defaultAddress}
                      onChange={(e) => setProfile((p) => ({ ...p, defaultAddress: e.target.value }))}
                      className="w-full bg-transparent text-[10px] font-medium text-muted-foreground outline-none"
                    />
                  </div>
                ) : (
                  <>
                    <p className="truncate text-sm font-semibold text-foreground">{profile.city}</p>
                    <p className="truncate text-[10px] font-medium text-muted-foreground">{profile.defaultAddress}</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                if (isEditing) {
                  setProfile({
                    name: userProfile.name,
                    phone: userProfile.phone,
                    city: userProfile.city,
                    defaultAddress: userProfile.defaultAddress,
                  });
                }
                setIsEditing((v) => !v);
              }}
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-xs font-bold text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-muted"
            >
              <PencilLine className="h-4 w-4" />
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>

            <button
              disabled={!isEditing}
              onClick={() => setIsEditing(false)}
              className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all duration-300 ease-in-out ${
                isEditing
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-primary/30 text-primary-foreground/70 cursor-not-allowed"
              }`}
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </section>

        <section className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
              <Heart className="h-4 w-4 text-primary" /> Favorites
            </h2>
            <span className="text-xs font-medium text-muted-foreground">{favorites.length}</span>
          </div>

          {favorites.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-card py-10 vendor-card-shadow">
              <span className="text-3xl">❤️</span>
              <p className="text-sm font-medium text-muted-foreground">No favorites yet</p>
              <p className="text-xs text-muted-foreground">Explore vendors and mark your favorites</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {favorites.map((v) => (
                <button
                  key={v.id}
                  onClick={() => navigate(`/vendor/${v.id}`)}
                  className="text-left rounded-2xl bg-card p-4 vendor-card-shadow transition-transform active:scale-[0.99]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-extrabold text-foreground">{v.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{v.address}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary px-3 py-2">
                    <span className="text-xs font-bold text-secondary-foreground">⭐ {v.rating}</span>
                    <span className="text-xs font-semibold text-muted-foreground">{v.distance}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
              <Clock className="h-4 w-4 text-primary" /> Recent
            </h2>
            <span className="text-xs font-medium text-muted-foreground">{recent.length}</span>
          </div>

          {recent.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-card py-10 vendor-card-shadow">
              <span className="text-3xl">🕒</span>
              <p className="text-sm font-medium text-muted-foreground">No recent vendors</p>
              <p className="text-xs text-muted-foreground">Your recently viewed vendors will show up here</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {recent.map((v) => (
                <button
                  key={v.id}
                  onClick={() => navigate(`/vendor/${v.id}`)}
                  className="text-left rounded-2xl bg-card p-4 vendor-card-shadow transition-transform active:scale-[0.99]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-extrabold text-foreground">{v.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{v.description}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary px-3 py-2">
                    <span className={v.isOpen ? "text-xs font-bold text-vendor-open" : "text-xs font-bold text-vendor-closed"}>
                      {v.isOpen ? "Open" : "Closed"}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">{v.openTime} - {v.closeTime}</span>
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

export default Profile;
