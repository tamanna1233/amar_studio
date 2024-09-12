import React from 'react'
import image from '../assets/ServiceImg/image 2.png'
import image1 from '../assets/ServiceImg/image 3.png'
import image3 from '../assets/ServiceImg/image 4.png'
import image4 from '../assets/ServiceImg/image 5.png'
import image5 from '../assets/ServiceImg/image 6.png'
import image6 from '../assets/ServiceImg/image 7.png'





const Service = () => {
     const serviceArr = [
        {
            service: "Wedding Photography",
            image:image
        },
        {
            service: "Pre-wedding Photography",
            image:image1
        },
        {
            service: "Maternity Photography",
            image:image3
        },
        {
            service: "Baby Photography",
            image:image4
        },
        {
            service: " Drone Videography",
            image:image5
        },
        {
            service: "Cinematic Videography",
            image:image6
        },
     ]


  return (
    <>
        <div className='text-[#FFD700] text-lg sm:text-2xl md:text-4xl font-imprint text-center py-8' > Our Services</div>

   <div className='flex justify-center flex-cols items-center '>
    <div className='grid grid-cols-2 gap-x-6 sm:gap-x-40 px-8 sm:px-16 gap-y-8'>
        {serviceArr.map((item) => (
            <div key={item.service}>
                <img src={item.image} alt="" className='min-w-[100%] sm:w-[500px]' />
                <div className='text-center text-[#FFD700] py-2 font-imprint text-xs sm:text-lg'>{item.service}</div>
            </div>
        ))}

    </div>
   </div>

      
    </>
  )
}

export default Service
