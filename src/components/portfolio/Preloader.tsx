import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const glowVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1.5, 1],
      opacity: [0, 0.8, 0.4],
      transition: {
        delay: 0.8,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
          variants={containerVariants}
          exit="exit"
        >
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
              }}
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.6, 0.3],
                transition: { delay: 1, duration: 0.8 },
              }}
            />
          </div>

          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/60"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.cos((i / 20) * Math.PI * 2) * 200,
                y: Math.sin((i / 20) * Math.PI * 2) * 200,
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: 1.2,
                duration: 1.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Main initials */}
          <div className="relative flex items-center gap-2">
            {["A", "B", "S"].map((letter, i) => (
              <motion.span
                key={letter}
                className="text-7xl md:text-9xl font-bold text-primary"
                style={{
                  textShadow: "0 0 60px hsl(var(--primary) / 0.8), 0 0 120px hsl(var(--primary) / 0.4)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
              >
                {letter}
              </motion.span>
            ))}

            {/* Underline animation */}
            <motion.div
              className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: 0.9,
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="absolute bottom-20 text-muted-foreground text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Loading Experience
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 w-48 h-0.5 bg-border/30 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
