import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, position }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
      <div className="mb-6 text-blue-600">
        <Quote className="h-10 w-10" />
      </div>
      <p className="text-slate-700 text-lg mb-6 flex-grow">{content}</p>
      <div>
        <p className="font-semibold text-slate-900">{author}</p>
        <p className="text-slate-600">{position}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "North East Fleet Service has been maintaining our delivery trucks for over 10 years. Their mobile technicians are always prompt, professional, and get the job done right the first time.",
      author: "Michael Thompson",
      position: "Operations Manager, NJ Logistics"
    },
    {
      content: "Their welding and fabrication work is exceptional. They modified our trailers to meet specific requirements, and the quality of work exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Fleet Director, EastCoast Transport"
    },
    {
      content: "The preventative maintenance program they set up for our fleet has drastically reduced our vehicle downtime and saved us thousands in repair costs.",
      author: "Robert Anderson",
      position: "Owner, Anderson Shipping"
    },
    {
      content: "After a major accident damaged several of our trucks, their body shop got them back on the road quickly and looking like new. Couldn't ask for better service.",
      author: "Jennifer Williams",
      position: "VP Operations, Williams Freight"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate what testimonials to show based on screen size
  const displayCount = 3; // Show 3 testimonials on desktop
  const displayTestimonials = [];
  
  for (let i = 0; i < displayCount; i++) {
    const index = (currentIndex + i) % testimonials.length;
    displayTestimonials.push(testimonials[index]);
  }

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We take pride in our work and the relationships we've built with our clients over the past 25 years.
          </p>
        </div>

        <div className="relative">
          {/* Desktop view */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            <TestimonialCard
              content={testimonials[currentIndex].content}
              author={testimonials[currentIndex].author}
              position={testimonials[currentIndex].position}
            />
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-white text-slate-700 rounded-full shadow hover:bg-slate-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-white text-slate-700 rounded-full shadow hover:bg-slate-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;