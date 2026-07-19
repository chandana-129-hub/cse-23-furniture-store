import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formatPrice = (price) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty. Add products from the Home or Products page.</p> : (
        <>
          {cart.map((item) => (
            <div className="card mb-3" key={item.id ?? item.name}>
              <div className="card-body d-flex flex-wrap gap-3 justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <img src={item.image} alt={item.name} width="72" height="72" className="rounded" style={{ objectFit: "cover" }} />
                  <div><h5 className="mb-1">{item.name}</h5><span>{formatPrice(item.price)} each</span></div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-outline-secondary" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                  <span className="fw-bold px-2">{item.quantity}</span>
                  <button className="btn btn-outline-secondary" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                  <button className="btn btn-outline-danger ms-2" onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center border-top pt-3">
            <button className="btn btn-outline-danger" onClick={clearCart}>Clear Cart</button>
            <h4 className="mb-0">Total: {formatPrice(total)}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
