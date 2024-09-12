import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const images = import.meta.glob('../assets/carousel-Images/*.{WEBP,webp,jpg,png,jpeg,svg}')

const Home = () => {
    const [imagePath,SetimagePath]=useState([])
    useEffect(() => {
        // Convert the imported images to an array of paths
        const loadImages = async () => {
          const paths = await Promise.all(
            Object.values(images).map(async (importImage) => {
              const image = await importImage();
              return image.default;  // Extract the image path from the "default" key
            })
          );
          SetimagePath(paths);
        };
      
        loadImages();
      }, []);  
      
      console.log(imagePath);

  return (
    <>
    <div className='flex flex-col  items-center'>
        {/* well come to amar studio  */}
    <div className='font-imprint text-xs sm:text-2xl md:text-2xl lg:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-[#FFD700] to-[#D3D3D3]  py-4'>
      <TypeAnimation
      sequence={["WELLCOME TO AMAR STUDIO (BALKAR)" ,2000,
        "WHERE MOMENTS BECOME MASTERPICES",2000,
      ]}
      speed={40}
      repeat={Infinity}
      wrapper='div'
      />
 
    </div>
     {/* subtext of page  */}
    <p className='text-white  text-left font-light text-xs sm:text-sm md:text-xl px-8 sm:px-20 md:px-40 sm:text-center font-poppin py-4 '>
  At amar studio, we believe that every moment deserves to be cherished forever. Whether it's your wedding day, a maternity shoot, or your baby’s first steps, we are here to capture those priceless moments with creativity and precision. Our team of skilled photographers specializes in wedding, pre-wedding, maternity, baby, and drone photography, ensuring that every frame tells your unique story. Let us be part of your journey, creating memories that will last a lifetime.
  </p>

  {/* image crousel */}

  <div className='flex  justify-center w-full  items-center py-4'>
  <Carousel 
    autoPlay={true} 
    interval={3000}  // Auto-play interval set to 5 seconds
    infiniteLoop={true} 
    autoFocus={true}
    width={"80%"}
    showArrows={true} 
    transitionTime={1500}
    showThumbs={false}
    className='   flex flex-col items-center justify-center'>
    {imagePath.length > 0 ? imagePath.map((src, index) => (
  <div key={index}>
    <img src={src} alt={`Carousel Slide ${index}`} className="text-center w-[80%] h-full" />
  </div>
)) : null}

  </Carousel>
</div>

  

    </div>
    </>
  )
}

export default Home
