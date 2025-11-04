import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 text-white py-32 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,255,0.2),transparent_70%)]"></div>

      <div className="max-w-11/12 mx-auto   flex  items-center justify-center gap-10 relative z-10">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight ">
            Upgrade Your <span className="text-blue-400">Tech Life</span> Today!
          </h1>
          <p className="text-lg text-gray-300">
            Find the latest electronics, gadgets, and smart devices at
            unbeatable prices. Experience innovation with{" "}
            <span className="font-semibold text-blue-300">TechWave</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
              Shop Now
            </button>
            <button className="border border-blue-400 hover:bg-blue-400 hover:text-gray-900 py-3 px-8 rounded-full font-semibold transition transform hover:scale-105">
              Explore Deals
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        {/* <div className="md:w-1/3 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2-g_wYpK1qMPA41xMst6XJcplbX204kLsg&s"
            alt="Electronics Gadgets"
            className="w-80 md:w-[420px] drop-shadow-2xl animate-float"
          />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
