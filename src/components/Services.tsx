import React from 'react';
import { Wrench, Truck, Shield, PenTool as Tool, Clipboard, Clock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-600">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Mobile Technician Services",
      description: "Our mobile technicians come to your location for repairs and maintenance, minimizing downtime for your fleet.",
      icon: <Truck className="h-10 w-10" />,
    },
    {
      title: "Welding & Fabrication",
      description: "Expert welding and custom fabrication services to repair and modify your equipment to exact specifications.",
      icon: <Tool className="h-10 w-10" />,
    },
    {
      title: "Preventative Maintenance",
      description: "Regular maintenance schedules to prevent breakdowns and extend the life of your vehicles and equipment.",
      icon: <Wrench className="h-10 w-10" />,
    },
    {
      title: "Body Shop Repairs",
      description: "Comprehensive body shop equipped to handle trailer wrecks and tractor body damage with precision.",
      icon: <Shield className="h-10 w-10" />,
    },
    {
      title: "Federal Trailer Inspections",
      description: "Certified inspections ensuring your trailers meet all federal safety and compliance standards.",
      icon: <Clipboard className="h-10 w-10" />,
    },
    {
      title: "Same-Day Estimates",
      description: "Quick and accurate estimates for repairs and services to help you make informed decisions.",
      icon: <Clock className="h-10 w-10" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We offer a comprehensive range of fleet maintenance and repair services to keep your vehicles running at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;