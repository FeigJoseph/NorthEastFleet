import React from "react";
import { Link } from "./Navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">North East Fleet Service</h3>
            <p className="mb-4 text-slate-300">
              Your trusted partner in fleet maintenance and repair services for
              over 40 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-orange-400" />
                <span className="text-slate-300">
                  62 Wrightstown Georgetown Road
                  <br />
                  Wrightstown, NJ 08562
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-400" />
                <a
                  href="tel:+16095175508"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  (609) 517-5508
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-400" />
                <a
                  href="mailto:nefleet@comcast.net"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  nefleet@comcast.net
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#hero"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#services"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#gallery"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-slate-300">Monday - Friday:</span>
                <span className="text-slate-300">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-300">Saturday-Sunday:</span>
                <span className="text-slate-300">Closed</span>
              </li>
            </ul>
            {/* <p className="mt-4 text-orange-400 font-semibold">
              24/7 Emergency Service Available
            </p> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; {currentYear} North East Fleet Service. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
