import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Have questions or need service? Reach out to us by phone or email,
            and we'll respond promptly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Location
                  </h4>
                  <p className="text-slate-600">
                    62 Wrightstown Georgetown Road
                  </p>
                  <p className="text-slate-600">Wrightstown, NJ 08562</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                  <p className="text-slate-600">
                    Operation Management:{" "}
                    <a
                      href="tel:+16095175508"
                      className="hover:text-blue-600 transition-colors"
                    >
                      (609) 517-5508
                    </a>
                  </p>
                  <p className="text-slate-600">
                    Sales:{" "}
                    <a
                      href="tel:+16094395593"
                      className="hover:text-blue-600 transition-colors"
                    >
                      (609) 439-5593
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                  <p className="text-slate-600">
                    <a
                      href="mailto:Nefs@comcast.net"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Nefs@comcast.net
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-slate-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-slate-600">Saturday - Sunday: Closed</p>
                  {/* <p className="text-slate-600 mt-1 font-medium text-orange-500">
                    24/7 Emergency Service Available
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
