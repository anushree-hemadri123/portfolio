import React from "react";

export default function App() {
  return (
    <div className="bg-[#0b0f19] text-white min-h-screen font-sans">

      {/* NAV */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Anushree</h1>
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a
            href="/resume.pdf"
            className="bg-white text-black px-4 py-2 rounded-lg font-medium"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center mt-20 px-6">
        <h1 className="text-6xl font-bold leading-tight">
          Full Stack Developer <br /> & ML Enthusiast
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          I build scalable web apps, AI projects and real-world systems.
          Currently preparing for top tech internships and placements.
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/YOURUSERNAME"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOURUSERNAME"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* EV PROJECT */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold">
              EV Charging Station Finder
            </h3>
            <p className="text-gray-400 mt-4">
              MERN stack app that locates nearby EV charging stations using
              map APIs, routing, and geolocation.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="underline">Live</a>
              <a href="#" className="underline">Code</a>
            </div>
          </div>

          {/* ML PROJECT */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold">
              Health Insurance Predictor
            </h3>
            <p className="text-gray-400 mt-4">
              Machine learning model predicting insurance cost with Python,
              Pandas and Scikit-learn. Deployed with web interface.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="underline">Live</a>
              <a href="#" className="underline">Code</a>
            </div>
          </div>

          {/* PETROL */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold">
              Smart Petrol Planner
            </h3>
            <p className="text-gray-400 mt-4">
              Trip planner calculating fuel requirements and petrol pump stops
              using map routing APIs.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-32 bg-[#020617] py-20 text-center">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          React • Node.js • Express • MongoDB • Python • Machine Learning • AWS • Git • REST APIs
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-gray-400 mt-4">
          anushreehemadri30@gmail.com
        </p>
      </section>

    </div>
  );
}
