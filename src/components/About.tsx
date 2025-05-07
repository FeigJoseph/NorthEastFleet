import React from 'react';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

interface StatisticProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const Statistic: React.FC<StatisticProps> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-blue-600 mb-2">{icon}</div>
      <span className="text-3xl font-bold text-slate-800 mb-1">{value}</span>
      <span className="text-slate-600 text-center">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About North East Fleet Service</h2>
            <p className="text-slate-600 mb-4">
              Based in Wrightstown, NJ, our family-owned fleet service company has proudly served the 
              tri-state area for over 25 years. We specialize in mobile technician services, welding, 
              fabrication, maintenance, and repairs, with a strong focus on quality workmanship and dedicated service.
            </p>
            <p className="text-slate-600 mb-4">
              Our facility features a large body shop equipped to handle trailer wrecks and tractor body damage, 
              as well as a spacious rental parking lot for tractor-trailer storage. We are fully licensed and insured, 
              and offer federal trailer inspections, preventative maintenance, and same-day estimates.
            </p>
            <p className="text-slate-600 mb-8">
              Committed to reliability and customer satisfaction, we are your trusted partner in keeping your fleet operating at its best.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Family Owned & Operated
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Licensed & Insured
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                25+ Years Experience
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Tri-State Area Service
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1797415/pexels-photo-1797415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fleet maintenance shop" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg hidden md:block"></div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Statistic 
            value="25+" 
            label="Years in Business" 
            icon={<Calendar className="h-10 w-10" />} 
          />
          <Statistic 
            value="1000+" 
            label="Satisfied Clients" 
            icon={<Users className="h-10 w-10" />} 
          />
          <Statistic 
            value="3" 
            label="States Served" 
            icon={<MapPin className="h-10 w-10" />} 
          />
          <Statistic 
            value="15+" 
            label="Industry Awards" 
            icon={<Award className="h-10 w-10" />} 
          />
        </div>
      </div>
    </section>
  );
};

export default About;