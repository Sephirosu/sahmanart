"use client";

import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaCartPlus, FaTrash, FaTimes } from "react-icons/fa";
import { CartContext } from "../CartContext";
import Navbarfull from "../Navbarfull";

function Gallery() {
  const [pictures, setPictures] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showBottomCart, setShowBottomCart] = useState(false);
  const [cartFullMessage, setCartFullMessage] = useState("");
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("sahman.json");
        const result = await response.json();
        setPictures(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBottomCart(scrollPosition > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDetailsModal = (picture) => {
    setSelectedPicture(picture);
  };

  const closeDetailsModal = () => {
    setSelectedPicture(null);
  };

  const addToCart = (picture) => {
    if (cartItems.length >= 15) {
      setCartFullMessage("Cart is full. Maximum 15 items allowed.");
      setTimeout(() => {
        setCartFullMessage("");
      }, 3000);
      return;
    }

    if (!isInCart(picture)) {
      setCartItems((prevCartItems) => [...prevCartItems, picture]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const isInCart = (picture) => {
    return cartItems.some((item) => item.id === picture.id);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbarfull setShowCart={setShowCart} />

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
              <h2 className="text-lg font-semibold text-white">
                {picture.name}
              </h2>
              <p className="text-gray-300">{picture.dimension} mm</p>
              <p className="text-gray-300">{picture.technique}</p>
              <p className="text-gray-300">{picture.price}$</p>
            </div>
            {isInCart(picture) && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-7xl font-semibold ">
                  <FaCartPlus />
                </span>
              </div>
            )}
          </div>
        ))}
        {selectedPicture && (
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
                  isInCart(selectedPicture)
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                onClick={() => addToCart(selectedPicture)}
                disabled={isInCart(selectedPicture)}
              >
                {isInCart(selectedPicture) ? "Already in Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        )}
        {showCart && (
          <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-75 z-20">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold mb-6">
                  Shopping Cart 🛒
                </h2>
                <button
                  className="text-gray-400 focus:outline-none font-semibold text-lg mb-8"
                  style={{ zIndex: 50 }}
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
                  <li
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <span className="flex items-center flex-grow">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="h-6 w-6 mr-2"
                      />
                      <span className="truncate">{item.name}</span>
                    </span>
                    <span
                      className="flex-none
 w-20 text-right text-black font-bold"
                    >
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
                <div className="flex justify-end mt-4">
                  <button
                    className="text-gray-500 rounded focus:outline-none"
                    onClick={clearCart}
                  >
                    Clear All
                  </button>
                </div>
              </ul>

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
                    alert(
                      "Checkout will be available soon. Please call +38762615802"
                    )
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showBottomCart && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center focus:outline-none"
          onClick={() => setShowCart(!showCart)}
        >
          <FaShoppingCart className="h-6 w-6 mr-2" />
          Cart ({cartItems.length})
        </button>
      )}

      {cartFullMessage && (
        <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full">
          {cartFullMessage}
        </div>
      )}
    </>
  );
}

export default Gallery;
