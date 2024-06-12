"use client";

import Navbar from "../Navbarfull";

function About() {
  return (
    <div className=" min-h-screen">
      <Navbar cartItems={[]} setShowCart={() => {}} />
      <div className="flex items-center justify-center bg-contain bg-center py-12 px-4 md:px-0">
        <div className="max-w-4xl w-full p-8 md:p-12 rounded-lg shadow-lg flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mr-8 flex items-center justify-center mb-8 md:mb-0 ">
            <img
              src="muso.jpg"
              alt="Artist Muso Sahman"
              className="w-3/4 md:w-full border-4 border-black rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <div className="text-gray-800 text-sm md:text-lg">
              <p className="mb-4">
                Muso Sahman, a passionate painter, finds his inspiration in the
                rich cultural tapestry of Sarajevo, Bosnia and Herzegovina. Born
                and raised amidst the city`s picturesque landscapes and diverse
                communities, his distinctive style, characterized by vibrant
                colors and intricate brushwork, captures the essence of
                Sarajevo`s unique charm and timeless beauty. Sahman`s artistic
                journey began fueled by his innate curiosity and love for the
                arts.
              </p>
              <p className="mt-4">
                <strong>Contact Me</strong>
                <br />
                Call, Text or WhatsApp:{" "}
                <a href="tel:+38762615802" className="text-blue-500">
                  +387 62 615 802
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
