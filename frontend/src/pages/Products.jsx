import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load products");
        return response.json();
      })
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Our Furniture Products</h2>
      {error && <p className="text-danger">{error}. Make sure Spring Boot is running on port 8081.</p>}
      {loading && <p>Loading products...</p>}
      {!loading && !error && products.length === 0 && <p>No products found. Add data to MySQL first.</p>}
      <div className="row">{products.map((product) => <ProductCard key={product.id} {...product} />)}</div>
    </div>
  );
}

export default Products;
