import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 relative overflow-hidden section-variant-${colorVariant}`}
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      
      {/* 3D Floating Elements */}
      <Floating3DElements variant={colorVariant} />
      
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4 border border-primary/20">
            {subtitle}
          </span>
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

        {children}
      </div>
    </section>
  );
};
