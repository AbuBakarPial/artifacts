import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BadgeCheck, Cloud, Shield, Code } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 DevOps Professional",
    issuer: "Oracle",
    category: "Cloud",
    icon: Cloud,
  },
  {
    title: "Oracle APEX Cloud Certified Developer Professional",
    issuer: "Oracle",
    category: "Cloud",
    icon: Cloud,
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle",
    category: "Cloud",
    icon: Cloud,
  },
  {
    title: "Ethical Hacker",
    issuer: "CISCO",
    category: "Security",
    icon: Shield,
  },
  {
    title: "Junior Cybersecurity Analyst",
    issuer: "CISCO",
    category: "Security",
    icon: Shield,
  },
  {
    title: "Network Defense Essentials",
    issuer: "EC Council",
    category: "Security",
    icon: Shield,
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC Council",
    category: "Security",
    icon: Shield,
  },
  {
    title: "Make In-House Hacking and Pen Testing Lab",
    issuer: "EC Council",
    category: "Security",
    icon: Shield,
  },
  {
    title: "Learn-A-Thon",
    issuer: "CISCO",
    category: "Development",
    icon: Code,
  },
  {
    title: "Google Cloud Community Days India",
    issuer: "GDG Cloud India",
    category: "Cloud",
    icon: Cloud,
  },
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "Cloud":
      return {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
      };
    case "Security":
      return {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
      };
    default:
      return {
        bg: "bg-muted",
        text: "text-muted-foreground",
        border: "border-muted",
      };
  }
};

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications from Oracle, CISCO, and EC Council
          </p>
        </motion.div>

        {/* Certification Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Cloud className="text-primary" size={18} />
            <span className="text-sm font-medium text-foreground">4 Cloud Certifications</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Shield className="text-accent" size={18} />
            <span className="text-sm font-medium text-foreground">5 Security Certifications</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Code className="text-muted-foreground" size={18} />
            <span className="text-sm font-medium text-foreground">1 Development Certification</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => {
            const styles = getCategoryStyles(cert.category);
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                className="glass-card p-5 rounded-xl group hover:border-primary/30 transition-all duration-300 flex items-center gap-4 border border-border/50"
              >
                <div className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={styles.text} size={22} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold font-heading text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${styles.bg} ${styles.text} font-medium`}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                <BadgeCheck className="text-primary flex-shrink-0" size={20} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
