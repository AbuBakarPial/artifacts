import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Shield, Code, Server, Database, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "primary",
    skills: [
      "Oracle Cloud Infrastructure (OCI)",
      "Oracle APEX",
      "Docker",
      "CI/CD Pipelines",
      "VMware ESXi",
      "VirtualBox",
      "Cloud Deployment",
    ],
  },
  {
    title: "Security & Privacy",
    icon: Shield,
    color: "accent",
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "OSINT & Threat Intelligence",
      "Digital Privacy & Data Protection",
      "Security Auditing",
      "Secure Application Design",
    ],
  },
  {
    title: "Software Development",
    icon: Code,
    color: "primary",
    skills: [
      "Flutter & Dart",
      "Clean Architecture (MVVM)",
      "Riverpod",
      "GetX",
      "Provider",
      "RESTful API Design",
      "Firebase (Auth, Firestore, FCM)",
    ],
  },
  {
    title: "System Administration",
    icon: Server,
    color: "accent",
    skills: [
      "Windows Server",
      "Active Directory",
      "Linux (Debian, Fedora, Arch)",
      "Server Hardening",
      "Network Troubleshooting",
      "DNS/DHCP Configuration",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "primary",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Firebase Firestore",
      "SQL Optimization",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    color: "accent",
    skills: [
      "Git & GitHub",
      "Wazuh SIEM",
      "Kali Linux",
      "OpenBullet",
      "MITRE ATT&CK",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Technical <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning cloud infrastructure, security, and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 md:p-8 rounded-xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  category.color === "primary" 
                    ? "bg-primary/10 group-hover:bg-primary/20" 
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}>
                  <category.icon 
                    className={category.color === "primary" ? "text-primary" : "text-accent"} 
                    size={24} 
                  />
                </div>
                <h3 className={`text-xl font-bold font-heading ${
                  category.color === "primary" ? "text-primary" : "text-accent"
                }`}>
                  {category.title}
                </h3>
              </div>
              
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    transition={{ delay: index * 0.05 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary/90 hover:bg-primary/20 hover:text-primary"
                        : "bg-accent/10 text-accent/90 hover:bg-accent/20 hover:text-accent"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
