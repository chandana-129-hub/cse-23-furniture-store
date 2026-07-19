import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const sameProduct = (item, product) => (
  item.id != null && product.id != null ? item.id === product.id : item.name === product.name
);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("furniture-cart") || "[]"));

  useEffect(() => {
    localStorage.setItem("furniture-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => sameProduct(item, product));
      if (existing) {
        return currentCart.map((item) => sameProduct(item, product) ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(product, quantity) {
    setCart((currentCart) => quantity < 1
      ? currentCart.filter((item) => !sameProduct(item, product))
      : currentCart.map((item) => sameProduct(item, product) ? { ...item, quantity } : item));
  }

  function removeFromCart(product) {
    updateQuantity(product, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart: () => setCart([]) }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
