import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (item) => {
    const existingItem = cart.find((prod) => prod.id === item.id);
  
    if (existingItem) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + item.quantity } : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: item.quantity }]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((prod) =>
      prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
      )
      .filter((prod) => prod.quantity > 0);
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCart = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);
    setCartQuantity(totalQuantity);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        cartQuantity,
        removeItem,
        clearCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
