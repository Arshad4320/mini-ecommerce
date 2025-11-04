import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* 🔹 Hero Section */}
      <div className="relative bg-blue-600 text-white py-20 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to TechShop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Empowering your digital lifestyle with quality gadgets & accessories
        </motion.p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/30 to-blue-900/40 pointer-events-none"></div>
      </div>

      {/* 🔹 About Content */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 mt-[-60px] relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          About Us
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">TechShop</span> — your
          trusted destination for high-quality electronics and accessories at
          affordable prices. We aim to make technology accessible to everyone,
          offering the latest gadgets, smartphones, and accessories that match
          your lifestyle and budget.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Our mission is simple: to provide top-notch customer experience with
          genuine products, fast delivery, and reliable service. Whether you’re
          upgrading your phone, exploring new gadgets, or looking for
          budget-friendly options, we’ve got you covered.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Thank you for being part of our journey. We’re constantly improving
          and expanding to serve you better every day. Your satisfaction is our
          priority.
        </p>
      </div>

      {/* 🔹 Mission & Vision */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600"
        >
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To bring the latest and best tech products to your doorstep with
            unbeatable prices and excellent service. We believe everyone should
            have access to modern technology without breaking the bank.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600"
        >
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become one of the most trusted and customer-centric online tech
            stores, providing innovation and convenience across Bangladesh and
            beyond.
          </p>
        </motion.div>
      </div>

      {/* 🔹 Team Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Arman Hossain",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Nusrat Jahan",
              role: "Marketing Head",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Sajid Khan",
              role: "Product Manager",
              img: "https://randomuser.me/api/portraits/men/65.jpg",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 border-blue-500"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-blue-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 Call to Action */}
      <div className="text-center mt-16 mb-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};

export default About;
