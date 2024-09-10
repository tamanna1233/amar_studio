import React, { useEffect, useState } from 'react'
import image2 from '../assets/Gallery/image.png'
import image1 from '../assets/Gallery/image (1).png'
import image3 from '../assets/Gallery/image (2).png'
import image4 from '../assets/Gallery/image (3).png'
import image5 from '../assets/Gallery/image (4).png'
import image6 from '../assets/Gallery/image (5).png'
import image7 from '../assets/Gallery/image (6).png'
const Gallery = () => {
const [imagePath,SetimagePath]= useState([])
useEffect(()=>{
    // convert the imported image to an array
     const loadImages = async()=>{
        const paths =await Promise.all(
            object.values(images).map(async(importImage)=>{
                const image = await importImage();
                return image.default;
            })
        );
        SetimagePath(paths)
     };
     loadImages();
},[])
 console.log(imagePath)


  return (
    <>
    <h1 className='text-yellow-300 text-center text-4xl p-4'>Gallery</h1>
<div className='grid grid-cols-4 text-white  gap-2 mx-10 text-center  '>
    <div className='bg-pink-200 '><img src={image1} alt="" /></div>
    <div className='bg-blue-200'><img src={image2} alt="" /></div>
    <div className='bg-red-200'><img src={image2} alt="" /></div>
    <div className='bg-yellow-200'><img src={image3} alt="" /></div>
    <div className='bg-green-200 '><img src={image4} alt="" /></div>
    <div className='bg-white'><img src={image5} alt="" /></div>
    <div className='bg-orange-200'><img src={image6} alt="" /></div>
    <div className='bg-gray-200'><img src={image7} alt="" /></div>
</div>
      
    </>
  )
}

export default Gallery
