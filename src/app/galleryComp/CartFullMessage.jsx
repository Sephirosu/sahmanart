import React from "react";

const CartFullMessage = ({ cartFullMessage }) => {
  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full">
      {cartFullMessage}
    </div>
  );
};

export default CartFullMessage;
