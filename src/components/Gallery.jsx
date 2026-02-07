import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';

const images = import.meta.glob("../assets/Gallery/*.{png,jpeg,jpg,webp,svg}");

const Gallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      const paths = await Promise.all(
        Object.values(images).map(async (importImage) => {
          const image = await importImage();
          return image.default;
        })
      );
      setImagePaths(paths);
    };
    loadImages();
  }, []);

  return (
    <>
      <SEO 
        title="Gallery" 
        description="Explore our portfolio of stunning wedding, pre-wedding, and maternity photography."
      />

      <section className="bg-black-rich min-h-screen py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-title text-gold mb-4">Our Portfolio</h1>
            <p className="text-gray-400 font-light">A glimpse into the beautiful stories we&apos;ve had the honor of telling.</p>
          </motion.div>

          {imagePaths.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                {imagePaths.map((src, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`relative overflow-hidden rounded-lg cursor-pointer group ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                    onClick={() => setSelectedImage(src)}
                  >
                    <img
                      src={src}
                      alt={`Portfolio item ${index}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-gold font-title text-lg tracking-widest border border-gold px-4 py-2 uppercase">View</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
                </div>
            )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
        >
            <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedImage} 
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm shadow-2xl border border-gold-dark/20"
            />
             <button 
                className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
            >
                &times;
            </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
