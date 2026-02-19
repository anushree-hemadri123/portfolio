import React from "react";

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      
      {/* HERO */}
      <section className="p-10 text-center">
        <h1 className="text-5xl font-bold">Anushree Hemadri</h1>
        <p className="mt-3 text-gray-400 text-lg">
          Full Stack Developer | AI/ML Enthusiast
        </p>

        <div className="mt-5 space-x-4">
          <a href="https://github.com/yourgithub" className="underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" className="underline">
            LinkedIn
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-[#161616] p-6 rounded-xl">
            <h3 className="text-xl font-bold">EV Charging Station Finder</h3>
            <p className="text-gray-400 mt-2">
              Map-based app to locate EV stations using MERN + Leaflet.
            </p>
          </div>

          <div className="bg-[#161616] p-6 rounded-xl">
            <h3 className="text-xl font-bold">Health Insurance Predictor</h3>
            <p className="text-gray-400 mt-2">
              ML model predicting insurance cost using Python & Sklearn.
            </p>
          </div>

          <div className="bg-[#161616] p-6 rounded-xl">
            <h3 className="text-xl font-bold">Smart Petrol Planner</h3>
            <p className="text-gray-400 mt-2">
              Trip planner with fuel estimation and route optimization.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="mt-3 text-gray-400">
          React, Node.js, MongoDB, Python, Machine Learning, AWS, Git
        </p>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl">Contact</h2>
        <p className="text-gray-400 mt-2">
          anushreehemadri30@gmail.com
        </p>
      </section>
    </div>
  );
}
