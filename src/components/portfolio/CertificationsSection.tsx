import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 DevOps Professional",
    issuer: "Oracle",
    category: "Cloud",
  },
  {
    title: "Oracle APEX Cloud Certified Developer Professional",
    issuer: "Oracle",
    category: "Cloud",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    category: "Cloud",
  },
  {
    title: "Ethical Hacker",
    issuer: "CISCO",
    category: "Security",
  },
  {
    title: "Junior Cybersecurity Analyst",
    issuer: "CISCO",
    category: "Security",
  },
  {
    title: "Learn-A-Thon",
    issuer: "CISCO",
    category: "Development",
  },
  {
    title: "Network Defense Essentials",
    issuer: "EC Council",
    category: "Security",
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC Council",
    category: "Security",
  },
  {
    title: "Make In-House Hacking and Pen Testing Lab",
    issuer: "EC Council",
    category: "Security",
  },
  {
    title: "Google Cloud Community Days India",
    issuer: "GDG Cloud India",
    category: "Cloud",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cloud":
        return "bg-primary/20 text-primary";
      case "Security":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                  <h3 className="text-base font-semibold font-heading text-foreground leading-tight">
                    {cert.title}
                  </h3>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {cert.issuer}
                </span>
                <CheckCircle className="text-primary" size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
