import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    {
      name: "Luxury Sofa",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    },
    {
      name: "Wooden Dining Table",
      price: 28999,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    },
    {
      name: "Office Chair",
      price: 12999,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Welcome to Furniture Store
          </h1>

          <p className="lead">
            Premium Furniture at Affordable Prices
          </p>

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000"
            alt="Furniture"
            className="img-fluid rounded shadow mt-4"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Featured Products */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">
          Featured Products
        </h2>

        <div className="row">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;