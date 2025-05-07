import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images: GalleryImage[] = [
    {
      src: "https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Semi truck maintenance",
      category: "maintenance"
    },
    {
      src: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Welding work",
      category: "welding"
    },
    {
      src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Truck repair",
      category: "repairs"
    },
    {
      src: "https://images.pexels.com/photos/3652090/pexels-photo-3652090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Parts fabrication",
      category: "fabrication"
    },
    {
      src: "https://images.pexels.com/photos/6169591/pexels-photo-6169591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Trailer inspection",
      category: "inspections"
    },
    {
      src: "https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mobile service",
      category: "mobile"
    },
    {
      src: "https://images.pexels.com/photos/11391431/pexels-photo-11391431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Fleet of trucks",
      category: "fleet"
    },
    {
      src: "https://images.pexels.com/photos/6169593/pexels-photo-6169593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Body work",
      category: "repairs"
    },
  ];

  const categories = ['all', 'maintenance', 'welding', 'repairs', 'fabrication', 'inspections', 'mobile', 'fleet'];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Work Gallery</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8">
            Take a look at some of our recent projects and the quality of work we deliver.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize transition-colors ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-screen">
              <button 
                className="absolute top-4 right-4 p-2 bg-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;