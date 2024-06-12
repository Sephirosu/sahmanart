import React from "react";
import { FaTimes, FaTrash } from "react-icons/fa";

const CartModal = ({
  cartItems,
  setShowCart,
  removeFromCart,
  clearCart,
  getTotalPrice,
}) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-75 z-20">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold mb-6">Shopping Cart 🛒</h2>
          <button
            className="text-gray-400 focus:outline-none font-semibold text-lg mb-8"
            onClick={(e) => {
              e.stopPropagation();
              setShowCart(false);
            }}
          >
            <FaTimes />
          </button>
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span className="flex items-center flex-grow">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="h-6 w-6 mr-2"
                />
                <span className="truncate">{item.name}</span>
              </span>
              <span className="flex-none w-20 text-right text-black font-bold">
                {item.price}€
              </span>
              <button
                className="text-gray-500 focus:outline-none ml-8"
                onClick={() => removeFromCart(item)}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-4">
          <button
            className="text-gray-500 rounded focus:outline-none"
            onClick={clearCart}
          >
            Clear All
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-lg font-medium">Total :</span>
          <span className="text-lg font-semibold ml-2 text-black">
            {getTotalPrice()}€
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
            onClick={() =>
              alert("Checkout will be available soon. Please call +38762615802")
            }
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
