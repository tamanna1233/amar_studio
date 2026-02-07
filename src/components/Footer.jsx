import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoInstagram } from 'react-icons/bi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="space-y-4">
                <Link to="/" className="text-2xl font-title text-gold tracking-widest uppercase">
                    Amar Studio
                </Link>
                <p className="text-sm font-light leading-relaxed">
                    Capturing moments, creating memories. The premier photography studio for weddings and special events.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-gold-light font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
                <ul className="space-y-3 text-sm font-light">
                    <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                    <li><Link to="/service" className="hover:text-gold transition-colors">Services</Link></li>
                    <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                    <li><Link to="/contact-us" className="hover:text-gold transition-colors">Contact</Link></li>
                </ul>
            </div>

            {/* Services */}
            <div>
                 <h4 className="text-gold-light font-bold uppercase tracking-wider mb-6 text-sm">Services</h4>
                 <ul className="space-y-3 text-sm font-light">
                    <li>Wedding Photography</li>
                    <li>Pre-Wedding Shoots</li>
                    <li>Cinematic Films</li>
                    <li>Drone Videography</li>
                    <li>Maternity & Baby</li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-gold-light font-bold uppercase tracking-wider mb-6 text-sm">Contact Only</h4>
                 <ul className="space-y-3 text-sm font-light">
                    <li>Sandhole, Himachal Pradesh</li>
                    <li><a href="mailto:balkar.amarstudio@gmail.com" className="hover:text-gold">balkar.amarstudio@gmail.com</a></li>
                    <li><a href="tel:+919418640694" className="hover:text-gold">+91 94186 40694</a></li>
                </ul>
                 <div className="flex space-x-4 mt-6">
                    <a href="https://www.facebook.com/balkar.chand.754" target='_blank' rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors"><BiLogoFacebook size={20}/></a>
                    <a href={`https://wa.me/919418640694`} target='_blank' rel="noreferrer" className="text-gray-400 hover:text-green-500 transition-colors"><BiLogoWhatsapp size={20}/></a>
                    <a href="https://www.instagram.com/balkarchand2022/" target='_blank' rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><BiLogoInstagram size={20}/></a>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
            <p>&copy; {currentYear} Amar Studio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with cinematic vision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
