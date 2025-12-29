import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Section3DBackground } from "./Section3DBackground";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  variant?: "primary" | "accent";
  show3D?: boolean;
}

export const SectionWrapper = ({
  id,
  children,
  title,
  subtitle,
  description,
  variant = "primary",
  show3D = true,
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className="py-24 md:py-32 relative overflow-hidden">
      {/* Consistent Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      {/* 3D Background */}
      {show3D && <Section3DBackground variant={variant} density="low" />}
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
