import React, { useEffect, useState } from 'react'
import image from '../assets/logo/Group 9.png'
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
    <div className='bg-pink-200 '><img src={image} alt="" /></div>
    <div className='bg-blue-200'></div>
    <div className='bg-red-200'></div>
    <div className='bg-yellow-200'></div>
    <div className='bg-green-200 '></div>
    <div className='bg-white'></div>
    <div className='bg-orange-200'></div>
    <div className='bg-gray-200'></div>
</div>
      
    </>
  )
}

export default Gallery
