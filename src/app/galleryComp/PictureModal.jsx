import React from "react";

const PictureModal = ({
  selectedPicture,
  closeDetailsModal,
  addToCart,
  isInCart,
}) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-10"
      onClick={closeDetailsModal}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src={selectedPicture.photo}
          alt={selectedPicture.name}
          className="object-contain max-w-full mb-4"
          style={{ maxHeight: "70vh" }}
        />
        <h2 className="text-lg font-semibold mb-2">
          Picture name: {selectedPicture.name}
        </h2>
        <p className="text-gray-800">Price: {selectedPicture.price}$</p>
        <p className="text-gray-800">
          Description: {selectedPicture.description}
        </p>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded-full mt-2 focus:outline-none ${
            isInCart(selectedPicture) ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => addToCart(selectedPicture)}
          disabled={isInCart(selectedPicture)}
        >
          {isInCart(selectedPicture) ? "Already in Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default PictureModal;
