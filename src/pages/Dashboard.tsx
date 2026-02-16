import { useEffect, useState } from "react";
import StatCard from "../components/atoms/StatCard";
import SalesChart from "../components/organisms/SalesChart";
import ProductList from "../components/organisms/ProductList";
import { fetchProducts } from "../services/productApi";
import { useDebounce } from "../hooks/useDebounce";

/* ---------- Product Type ---------- */
type Product = {
  id: number;
  title: string;
  price: number;
};

const Dashboard = () => {
  /* ---------- States ---------- */
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  /* ---------- Debounced Search ---------- */
  const debouncedSearch = useDebounce(search, 400);

  /* ---------- Fetch + Cache Logic ---------- */
  useEffect(() => {
    const cached = localStorage.getItem("products");

    if (cached) {
      setProducts(JSON.parse(cached));
      setLoading(false);
      return;
    }

    fetchProducts()
      .then((data) => {
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      })
      .catch(() => alert("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  /* ---------- Search Filtering ---------- */
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  /* ---------- Loading UI ---------- */
  if (loading) {
    return (
      <div className="p-6 text-lg font-semibold">
        Loading dashboard...
      </div>
    );
  }

  /* ---------- UI ---------- */
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Dashboard Overview
      </h2>

      {/* Search */}
      <input
        className="border px-3 py-2 rounded mb-6 w-full max-w-md"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$45,320" />
        <StatCard title="Orders" value="1,245" />
        <StatCard title="Customers" value="890" />
        <StatCard
          title="Products"
          value={filteredProducts.length.toString()}
        />
      </div>

      {/* Chart */}
      <SalesChart data={filteredProducts} />

      {/* Virtualized Product List */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Dashboard;