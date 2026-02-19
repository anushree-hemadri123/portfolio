import React from "react";

export default function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold tracking-tight">
          Anushree Hemadri
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Full Stack Developer • AI/ML Enthusiast
        </p>

        <div className="mt-6 flex gap-6">
          <a
            href="https://github.com/YOURUSERNAME"
            className="px-6 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOURUSERNAME"
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">
              EV Charging Station Finder
            </h3>
            <p className="text-gray-400 mt-3">
              MERN-based application to locate nearby EV charging stations
              with map integration and route optimization.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">
              Health Insurance Predictor
            </h3>
            <p className="text-gray-400 mt-3">
              Machine learning model predicting insurance premiums using
              regression and feature engineering.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">
              Smart Petrol Pump Planner
            </h3>
            <p className="text-gray-400 mt-3">
              Trip planning app calculating fuel needs and identifying petrol
              pumps along routes.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-[#111] py-16 text-center">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          React • Node.js • MongoDB • Express • Python • Machine Learning • AWS • Git • REST APIs
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 mt-4">
          anushreehemadri30@gmail.com
        </p>
      </section>

    </div>
  );
}
