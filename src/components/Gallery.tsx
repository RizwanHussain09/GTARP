import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/12935080/pexels-photo-12935080.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Police Patrol',
    },
    {
      url: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Downtown Los Santos',
    },
    {
      url: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Night City Life',
    },
    {
      url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Street Racing',
    },
    {
      url: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Vehicles',
    },
    {
      url: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Emergency Response',
    },
    {
      url: 'https://images.pexels.com/photos/1036945/pexels-photo-1036945.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gang Territory',
    },
    {
      url: 'https://images.pexels.com/photos/1545748/pexels-photo-1545748.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Business District',
    },
    {
      url: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Event',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore screenshots and moments captured from our roleplay community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
