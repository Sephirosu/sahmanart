import React from "react";
import { FaCartPlus } from "react-icons/fa";

const PictureGrid = ({ pictures, openDetailsModal, isInCart }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2 px-4">
      {pictures.map((picture, index) => (
        <div
          key={index}
          className="relative group flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer"
          style={{ width: "100%", aspectRatio: "1/1" }}
          onClick={() => openDetailsModal(picture)}
        >
          <img
            src={picture.photo}
            alt={picture.name}
            className="object-cover object-center h-full w-full rounded-md transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75">
            <h2 className="text-lg font-semibold text-white">{picture.name}</h2>
            <p className="text-gray-300">{picture.dimension} mm</p>
            <p className="text-gray-300">{picture.technique}</p>
            <p className="text-gray-300">{picture.price}$</p>
          </div>
          {isInCart(picture) && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white text-7xl font-semibold">
                <FaCartPlus />
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;
