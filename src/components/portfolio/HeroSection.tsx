import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { FloatingOrbs } from "./FloatingOrbs";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating 3D Elements */}
      <FloatingOrbs />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-glow" />
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow" />
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 glow-primary">
                <img
                  src={profilePhoto}
                  alt="Md. Abu Bakar Siddique"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for hire</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Hero Content */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-6">
                DevSecOps Engineer
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6 leading-tight"
            >
              <span className="text-foreground">Md. Abu Bakar</span>
              <br />
              <span className="gradient-text">Siddique</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              Versatile IT Professional bridging{" "}
              <span className="text-primary">cloud infrastructure</span>,{" "}
              <span className="text-accent">mobile development</span>, and{" "}
              <span className="text-primary">offensive security</span> — delivering enterprise-grade solutions.
            </motion.p>
            
            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="mailto:sidd.abakar@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="tel:+8801775811122"
                className="flex items-center gap-2 px-5 py-3 rounded-lg glass-card border border-border hover:border-primary/50 transition-all hover:scale-105"
              >
                <Phone size={18} />
                <span className="text-foreground">+880 1775 811122</span>
              </a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href="https://bd.linkedin.com/in/abu-bakar-pial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card border border-border hover:border-primary/50 hover:text-primary transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/AbuBakarPial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card border border-border hover:border-primary/50 hover:text-primary transition-all hover:scale-110"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
