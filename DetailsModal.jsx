import React from "react";

const DetailsModal = ({ picture, closeDetailsModal, addToCart, isInCart }) => (
  <div
    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-10"
    onClick={closeDetailsModal}
  >
    <div
      className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={picture.photo}
        alt={picture.name}
        className="object-contain max-w-full mb-4"
        style={{ maxHeight: "70vh" }}
      />
      <h2 className="text-lg font-semibold mb-2">
        Picture name: {picture.name}
      </h2>
      <p className="text-gray-800">Price: {picture.price}$</p>
      <p className="text-gray-800">Description: {picture.description}</p>
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-full mt-2 focus:outline-none ${
          isInCart(picture) ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => addToCart(picture)}
        disabled={isInCart(picture)}
      >
        {isInCart(picture) ? "Already in Cart" : "Add to Cart"}
      </button>
    </div>
  </div>
);

export default DetailsModal;
