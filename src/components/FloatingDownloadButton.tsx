import { motion } from "framer-motion";
import { Download } from "lucide-react";

const APK_DOWNLOAD_URL = "https://drive.google.com/file/d/1A4iAJWcImRPB1F6wHFQP1yR2cyY3vMk5/view?usp=sharing";

const FloatingDownloadButton = () => {
  return (
    <motion.a
      href={APK_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-40 group"
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-[hsl(320_85%_60%)] opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300 -z-10" />
      
      {/* Main button */}
      <div className="relative px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-primary via-accent to-[hsl(320_85%_60%)] text-primary-foreground font-bold flex items-center gap-2.5 sm:gap-3 shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 overflow-hidden">
        {/* Animated background shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Content */}
        <div className="relative flex items-center gap-2.5 sm:gap-3">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Download size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
          <span className="text-sm sm:text-base font-bold whitespace-nowrap">Download App</span>
        </div>
      </div>

      {/* Pulse ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
};

export default FloatingDownloadButton;
