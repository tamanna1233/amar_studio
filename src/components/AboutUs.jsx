import React from 'react'
import logo from '../assets/logo/Group 9.png'
const AboutUs = () => {
  return (
    <>
      <h1 className='text-4xl text-yellow-400 text-center m-8'>About Us</h1>
      <div id="container" className='grid grid-cols-2 gap-2'>
        <div className=" p-4 mx-4"><img src={logo} alt="" /></div>
        <div className=" p-4 mx-4 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit officia esse voluptates voluptatum repellat dicta sequi sed. Dolore molestiae qui earum minus. Animi ex ad modi corporis! Vero deserunt nisi amet labore libero debitis fugiat exercitationem veritatis, perspiciatis, omnis sapiente? Corporis ex omnis delectus dolor facere molestias numquam ab, eum tenetur laudantium? Dolore illum omnis eum? Quod dolorem officia quasi pariatur nisi. Esse aperiam voluptatibus vitae, explicabo dolorem aut quas non dignissimos facilis quae repellat hic at praesentium nam accusamus sequi magnam? Quisquam saepe incidunt non vitae maxime, mollitia voluptates placeat rerum nulla deserunt at deleniti alias dignissimos tempore explicabo!</div>
        <div className=" p-4 mx-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe ea non expedita nemo deserunt, voluptatibus totam nulla corrupti laudantium aspernatur unde nobis excepturi veritatis impedit blanditiis deleniti adipisci distinctio consequatur perspiciatis voluptates maiores facere minima! Minima facere maxime voluptatum consequuntur nam deleniti suscipit, iure ab temporibus velit unde, illum provident beatae placeat nobis fuga dignissimos nesciunt numquam. Voluptate hic modi tenetur fugit? Consequatur quas aut quo necessitatibus libero enim voluptatum repellat itaque consequuntur! Laboriosam quisquam atque nobis culpa, totam et, repellendus odit, ratione eaque eligendi molestias! Voluptates iste et beatae excepturi soluta quae eaque ipsa? Voluptates omnis tempore ipsum?</div>
        <div className=" p-4 mx-4"><img src={logo} alt="" /> </div>

      </div>
    </>
  )
}

export default AboutUs
