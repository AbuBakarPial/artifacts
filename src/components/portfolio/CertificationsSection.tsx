import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Cloud, Shield, Code } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

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

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="certifications"
      title="Professional Certifications"
      subtitle="Credentials"
      description="Industry-recognized certifications from Oracle, CISCO, and EC Council"
      colorVariant={5}
    >
      <div ref={ref}>
        {/* Certification Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border/30">
            <Cloud className="text-primary" size={18} />
            <span className="text-sm font-medium text-foreground">4 Cloud Certifications</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border/30">
            <Shield className="text-primary" size={18} />
            <span className="text-sm font-medium text-foreground">5 Security Certifications</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border/30">
            <Code className="text-primary" size={18} />
            <span className="text-sm font-medium text-foreground">1 Development Certification</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              className="glass-card p-5 rounded-xl group hover:border-primary/30 transition-all duration-300 flex items-center gap-4 border border-border/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                <cert.icon className="text-primary" size={22} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold font-heading text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium border border-primary/10">
                    {cert.category}
                  </span>
                </div>
              </div>

              <BadgeCheck className="text-primary flex-shrink-0" size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
