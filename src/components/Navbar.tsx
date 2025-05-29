import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "./Navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-800 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="#hero" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                North East Fleet
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="#hero"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="#services"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="#about"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="#gallery"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              to="#contact"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+16095175508"
              className="flex items-center text-white hover:text-orange-400 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>(609) 517-5508</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <Link
              to="#hero"
              className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="#services"
              className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="#about"
              className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="#gallery"
              className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="#contact"
              className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-slate-700 pt-2 mt-2">
              <a
                href="tel:+16095175508"
                className="flex items-center text-white hover:text-orange-400 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>(609) 517-5508</span>
              </a>
              <a
                href="mailto:Nefs@comcast.net"
                className="flex items-center text-white hover:text-orange-400 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>Nefs@comcast.net</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
