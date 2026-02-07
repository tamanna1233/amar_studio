import { motion } from 'framer-motion';
import SEO from './SEO';
import profileImg from '../assets/logo/balkar ji.webp';
import droneImg from '../assets/logo/drone.png';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Amar Studio and our passion for capturing life's most precious moments."
      />

      <section className="bg-black-rich text-gray-200 min-h-screen py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-title text-gold mb-6">About The Studio</h1>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          {/* Founder Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/30 rounded-lg transform rotate-3" />
              <img 
                src={profileImg} 
                alt="Balkar Chand - Founder" 
                className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-title text-white">Capturing Essence, Preserving Memories</h2>
              <p className="font-light leading-relaxed text-lg text-gray-300">
                At <span className="text-gold font-semibold">Amar Studio</span>, we believe that every photograph is a time capsule. 
                Founded by Balkar Chand, our studio has been a beacon of artistic excellence in Himachal Pradesh for years.
              </p>
              <p className="font-light leading-relaxed text-lg text-gray-300">
                We are not just photographers; we are storytellers. We understand the fleeting nature of special moments 
                and dedicate ourselves to freezing them in time with technical precision and artistic vision.
              </p>
            </motion.div>
          </div>

          {/* Technology Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="order-2 md:order-1 space-y-6"
            >
              <h2 className="text-3xl font-title text-white">Beyond Traditional Photography</h2>
              <p className="font-light leading-relaxed text-lg text-gray-300">
                Embracing modern technology, we offer advanced drone cinematography that provides a unique, birds-eye perspective of your events.
                Our equipment is state-of-the-art, ensuring that every pixel is crisp and every color is true to life.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gold-light/80 font-light">
                <li>Professional Drone Services</li>
                <li>4K Cinematic Videography</li>
                <li>High-Resolution Candid Photography</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 flex justify-center"
            >
               <img 
                src={droneImg} 
                alt="Drone Technology" 
                className="w-full max-w-sm drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] animate-pulse-slow"
              />
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
