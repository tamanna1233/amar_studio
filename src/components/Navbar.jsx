import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../assets/logo/Group91.png'; // Ensure consistent casing if needed

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "GALLERY", link: "/gallery" },
    { name: "SERVICES", link: "/service" },
    { name: "CONTACT", link: "/contact-us" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black-glass backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Amar Studio" className="h-12 sm:h-16 w-auto object-contain glow-filter" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.link}
                className={`text-sm tracking-widest font-bold transition-colors duration-300 relative group ${
                  location.pathname === item.link ? 'text-gold' : 'text-gray-200 hover:text-gold-light'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  location.pathname === item.link ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
          <HiMenuAlt3 size={32} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-black-rich border-l border-gold-900 z-50 shadow-2xl flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-gold font-title text-xl">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">
                  <HiX size={28} />
                </button>
              </div>
              
              <ul className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.link}
                      className={`text-lg font-title tracking-wide block transition-colors ${
                        location.pathname === item.link ? 'text-gold' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-8 border-t border-gray-800">
                <p className="text-xs text-gray-500 text-center">
                  &copy; {new Date().getFullYear()} Amar Studio
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
