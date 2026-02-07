import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { BiCameraMovie, BiImages, BiStar, BiTime, BiCheckCircle } from 'react-icons/bi';
import { MdPhotoCamera } from 'react-icons/md';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SEO from './SEO';

// Service Images (Reusing existing assets)
import serviceImg1 from '../assets/ServiceImg/img23.jpg';
import serviceImg2 from '../assets/ServiceImg/image 3.webp';
import serviceImg3 from '../assets/ServiceImg/image 4.webp';

const images = import.meta.glob('../assets/carousel-Images/*.{WEBP,webp,jpg,png,jpeg,svg}');

const Home = () => {
  const [imagePaths, setImagePaths] = useState([]);

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
        title="Home" 
        description="Amar Studio - Creating cinematic masterpices from your special moments."
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          <Carousel
            key={imagePaths.length} // Force re-render when images load
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={3000}
            stopOnHover={false}
            transitionTime={1000}
            animationHandler="fade"
            swipeable={false}
            className="h-full w-full pointer-events-none" // Disable interaction to prevent stopping
          >
            {imagePaths.map((src, index) => (
              <div key={index} className="h-screen w-full relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 z-10" />
                <img src={src} alt={`Cinematic Moment ${index}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-title text-gold tracking-wider mb-6 drop-shadow-lg">
              <span className="block text-xl md:text-2xl font-body tracking-[0.3em] uppercase text-gray-300 mb-2">Welcome to</span>
              AMAR STUDIO
            </h1>
            
            <div className="h-20 md:h-24">
              <TypeAnimation
                sequence={[
                  "Where Moments Become Masterpieces", 2000,
                  "Capturing Your Best Memories", 2000,
                  "Cinematic Wedding Photography", 2000
                ]}
                className="text-lg md:text-3xl font-light text-white font-title italic"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-8"
            >
              <Link 
                to="/contact-us"
                className="inline-block px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 uppercase tracking-widest text-sm md:text-base font-semibold"
              >
                Book Your Shoot
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction/About Preview */}
      <section className="py-20 bg-black-rich relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-dark/10 rounded-full blur-3xl"></div>
                 <h2 className="text-3xl md:text-5xl font-title text-gold-light mb-6 leading-tight">
                    Every Frame Tells <br/>
                    <span className="italic text-white">Your Unique Story</span>
                 </h2>
                 <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
                    At Amar Studio, we don&apos;t just take pictures; we craft visual legacies. Whether it&apos;s the tearful joy of a wedding or the quiet intimacy of a maternity shoot, our lens captures the soul of the moment.
                 </p>
                 <Link to="/about" className="text-gold hover:text-white transition-colors border-b border-gold pb-1 font-title italic">
                    Read Our Story &rarr;
                 </Link>
            </div>
            {/* Image Grid or Single Featured Image could go here, but keeping it text focused for now or using a placeholder if needed */}
             <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold-900/10 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-black-soft px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-title text-gold mb-4">Our Expertise</h2>
             <div className="h-1 w-24 bg-gold-dark mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Wedding Photography", img: serviceImg1, icon: <MdPhotoCamera />, desc: "Capturing the raw emotions and grand moments of your big day." },
              { title: "Pre-Wedding", img: serviceImg2, icon: <BiImages />, desc: "Telling your love story in the most scenic and romantic settings." },
              { title: "Cinematic Films", img: serviceImg3, icon: <BiCameraMovie />, desc: "High-definition storytelling that feels like a movie." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-black-rich border border-gray-800 hover:border-gold transition-all duration-300"
              >
                  <div className="h-64 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-gold backdrop-blur-sm">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-6 relative z-10 bg-black-rich">
                    <h3 className="text-xl font-title text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    <Link to="/service" className="text-gold text-sm uppercase tracking-wider font-semibold hover:text-white transition-colors">
                      Explore Service &rarr;
                    </Link>
                  </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link to="/service" className="inline-block px-8 py-3 border border-gray-700 text-gray-300 hover:border-gold hover:text-gold transition-all rounded-full uppercase tracking-widest text-sm">
                View All Services
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black-rich relative overflow-hidden text-gray-200">
         {/* Background accent */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-dark/5 rounded-full blur-3xl pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-5xl font-title text-gold mb-6">Why Choose Amar Studio?</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                    We combine technical expertise with a creative eye to deliver photos and films that you will cherish forever. 
                    Our commitment to quality and customer satisfaction sets us apart.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { title: "Professional Equipment", text: "Using the latest Sony cameras and DJI drones for crisp 4K quality.", icon: <MdPhotoCamera /> },
                      { title: "Experienced Team", text: "Over 30 years of experience in capturing Himachal's beautiful weddings.", icon: <BiCheckCircle /> },
                      { title: "Timely Delivery", text: "We value your excitement and ensure quick post-processing and delivery.", icon: <BiTime /> }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-gold/10 p-3 rounded-lg text-gold mr-4 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-title text-white mb-1">{feature.title}</h4>
                          <p className="text-gray-400 text-sm font-light">{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative"
               >
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-4 mt-8">
                        <div className="h-48 bg-gray-800 rounded-lg overflow-hidden relative group">
             <div className="absolute inset-0 bg-gold/90 mix-blend-multiply z-10"></div> 
                             {/* Placeholder styles if images don't load instantly */}
                             <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black animate-pulse group-hover:animate-none"></div>
                        </div>
                        <div className="h-64 bg-gray-800 rounded-lg overflow-hidden relative group">
                            <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-black animate-pulse group-hover:animate-none"></div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="h-64 bg-gray-800 rounded-lg overflow-hidden relative group">
                           <div className="w-full h-full bg-gradient-to-bl from-gray-800 to-black animate-pulse group-hover:animate-none"></div>
                        </div>
                        <div className="h-48 bg-gray-800 rounded-lg overflow-hidden relative group">
                            <div className="w-full h-full bg-gradient-to-tl from-gray-800 to-black animate-pulse group-hover:animate-none"></div>
                        </div>
                     </div>
                  </div>
                  {/* Overlay text */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-gold/30 text-center">
                        <span className="block text-4xl font-bold text-gold">30+</span>
                        <span className="text-gray-300 text-sm uppercase tracking-wider">Years of Excellence</span>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-24 bg-black-soft overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-title text-gold mb-4">Client Love</h2>
            <div className="h-1 w-24 bg-gold-dark mx-auto rounded-full"></div>
        </div>

        <div className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black-soft to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black-soft to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
               className="flex space-x-8 w-max"
               animate={{ x: [0, -1000] }}
               transition={{ 
                  x: {
                     repeat: Infinity,
                     repeatType: "loop",
                     duration: 20,
                     ease: "linear",
                  }
               }}
            >
               {[
                  { name: "Priya & Rahul", role: "Wedding", text: "Amar Studio made our wedding look like a Bollywood movie! The drone shots were simply magical." },
                  { name: "Amit Kumar", role: "Pre-Wedding", text: "Blown away by the results. The pictures are vibrant, candid, and just perfect." },
                  { name: "Sneha & Rohan", role: "Maternity", text: "Captured the most beautiful moments of our journey. Highly professional team." },
                  { name: "Vikram Singh", role: "Event", text: "Best photography service in Himachal. They know how to capture the soul of the event." },
                  { name: "Anjali Devi", role: "Portrait", text: "I love my portraits! They made me feel so comfortable and the lighting was exquisite." },
                  { name: "Rajeev & Meera", role: "Wedding", text: "The cinematic film they created for us is something we watch every anniversary. Timeless!" },
               ].concat([
                  { name: "Priya & Rahul", role: "Wedding", text: "Amar Studio made our wedding look like a Bollywood movie! The drone shots were simply magical." },
                  { name: "Amit Kumar", role: "Pre-Wedding", text: "Blown away by the results. The pictures are vibrant, candid, and just perfect." },
                  { name: "Sneha & Rohan", role: "Maternity", text: "Captured the most beautiful moments of our journey. Highly professional team." },
                  { name: "Vikram Singh", role: "Event", text: "Best photography service in Himachal. They know how to capture the soul of the event." },
                  { name: "Anjali Devi", role: "Portrait", text: "I love my portraits! They made me feel so comfortable and the lighting was exquisite." },
                  { name: "Rajeev & Meera", role: "Wedding", text: "The cinematic film they created for us is something we watch every anniversary. Timeless!" },
               ]).map((testimonial, idx) => (
                  <div key={idx} className="w-[350px] bg-black-rich p-8 rounded-xl border border-gray-800 flex-shrink-0 relative">
                      <div className="text-gold text-4xl mb-4 opacity-50">&ldquo;</div>
                      <p className="text-gray-300 italic mb-6 leading-relaxed font-light text-sm">
                         "{testimonial.text}"
                      </p>
                      <div className="flex items-center mt-auto">
                         <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full mr-3 flex items-center justify-center text-black font-bold">
                            {testimonial.name[0]}
                         </div>
                         <div>
                            <h4 className="text-white font-title text-sm">{testimonial.name}</h4>
                            <span className="text-gold-light text-xs uppercase tracking-wider">{testimonial.role}</span>
                         </div>
                      </div>
                  </div>
               ))}
            </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0">
             <div className="absolute inset-0 bg-gold-DEFAULT/90 mix-blend-multiply z-10"></div>
             {/* Using one of the carousel images as background */}
            <div className="w-full h-full bg-gray-800"></div> 
         </div>
         <div className="container mx-auto px-6 relative z-20 text-center">
            <h2 className="text-4xl md:text-6xl font-title text-gold mb-6">Let's Create Magic Together</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
               Your moments deserve to be captured with passion and perfection. Contact us today to book your dates.
            </p>
            <Link 
              to="/contact-us"
              className="inline-block px-10 py-4 bg-gold text-black font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-gold/20"
            >
               Get in Touch
            </Link>
         </div>
      </section>
    </>
  );
};

export default Home;
