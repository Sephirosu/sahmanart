import React, { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";

const Navbar = ({ setShowCart }) => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useContext(CartContext);

  const handleCartClick = () => {
    if (pathname === "/gallery") {
      setShowCart(true);
    } else {
      alert("You need to go to the gallery to open the cart");
    }
  };

  return (
    <>
      <div className="flex justify-between font-light border-solid border-2 items-center h-18 px-6 bg-gray-100 mb-3">
        <div className="flex space-x-3 ">
          <button
            className="md:hidden mt-3 font-medium lg:text-left py-2 mb-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
          <div
            className={`md:flex space-x-6 capitalize ${
              showMenu ? "hidden" : "hidden md:block"
            }`}
          >
            <Link href="/" passHref>
              <div className="mt-3 font-medium mb-3 lg:text-left md:text-2xl py-2 duration-200 hover:scale-105">
                home
              </div>
            </Link>
            {pathname !== "/gallery" && (
              <Link href="/gallery" passHref>
                <div className="mt-3 py-2 duration-200 hover:scale-105 md:text-2xl text-lg font-medium">
                  gallery
                </div>
              </Link>
            )}
            {pathname !== "/about" && (
              <Link href="/about" passHref>
                <div className="mt-3 lg:text-left md:text-2xl text-lg py-2 font-medium duration-200 hover:scale-105">
                  about
                </div>
              </Link>
            )}
            {pathname !== "/contact" && (
              <Link href="/contact" passHref>
                <div className="mt-3 py-2 duration-200 hover:scale-105 md:text-2xl text-lg font-medium">
                  contact
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center ">
          <button
            className="flex items-center mb-2 mt-3 font-medium md:text-xl lg:text-left py-2 duration-200 hover:scale-105"
            onClick={handleCartClick}
          >
            <FaShoppingCart className="h-6 w-6 mr-2 duration-200 hover:scale-105" />
            Cart ({cartItems.length})
          </button>
        </div>
      </div>

      {showMenu && (
        <>
          <div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-10"
            onClick={() => setShowMenu(false)}
          ></div>

          <div className="md:hidden border-2 border-solid border-black absolute top-0 left-0 w-2/3 h-screen bg-white shadow-xl z-20 flex flex-col items-center justify-center">
            <button
              className="absolute mt-1 top-4 left-4 text-xl"
              onClick={() => setShowMenu(false)}
            >
              <FaTimes className="h-6 w-6 ml-2" />
            </button>
            <div className="text-center capitalize text-4xl space-y-12">
              <Link
                href="/"
                className="block text-gray-800 duration-200 font-semibold hover:scale-105 py-2"
                onClick={() => setShowMenu(false)}
              >
                home
              </Link>
              {pathname !== "/gallery" && (
                <Link
                  href="/gallery"
                  className="block text-gray-800 duration-200 font-semibold hover:scale-105 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  gallery
                </Link>
              )}
              {pathname !== "/about" && (
                <Link
                  href="/about"
                  className="block text-gray-800 font-semibold duration-200 hover:scale-105 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  about
                </Link>
              )}
              {pathname !== "/contact" && (
                <Link
                  href="/contact"
                  className="block text-gray-800 duration-200 font-semibold hover:scale-105 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  contact
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
