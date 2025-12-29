import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, MapPin, FileText, Server, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const projects = [
  {
    title: "Sharodio Shurokkha App",
    icon: Shield,
    category: "Government Security",
    description: "Multi-tier incident response ecosystem for real-time election security monitoring and rapid mobilization across Bangladesh.",
    highlights: [
      "Role-based hierarchical Observer Modules with live geospatial heatmaps",
      "GPS-based Click-to-Call responder directories",
      "Real-time field navigation for command coordination",
    ],
    tech: ["Flutter", "Firebase", "Google Maps API", "Real-time Database"],
    featured: true,
    impact: "National Scale",
  },
  {
    title: "Location Finder",
    icon: MapPin,
    category: "Utility Application",
    description: "Advanced BTS tower data visualization system with enterprise-grade architecture patterns.",
    highlights: [
      "MVVM structure with Riverpod architecture",
      "Device IMEI binding and location tracking",
      "Cross-platform deployment (Google Play & Apple Store)",
    ],
    tech: ["Flutter", "Riverpod", "Google Maps", "REST API"],
    impact: "Production App",
  },
  {
    title: "Marriage & Divorce Registration",
    icon: FileText,
    category: "Government Digital Service",
    description: "Secure digital registry system with national ID verification and regulatory compliance.",
    highlights: [
      "NID (National ID) verification integration",
      "Automated certificate generation",
      "Data privacy regulation compliance",
    ],
    tech: ["Flutter", "Oracle APEX", "PostgreSQL", "Security APIs"],
    impact: "Citizens Portal",
  },
  {
    title: "Enterprise Attack Detection Lab",
    icon: Server,
    category: "Cybersecurity Research",
    description: "Comprehensive security lab simulating corporate network environments for threat detection research.",
    highlights: [
      "Active Directory attack scenario simulations",
      "SSH honeypot (Cowrie) implementation",
      "Wazuh SIEM with custom detection rules",
      "MITRE ATT&CK framework mapping",
    ],
    tech: ["Wazuh SIEM", "Active Directory", "Cowrie", "Kali Linux", "VMware"],
    impact: "Research Lab",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Portfolio"
      description="Enterprise solutions serving government institutions and impacting millions of citizens"
      colorVariant={3}
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 70, scale: 0.92 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`glass-card rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500 border border-border/30 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 border border-primary/10">
                    <project.icon className="text-primary" size={26} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <span className="hidden md:inline-flex px-3 py-1.5 rounded-lg glass-card text-xs font-medium text-muted-foreground border border-border/30">
                  {project.impact}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ArrowUpRight className="text-primary mt-0.5 flex-shrink-0" size={14} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
};
