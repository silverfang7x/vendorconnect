import { useState } from "react";
import {
  ArrowLeft,
  Store,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Save,
  Camera,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DashboardProduct {
  id: string;
  name: string;
  price: string;
  unit: string;
  available: boolean;
}

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [shopName, setShopName] = useState("My Shop");
  const [category, setCategory] = useState("food");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [products, setProducts] = useState<DashboardProduct[]>([
    { id: "1", name: "Sample Item", price: "50", unit: "kg", available: true },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      { id: Date.now().toString(), name: "", price: "", unit: "kg", available: true },
    ]);
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateProduct = (id: string, field: keyof DashboardProduct, value: string | boolean) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="sticky top-0 z-30 glass-effect border-b border-border/50 px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <Store className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Vendor Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-4">
        {/* Shop Status */}
        <div className="flex items-center justify-between rounded-2xl bg-card p-4 vendor-card-shadow">
          <div>
            <p className="text-sm font-bold text-foreground">Shop Status</p>
            <p className="text-xs text-muted-foreground">Toggle your availability</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
              isOpen
                ? "bg-vendor-open text-accent-foreground"
                : "bg-vendor-closed text-destructive-foreground"
            }`}
          >
            {isOpen ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            {isOpen ? "Open" : "Closed"}
          </button>
        </div>

        {/* Shop Info */}
        <section className="mt-5">
          <h2 className="mb-3 text-base font-bold text-foreground">🏪 Shop Details</h2>
          <div className="flex flex-col gap-3 rounded-2xl bg-card p-4 vendor-card-shadow">
            {/* Photo upload */}
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50 transition-colors hover:border-primary/40">
              <div className="flex flex-col items-center gap-1 text-muted-foreground">
                <Camera className="h-6 w-6" />
                <span className="text-xs font-medium">Upload Shop Photo</span>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">Shop Name</label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="food">🍛 Food</option>
                <option value="fruits">🍎 Fruits</option>
                <option value="vegetables">🥬 Vegetables</option>
                <option value="grocery">🛒 Grocery</option>
                <option value="supplements">💪 Supplements</option>
                <option value="services">🔧 Services</option>
                <option value="snacks">🍿 Snacks</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. Near Shiv Mandir, Sector 15"
                className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">Phone Number</label>
              <div className="flex items-center gap-2 rounded-xl border border-input bg-background px-3 py-2.5">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground">🛒 Products</h2>
            <button
              onClick={addProduct}
              className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Plus className="h-3.5 w-3.5" />
              Add Item
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <div key={product.id} className="rounded-xl bg-card p-3 vendor-card-shadow">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                    placeholder="Item name"
                    className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
                  />
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors hover:bg-destructive/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-2 flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-price">₹</span>
                    <input
                      type="number"
                      value={product.price}
                      onChange={(e) => updateProduct(product.id, "price", e.target.value)}
                      placeholder="Price"
                      className="w-full rounded-lg border border-input bg-background py-2 pl-7 pr-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <select
                    value={product.unit}
                    onChange={(e) => updateProduct(product.id, "unit", e.target.value)}
                    className="rounded-lg border border-input bg-background px-2 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="kg">per kg</option>
                    <option value="ltr">per ltr</option>
                    <option value="dozen">dozen</option>
                    <option value="plate">plate</option>
                    <option value="pack">pack</option>
                    <option value="piece">piece</option>
                    <option value="service">service</option>
                    <option value="hr">per hr</option>
                  </select>
                  <button
                    onClick={() => updateProduct(product.id, "available", !product.available)}
                    className={`rounded-lg px-3 py-2 text-xs font-bold transition-all ${
                      product.available
                        ? "bg-vendor-open/15 text-vendor-open"
                        : "bg-vendor-closed/15 text-vendor-closed"
                    }`}
                  >
                    {product.available ? "In Stock" : "Out"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Save */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </main>
    </div>
  );
};

export default VendorDashboard;
