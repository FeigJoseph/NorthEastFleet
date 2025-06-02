import React from "react";
import { Car } from "lucide-react";
import outside1 from "../assets/outside_1.JPG";

const ParkingInfo = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-8 w-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-slate-800">
                  Ample Parking Available
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                Our spacious facility offers plenty of parking for all your
                fleet vehicles. No need to worry about parking constraints -
                we've got you covered with our large, secure parking area.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
                  Secure overnight parking
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
                  Easy access for large vehicles
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={outside1}
                alt="Spacious parking area"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingInfo;
