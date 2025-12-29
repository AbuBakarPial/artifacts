import { motion } from "framer-motion";

interface Props {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Floating3DElements = ({ variant = 1 }: Props) => {
  const colors = {
    1: { primary: "#00d4ff", accent: "#ffc107" },
    2: { primary: "#00d4ff", accent: "#00ff88" },
    3: { primary: "#00d4ff", accent: "#ff6b6b" },
    4: { primary: "#ffc107", accent: "#00d4ff" },
    5: { primary: "#00ff88", accent: "#00d4ff" },
    6: { primary: "#00d4ff", accent: "#a855f7" },
  };

  const color = colors[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orb 1 */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${color.primary} 0%, transparent 70%)`,
          top: "10%",
          right: "10%",
        }}
      />

      {/* Floating Orb 2 */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-48 h-48 rounded-full blur-3xl opacity-15"
        style={{
          background: `radial-gradient(circle, ${color.accent} 0%, transparent 70%)`,
          bottom: "20%",
          left: "5%",
        }}
      />

      {/* Geometric Shape 1 - Rotating Square */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-20 h-20 border opacity-20"
        style={{
          borderColor: color.primary,
          top: "20%",
          right: "15%",
          transform: "rotate(45deg)",
        }}
      />

      {/* Geometric Shape 2 - Rotating Circle */}
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-16 h-16 rounded-full border opacity-15"
        style={{
          borderColor: color.accent,
          bottom: "30%",
          left: "10%",
        }}
      />

      {/* Geometric Shape 3 - Diamond */}
      <motion.div
        animate={{ 
          rotate: [0, 180, 360],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-12 h-12 border opacity-20"
        style={{
          borderColor: color.primary,
          top: "60%",
          right: "20%",
          transform: "rotate(45deg)",
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? color.primary : color.accent,
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}

      {/* Glowing Lines */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scaleX: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute h-px w-32"
        style={{
          background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)`,
          top: "40%",
          left: "20%",
        }}
      />

      <motion.div
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
          scaleX: [1, 0.8, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute h-px w-24"
        style={{
          background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)`,
          bottom: "35%",
          right: "25%",
        }}
      />
    </div>
  );
};
