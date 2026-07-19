import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ id, name, price, image, category }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const formatPrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

  function handleAddToCart() {
    addToCart({ id, name, price, image, category });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={image} className="card-img-top" alt={name} style={{ height: "250px", objectFit: "cover" }} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          {category && <p className="text-muted mb-1">{category}</p>}
          <p className="text-primary fw-bold fs-5">{formatPrice.format(price)}</p>
          <button className="btn btn-dark" onClick={handleAddToCart}>
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
