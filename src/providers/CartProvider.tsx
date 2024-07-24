import { CartItem, Product } from "@/types";
import { randomUUID } from "expo-crypto";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (id: string, quantity: -1 | 1) => void;
  total: string; // Changed to string for formatted total
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: "0.00", // Default total is a string
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    // Check if item already exists in the cart
    const existingItem = items.find(
      (item) => item.product_id === product.id && item.size === size
    );

    if (existingItem) {
      // If item exists, update quantity
      updateQuantity(existingItem.id, 1);
    } else {
      // If item does not exist, add new item
      const newCartItem: CartItem = {
        id: randomUUID(),
        product,
        product_id: product.id,
        size,
        quantity: 1,
      };

      setItems((prevItems) => [newCartItem, ...prevItems]);
    }
  };

  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItems = items
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove items with zero quantity

    setItems(updatedItems);
  };

  const total = items
    .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    .toFixed(2); // Format total to 2 decimal places

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
