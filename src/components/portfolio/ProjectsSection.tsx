import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Shield, MapPin, FileText, Server } from "lucide-react";

const projects = [
  {
    title: "Sharodio Shurokkha App",
    icon: Shield,
    category: "Government Security",
    description: "Multi-tier incident response ecosystem for real-time election security monitoring and rapid mobilization.",
    highlights: [
      "Role-based hierarchical Observer Modules with live geospatial heatmaps",
      "GPS-based Click-to-Call responder directories",
      "Real-time field navigation for command coordination",
    ],
    tech: ["Flutter", "Firebase", "Google Maps API", "Real-time Database"],
    featured: true,
  },
  {
    title: "Location Finder",
    icon: MapPin,
    category: "Utility Application",
    description: "Integrated BTS tower data visualization on Google Maps with advanced architecture patterns.",
    highlights: [
      "MVVM structure with Riverpod architecture",
      "Device IMEI binding and location tracking",
      "Cross-platform deployment (Google Play & Apple Store)",
    ],
    tech: ["Flutter", "Riverpod", "Google Maps", "REST API"],
  },
  {
    title: "Marriage & Divorce Registration System",
    icon: FileText,
    category: "Government Digital Service",
    description: "Secure digital registry with national ID verification and OTP integration.",
    highlights: [
      "NID (National ID) verification integration",
      "Backend logic for certificate generation",
      "Compliance with data privacy regulations",
    ],
    tech: ["Flutter", "Oracle APEX", "PostgreSQL", "Security APIs"],
  },
  {
    title: "Enterprise Attack Detection Lab",
    icon: Server,
    category: "Cybersecurity Research",
    description: "Multi-VM enterprise security lab simulating corporate network for security research and training.",
    highlights: [
      "Active Directory attack scenario simulations",
      "SSH honeypot (Cowrie) implementation",
      "Wazuh SIEM integration with custom detection rules",
      "MITRE ATT&CK framework mapping",
    ],
    tech: ["Wazuh SIEM", "Active Directory", "Cowrie Honeypot", "Kali Linux", "VMware"],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade solutions serving government institutions and millions of users
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
