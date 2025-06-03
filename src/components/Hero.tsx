import React from "react";
import { Link } from "./Navigation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative bg-slate-900 min-h-screen flex items-center"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your Trusted Partner in Fleet Maintenance
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Serving a four-state area (New York, New Jersey, Pennsylvania,
            Connecticut) for over 40 years with quality workmanship and
            dedicated service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              Request Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="#services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
