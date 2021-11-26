import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const list = [
    { id: 1, name: "shoes", price: 3000 },
    { id: 2, name: "shirt", price: 2000 },
    { id: 3, name: "hat", price: 1000 },
  ];

  const [listProducts] = useState(list);

  return (
    <CartContext.Provider value={{ listProducts }}>
      {children}
    </CartContext.Provider>
  );
};
