import React from 'react';
import { Link } from './Navigation';
import { PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Keep Your Fleet Operating at Its Best?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for same-day estimates and reliable service that keeps your vehicles on the road.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="#contact"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
            <a
              href="tel:+16095551234"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              (609) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;