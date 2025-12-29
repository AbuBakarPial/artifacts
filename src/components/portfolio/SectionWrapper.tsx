import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Floating3DElements } from "./Floating3DElements";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  colorVariant?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const SectionWrapper = ({
  id,
  children,
  title,
  subtitle,
  description,
  colorVariant = 1,
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-24 md:py-32 relative overflow-hidden section-variant-${colorVariant}`}
      style={{ perspective: "1000px" }}
    >
      {/* Grid Pattern */}
      <motion.div 
        className="absolute inset-0 grid-pattern opacity-[0.02]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      />
      
      {/* 3D Floating Elements */}
      <Floating3DElements variant={colorVariant} />
      
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          style={{ opacity, scale, rotateX, y }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4 border border-primary/20"
          >
            {subtitle}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            {title.split(" ").map((word, i, arr) => 
              i === arr.length - 1 ? (
                <span key={i} className="gradient-text">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]) }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
};
