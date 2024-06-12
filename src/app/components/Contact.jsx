"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "../Navbarfull";

function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="mb-4 text-xl">{message}</p>
        <button
          onClick={onClose}
          className="mx-auto border-2 border-gray-900 flex items-center rounded-lg bg-gradient-to-r px-5 py-2 text-xl font-bold text-gray-900 duration-300 hover:scale-110"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const content = `Name: ${name}, Email: ${email}, Message: ${message}`;

    try {
      console.log("Submitting form...");
      const response = await fetch("/api/addMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setFeedbackMessage("Thank you for your sumbission!");
      console.log("Form submitted successfully");
    } catch (error) {
      setFeedbackMessage(
        "There was an error submitting your message. Please try again."
      );
      console.error("Error submitting form:", error);
    } finally {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFeedbackMessage("");
  };

  return (
    <div>
      <Navbar cartItems={[]} setShowCart={() => {}} />{" "}
      <div className="h-screen w-full bg-white">
        <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4 text-center">
          <div className="pb-8">
            <p className="text-5xl font-extrabold text-gray-900">
              Get in touch
            </p>
            <p className="py-6 text-xl text-gray-900">
              Feel free to contact me about art inquiries or other interesting
              requests.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col md:w-1/2 bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-md "
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mb-4 rounded-lg border-2 border-gray-600 bg-gray-200 bg-opacity-50 p-2 text-gray-900 focus:border-gray-900 placeholder-gray-400 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mb-4 rounded-lg border-2 border-gray-600 bg-gray-200 bg-opacity-50 p-2 text-gray-900 focus:border-gray-900 placeholder-gray-400 focus:outline-none"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter any additional details"
                rows="5"
                className="mb-4 resize-none rounded-lg border-2 border-gray-600 bg-gray-200 bg-opacity-50 p-2 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none"
              ></textarea>

              <button className="mx-auto border-2 border-gray-900  flex items-center rounded-lg bg-gradient-to-r px-5 py-2 text-xl font-bold text-gray-900 duration-300 hover:scale-110">
                Submit Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center py-8 flex justify-center items-center">
        <p className="text-gray-600">Created by: Irfan Sahman</p>
      </div>
      <div className="bg-white flex justify-center items-center pb-8 text-3xl space-x-6">
        <a
          href="https://facebook.com/sandzak.genetic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/sandzak_genetics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://ba.linkedin.com/in/irfan-sahman-5211b624b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      {isModalOpen && <Modal message={feedbackMessage} onClose={closeModal} />}
    </div>
  );
}

export default Contact;
