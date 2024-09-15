import { lazy,useEffect, useState } from 'react';

const images = import.meta.glob("../assets/Gallery/*.{png,jpeg,jpg,webp,svg}");
const Loading = lazy(() => import('./Loading.jsx'));const Gallery = () => {
  const [imagePath, setImagePath] = useState([]);

  useEffect(() => {
    // Function to load images asynchronously
    const loadImages = async () => {
      const paths = await Promise.all(
        Object.values(images).map(async (importImage) => {
          const image = await importImage();
          return image.default;
        })
      );
      setImagePath(paths);
    };

    loadImages();
  }, []);

  return (
    <>
      <div className=''>
        <div className='text-yellow-300 text-center py-4 text-lg sm:text-2xl md:text-4xl font-imprint'>Gallery</div>
        <div className='flex justify-center py-4'>
          <div className='grid grid-cols-2 sm:grid-cols-4 text-white gap-x-4 gap-y-8 px-8 sm:px-40'>
            {imagePath.length > 0 ? (
              imagePath.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`image ${index}`}
                    className='hover:cursor-pointer hover:scale-105 h-auto w-full transition-transform duration-300 '
                    loading='lazy' // Lazy loading applied here
                    width="300" // Set fixed width for better lazy loading
                    height="200"
                  />
                </div>
              ))
            ) : (
              <div className='flex justify-center items-center w-full h-screen'><Loading/></div>
              
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
