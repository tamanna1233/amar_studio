import { motion } from 'framer-motion';
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoInstagram, BiMap, BiPhone, BiEnvelope } from 'react-icons/bi';
import SEO from './SEO';

const ContactUs = () => {
    // Schema for LocalBusiness is handled via SEO component
    
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Amar Studio for bookings and inquiries."
      />

      <section className="bg-black-rich min-h-screen py-24 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl">
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            >
            <h1 className="text-4xl md:text-6xl font-title text-gold mb-4">Get In Touch</h1>
            <p className="text-gray-400 font-light">We&apos;d love to hear from you. Let&apos;s create something beautiful together.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black-soft p-8 rounded-2xl shadow-xl border border-gray-800"
            >
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="1065f29e-0575-4e35-90e0-55fcf68b5661" />
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <label className="text-sm font-bold text-gold-light uppercase tracking-wider">Name</label>
                    <input type="text" name="name" required placeholder="John Doe" 
                        className="w-full bg-black-rich border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                    <label className="text-sm font-bold text-gold-light uppercase tracking-wider">Phone</label>
                    <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" 
                        className="w-full bg-black-rich border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gold-light uppercase tracking-wider">Email</label>
                    <input type="email" name="email" required placeholder="john@example.com" 
                    className="w-full bg-black-rich border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gold-light uppercase tracking-wider">Service Needed</label>
                    <select name="service" required 
                    className="w-full bg-black-rich border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select a Service</option>
                        <option value="Wedding">Wedding Photography</option>
                        <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                        <option value="Maternity">Maternity Shoot</option>
                        <option value="Baby">Baby Photography</option>
                        <option value="Drone">Drone Videography</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gold-light uppercase tracking-wider">Event Date</label>
                    <input type="date" name="date" required 
                    className="w-full bg-black-rich border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gold-light uppercase tracking-wider">Location</label>
                    <input type="text" name="location" placeholder="City, Venue..." required
                    className="w-full bg-black-rich border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>

                <button type="submit" 
                    className="w-full bg-gold text-black font-bold py-4 rounded-lg hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-gold/20 uppercase tracking-widest text-sm">
                    Send Inquiry
                </button>
                </form>
            </motion.div>

            {/* Info Section */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-12"
            >
                {/* Address Card */}
                <div className="bg-black-soft/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
                   <div className="flex items-start space-x-4">
                        <div className="bg-gold/10 p-3 rounded-full text-gold">
                            <BiMap size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-title text-white mb-2">Visit Us</h3>
                            <p className="text-gray-400 font-light">
                                Jeet Photostate & Studio<br />
                                Sandhole Main Bazaar, Near Saklani Clinic<br />
                                Distt. Mandi, Himachal Pradesh - 176090
                            </p>
                        </div>
                   </div>
                </div>

                {/* Contact Card */}
                <div className="bg-black-soft/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
                   <div className="flex items-start space-x-4">
                        <div className="bg-gold/10 p-3 rounded-full text-gold">
                            <BiPhone size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-title text-white mb-2">Call Us</h3>
                            <div className="flex flex-col space-y-2">
                                <a href="tel:+919418640694" className="text-gray-400 hover:text-gold-light transition-colors">+91 94186 40694 (Balkar Chand)</a>
                                <a href="tel:+918437765469" className="text-gray-400 hover:text-gold-light transition-colors">+91 84377 65469 (Dikshant)</a>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Social Card */}
                <div className="bg-black-soft/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
                   <div className="flex items-start space-x-4">
                        <div className="bg-gold/10 p-3 rounded-full text-gold">
                             <BiEnvelope size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-title text-white mb-4">Connect With Us</h3>
                            <div className="flex space-x-6">
                                <a href="https://www.facebook.com/balkar.chand.754" target='_blank' rel="noreferrer" 
                                    className="p-3 bg-blue-600/20 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                                    <BiLogoFacebook size={28}/> 
                                </a>
                                <a href={`https://wa.me/919418640694?text=Hi there! I am interested in your photography services.`} target='_blank' rel="noreferrer"
                                    className="p-3 bg-green-600/20 text-green-500 rounded-full hover:bg-green-600 hover:text-white transition-all transform hover:scale-110">
                                    <BiLogoWhatsapp size={28}/>
                                </a>
                                <a href="https://www.instagram.com/balkarchand2022/" target='_blank' rel="noreferrer"
                                    className="p-3 bg-pink-600/20 text-pink-500 rounded-full hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110">
                                    <BiLogoInstagram size={28}/>
                                </a>
                            </div>
                        </div>
                   </div>
                </div>

            </motion.div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
