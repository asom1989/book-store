import React, { useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // add to cart
  const addToCart = (item) => {
    const isExist = cartItems.find((cart) => cart.id === item.id);
    isExist
      ? setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id ? item : cartItem
          )
        )
      : setCartItems((prev) => [...prev, item]);
  };
  // remove from cart
  const removeFromCart = (id) => {
    const cart = cartItems.filter((item) => item.id !== id);
    setCartItems(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
