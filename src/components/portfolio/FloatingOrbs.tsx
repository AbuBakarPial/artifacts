import { motion } from "framer-motion";

export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Orb */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-3xl"
      />
      
      {/* Accent Orb */}
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-radial from-accent/10 to-transparent blur-3xl"
      />
      
      {/* Small floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
      
      {/* 3D-like geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-20 h-20 border border-primary/20 rotate-45"
        style={{ transformStyle: "preserve-3d" }}
      />
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-16 w-16 h-16 border border-accent/20 rounded-full"
      />
      
      <motion.div
        animate={{ 
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-10 w-12 h-12"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <div className="w-full h-full border border-primary/30 transform rotate-45" />
      </motion.div>
    </div>
  );
};
