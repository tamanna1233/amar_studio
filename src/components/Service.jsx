import { motion } from 'framer-motion';
import SEO from './SEO';
import image1 from '../assets/ServiceImg/img23.jpg';
import image2 from '../assets/ServiceImg/image 3.webp';
import image3 from '../assets/ServiceImg/image 4.webp';
import image4 from '../assets/ServiceImg/image 5.webp';
import image5 from '../assets/ServiceImg/image 6.webp';
import image6 from '../assets/ServiceImg/image 7.webp';

const services = [
  { title: "Wedding Photography", image: image1, description: "Capturing the magic of your special day with cinematic flair." },
  { title: "Pre-wedding Shoots", image: image2, description: "Tell your love story before the big day in scenic locations." },
  { title: "Maternity Sessions", image: image3, description: "Celebrate the beauty of motherhood with elegant portraits." },
  { title: "Newborn Photography", image: image4, description: "Preserve the precious first moments of your little one." },
  { title: "Drone Videography", image: image5, description: "Breathtaking aerial views to add a grandeur perspective." },
  { title: "Cinematic Films", image: image6, description: "High-quality video production that feels like a movie." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Service = () => {
  return (
    <>
      <SEO 
        title="Services" 
        description="Our premium photography services: Wedding, Pre-wedding, Maternity, Newborn, and Drone Videography."
      />
      
      <section className="bg-black-rich min-h-screen py-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-title text-gold mb-4">Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              We offer a comprehensive range of photography and videography services tailored to your needs.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-black-soft shadow-lg border border-gray-800 hover:border-gold-dark transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden h-64">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-title text-gold-light mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Service;
