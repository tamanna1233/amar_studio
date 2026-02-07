import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-rich">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-t-2 border-b-2 border-gold rounded-full"
        />
        
        {/* Inner Ring */}
        <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           className="absolute top-2 left-2 w-20 h-20 border-r-2 border-l-2 border-gold-dark rounded-full"
        />
        
        {/* Center Text */}
        <motion.span 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center text-gold-light text-xs tracking-widest uppercase font-bold"
        >
          Loading
        </motion.span>
      </div>
    </div>
  );
};

export default Loading;
