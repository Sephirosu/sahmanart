"use client";

import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../CartContext";
import Navbarfull from "../Navbarfull";
import PictureGrid from "../galleryComp/PictureGrid";
import PictureModal from "../galleryComp/PictureModal";
import CartModal from "../galleryComp/CartModal";
import CartButton from "../galleryComp/CartButton";
import CartFullMessage from "../galleryComp/CartFullMessage";

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
      <PictureGrid
        pictures={pictures}
        openDetailsModal={openDetailsModal}
        isInCart={isInCart}
      />
      {selectedPicture && (
        <PictureModal
          selectedPicture={selectedPicture}
          closeDetailsModal={closeDetailsModal}
          addToCart={addToCart}
          isInCart={isInCart}
        />
      )}
      {showCart && (
        <CartModal
          cartItems={cartItems}
          setShowCart={setShowCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          getTotalPrice={getTotalPrice}
        />
      )}
      {showBottomCart && (
        <CartButton cartItems={cartItems} setShowCart={setShowCart} />
      )}
      {cartFullMessage && <CartFullMessage cartFullMessage={cartFullMessage} />}
    </>
  );
}

export default Gallery;
