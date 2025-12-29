import { motion } from "framer-motion";

interface Props {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Floating3DElements = ({ variant = 1 }: Props) => {
  const colors = {
    1: { primary: "#00d4ff", accent: "#ffc107", glow: "rgba(0, 212, 255, 0.4)" },
    2: { primary: "#00ff88", accent: "#00d4ff", glow: "rgba(0, 255, 136, 0.4)" },
    3: { primary: "#ff6b6b", accent: "#ffc107", glow: "rgba(255, 107, 107, 0.4)" },
    4: { primary: "#a855f7", accent: "#00d4ff", glow: "rgba(168, 85, 247, 0.4)" },
    5: { primary: "#ffc107", accent: "#ff6b6b", glow: "rgba(255, 193, 7, 0.4)" },
    6: { primary: "#00d4ff", accent: "#a855f7", glow: "rgba(0, 212, 255, 0.4)" },
  };

  const color = colors[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Primary Orb */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background: `radial-gradient(circle, ${color.primary}40 0%, ${color.primary}20 30%, transparent 70%)`,
          boxShadow: `0 0 120px 60px ${color.glow}`,
          top: "5%",
          right: "5%",
          filter: "blur(40px)",
        }}
      />

      {/* Large Accent Orb */}
      <motion.div
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${color.accent}35 0%, ${color.accent}15 30%, transparent 70%)`,
          boxShadow: `0 0 100px 50px ${color.accent}30`,
          bottom: "10%",
          left: "-5%",
          filter: "blur(30px)",
        }}
      />

      {/* Medium Orb */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full"
        style={{
          width: "250px",
          height: "250px",
          background: `radial-gradient(circle, ${color.primary}30 0%, transparent 70%)`,
          boxShadow: `0 0 80px 40px ${color.primary}20`,
          top: "50%",
          left: "60%",
          filter: "blur(25px)",
        }}
      />

      {/* Rotating Square */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{
          width: "120px",
          height: "120px",
          border: `2px solid ${color.primary}50`,
          boxShadow: `0 0 20px ${color.primary}30, inset 0 0 20px ${color.primary}10`,
          top: "15%",
          right: "20%",
          transform: "rotate(45deg)",
        }}
      />

      {/* Rotating Circle */}
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          width: "80px",
          height: "80px",
          border: `2px solid ${color.accent}60`,
          boxShadow: `0 0 30px ${color.accent}40`,
          bottom: "25%",
          left: "15%",
        }}
      />

      {/* Floating Diamond */}
      <motion.div
        animate={{ 
          rotate: [0, 180, 360],
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          width: "60px",
          height: "60px",
          border: `2px solid ${color.primary}70`,
          boxShadow: `0 0 25px ${color.primary}50`,
          top: "60%",
          right: "25%",
          transform: "rotate(45deg)",
        }}
      />

      {/* Small Diamond */}
      <motion.div
        animate={{ 
          rotate: [45, 225, 405],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          width: "40px",
          height: "40px",
          border: `2px solid ${color.accent}60`,
          boxShadow: `0 0 20px ${color.accent}40`,
          top: "30%",
          left: "10%",
        }}
      />

      {/* Floating Particles - Larger and brighter */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? "6px" : "4px",
            height: i % 3 === 0 ? "6px" : "4px",
            backgroundColor: i % 2 === 0 ? color.primary : color.accent,
            boxShadow: `0 0 15px 5px ${i % 2 === 0 ? color.primary : color.accent}`,
            left: `${8 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
        />
      ))}

      {/* Glowing Lines */}
      <motion.div
        animate={{ 
          opacity: [0.2, 0.6, 0.2],
          scaleX: [1, 1.5, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute"
        style={{
          height: "2px",
          width: "200px",
          background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)`,
          boxShadow: `0 0 20px ${color.primary}`,
          top: "35%",
          left: "15%",
        }}
      />

      <motion.div
        animate={{ 
          opacity: [0.15, 0.5, 0.15],
          scaleX: [1, 0.7, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
        className="absolute"
        style={{
          height: "2px",
          width: "150px",
          background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)`,
          boxShadow: `0 0 15px ${color.accent}`,
          bottom: "40%",
          right: "20%",
        }}
      />

      {/* Corner Accent Triangles */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute"
        style={{
          width: 0,
          height: 0,
          borderLeft: "60px solid transparent",
          borderRight: "60px solid transparent",
          borderBottom: `100px solid ${color.primary}15`,
          filter: `drop-shadow(0 0 20px ${color.primary}40)`,
          top: "10%",
          left: "5%",
        }}
      />
    </div>
  );
};
