import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { ThreeBackground } from "./ThreeBackground";

const useTypingEffect = (texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

export const HeroSection = () => {
  const typedText = useTypingEffect([
    "DevSecOps Engineer",
    "Cloud Architect",
    "Security Practitioner",
    "Mobile App Developer"
  ], 100, 50, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-[1]" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-primary/30"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-accent/20"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse-glow" />
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/60 glow-primary bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <img
                  src={profilePhoto}
                  alt="Md. Abu Bakar Siddique - DevSecOps Engineer"
                  className="w-full h-full object-contain"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card px-5 py-2.5 rounded-full border border-primary/30"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">Open to opportunities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Hero Content */}
          <div className="text-center lg:text-left flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold tracking-wide mb-6 border border-primary/30 min-h-[36px]">
                <span>{typedText}</span>
                <span className="ml-0.5 w-0.5 h-5 bg-primary animate-pulse" />
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6 leading-[1.1]"
            >
              <span className="text-foreground">Md. Abu Bakar</span>
              <br />
              <span className="gradient-text">Siddique</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              Bridging <span className="text-primary font-medium">cloud infrastructure</span>,{" "}
              <span className="text-accent font-medium">mobile app development</span>, and{" "}
              <span className="text-primary font-medium">offensive security</span> to deliver 
              enterprise-grade solutions for government and private sectors.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download="Abu_Bakar_Siddique_CV.pdf"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card border border-primary/40 text-foreground font-semibold hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/15"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mt-8"
            >
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              <a
                href="https://bd.linkedin.com/in/abu-bakar-pial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/AbuBakarPial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
};
