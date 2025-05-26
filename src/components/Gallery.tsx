import React, { useState } from "react";
import { X } from "lucide-react";
import workshop1 from "../assets/inside_1.jpg";
import workshop2 from "../assets/inside_2.jpg";
import main_pic from "../assets/main_pic.png";
import truck1 from "../assets/truck_1.jpg";
import truck2 from "../assets/outside_1.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const images: GalleryImage[] = [
    {
      src: workshop1,
      alt: "Workshop 1",
      category: "workshop",
    },
    {
      src: workshop2,
      alt: "Workshop 2",
      category: "workshop",
    },
    {
      src: truck1,
      alt: "Truck 1",
      category: "NEFS",
    },
    {
      src: truck2,
      alt: "Truck 2",
      category: "NEFS",
    },
    {
      src: main_pic,
      alt: "Main picture",
      category: "NEFS",
    },
  ];

  const categories = ["all", "workshop", "NEFS"];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8">
            Take a look at some of our recent projects and the quality of work
            we deliver.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
