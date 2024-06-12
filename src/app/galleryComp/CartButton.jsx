
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ cartItems, setShowCart }) => {
  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center focus:outline-none"
      onClick={() => setShowCart((prev) => !prev)}
    >
      <FaShoppingCart className="h-6 w-6 mr-2" />
      Cart ({cartItems.length})
    </button>
  );
};

export default CartButton;
