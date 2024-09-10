import React from 'react'
import logo from '../assets/logo/group 11.png'
import drone from "../assets/logo/drone.png"
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center  py-4 px-8'>
     <div className='text-[#FFD700] text-xs sm:text-2xl md:text-4xl font-imprint'>
      About us</div> 
      <div className='flex-col sm:flex items-center justify-center py-8 sm:py-32 gap-y-8'>
     
     <div className=' sm:flex justify-center items-center px-4 gap-x-20'>
     <img src={logo} alt=""  className='min-w-2/5 sm:w-2/5  '/>
        <p className='text-white  font-poppin text-[0.64rem] sm:text-sm 5/6 sm:w-2/6 py-4  '>  At amar studio, we are passionate about capturing the essence of life’s most precious moments. With years of experience in the photography industry, our team is dedicated to providing personalized and professional services tailored to your needs. From stunning wedding photos to intimate maternity sessions, we offer a wide range of photography services to help you relive your favorite moments.</p>

     </div>

     <div className=' sm:flex justify-center items-center px-4 gap-x-20'>
     <img src={drone} alt=""  className='w-full sm:w-2/5 flex sm:hidden  '/>

        <p className='text-white  font-poppin text-[0.64rem] sm:text-sm 5/6 sm:w-2/6  '> 
        Our expertise goes beyond traditional photography with advanced drone services, adding a unique perspective to your special day. We combine creativity, technology, and an eye for detail to deliver exceptional quality in every shot.         </p>
     <img src={drone} alt=""  className='w-full sm:w-2/5  hidden sm:flex '/>

     </div>
       
      </div>
    </div>
  )
}

export default About
