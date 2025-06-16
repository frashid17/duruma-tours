import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Wildebeest Migration",
      category: "Wildlife"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Elephant at Amboseli",
      category: "Wildlife"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1271179/pexels-photo-1271179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Lion Pride",
      category: "Wildlife"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Safari Vehicle",
      category: "Safari"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1271177/pexels-photo-1271177.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Flamingos at Lake Nakuru",
      category: "Birds"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Tsavo Landscape",
      category: "Landscape"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Giraffe Family",
      category: "Wildlife"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Coastal Beauty",
      category: "Landscape"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Cheetah Portrait",
      category: "Wildlife"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "African Sunset",
      category: "Landscape"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Zebra Herd",
      category: "Wildlife"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/2080070/pexels-photo-2080070.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Rhino Conservation",
      category: "Wildlife"
    }
  ];

  const categories = ["All", "Wildlife", "Landscape", "Safari", "Birds"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Memories from our unforgettable safari adventures
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-safari-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-safari-50 hover:text-safari-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-300">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-safari-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-safari-100 mb-8 max-w-3xl mx-auto">
            Join us on an unforgettable safari and capture your own amazing photos
          </p>
          <button className="bg-white text-safari-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Book Your Safari
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;