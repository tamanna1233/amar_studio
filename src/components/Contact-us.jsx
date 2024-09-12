import React from 'react';
import logo from '../assets/logo/group 11.png';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
function Contactus() {
  return (
    <div className='px-8 sm:px-20 md:px-20 lg:px-40'>
      {/* Title */}
      <div className='text-yellow-300 text-center py-4 text-lg sm:text-2xl md:text-4xl font-imprint'>
        Contact Us
      </div>

      <div className='flex flex-col sm:flex-row justify-center w-full  items-center py-8 space-y-8 sm:space-y-0 sm:space-x-8'>
        {/* Logo */}
        <div className='flex justify-center'>
          <img src={logo} alt="Company logo" className='w-40 sm:w-full' />
        </div>

        {/* Contact Form */}
        <div className='flex justify-center w-full'>
          <form action="https://api.web3forms.com/submit"  method="POST" className='text-white flex flex-col  w-full'>

          <input type="hidden" name="access_key" value="e632fd9c-4503-482a-bf46-9f3e5606d4fd" />

            {/* Name */}
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className='bg-white rounded-xl text-black indent-2 mb-2'
              placeholder='Enter your name'
              required
            />

            {/* Email */}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className='bg-white rounded-xl text-black indent-2 mb-2'
              placeholder='Enter your email'
              required

            />

            {/* Phone */}
            <label htmlFor="phone">Phone No:</label>
            <input
              type="tel"
              name="phone"
              className='bg-white rounded-xl text-black indent-2 mb-2'
              placeholder='Enter your phone number'
              required

            />

            {/* Service */}
            <label htmlFor="service">Service:</label>
            <input
              type="text"
              name="service"
              className='bg-white rounded-xl text-black indent-2 mb-2'
              placeholder='Enter the service you want'
              required

            />

            {/* Location */}
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              className='bg-white rounded-xl text-black indent-2 mb-2'
              placeholder='Enter your location'
              required

            />

            {/* Date */}
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              className='bg-white rounded-xl text-black indent-2 mb-2'
              required

            />

            <button className='px-2 bg-yellow-300  text-black mt-4 text-center rounded-xl'>
              Submit
            </button>
          </form>
        </div>

      </div>
      {/* address */}
      <div className='  items-center sm:flex justify-evenly text-white py-16  font-poppin'>
          <div className='flex flex-col'>
            <p className=' text-center text-yellow-300 font-imprint'>Address</p>
            <div className=''>Amar Studio main bazzar near saklani clinic sandhol </div>
              <div>state: Himachal pradesh</div>
            <div> distt : Mandi </div> 
              <div>pincode:</div> 
            
          </div>
          <div>
            <p className=' text-center text-yellow-300 font-imprint'>contact us</p>
            <p className=''>email: <a href="mailto:amarstuduio.gmail.com">amarstuduio.gmail.com</a></p>
            <p className=''>phone : <a href="tel:+918894097320">+91 8894097320 </a></p>
            <div className='flex gap-x-6 py-2 '>
            <a href=""> <BiLogoFacebook size={25}/> </a>  
            <a href={`https://wa.me/${+918894097320}?text=Hi there! I am interested in your photography services. Can we discuss my requirements?`} target='_blank'>< BiLogoWhatsapp size={25}/></a> 
           <a href=""><BiLogoInstagram size={25}/></a>  
              
            </div>
          </div>

         </div>
    </div>
  );
}

export default Contactus;
