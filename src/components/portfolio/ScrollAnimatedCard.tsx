import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimatedCardProps {
  children: ReactNode;
  index?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export const ScrollAnimatedCard = ({
  children,
  index = 0,
  className = "",
  direction = "up"
}: ScrollAnimatedCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getInitialX = () => {
    switch (direction) {
      case "left": return -100;
      case "right": return 100;
      default: return 0;
    }
  };

  const getInitialY = () => {
    switch (direction) {
      case "up": return 80;
      case "down": return -80;
      default: return 0;
    }
  };

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [getInitialX(), 0, 0, getInitialX() * -0.5]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [getInitialY(), 0, 0, getInitialY() * -0.5]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.85, 1, 1, 0.95]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [direction === "left" ? -15 : direction === "right" ? 15 : 0, 0, 0, direction === "left" ? 5 : direction === "right" ? -5 : 0]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [direction === "up" ? 10 : direction === "down" ? -10 : 0, 0, 0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        opacity,
        scale,
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};