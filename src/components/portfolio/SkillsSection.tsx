import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    color: "primary",
    skills: [
      { name: "Oracle Cloud Infrastructure (OCI)", level: 90 },
      { name: "Oracle APEX", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "VMware ESXi", level: 75 },
    ],
  },
  {
    title: "Security & Privacy",
    color: "accent",
    skills: [
      { name: "Penetration Testing", level: 85 },
      { name: "OSINT & Threat Intelligence", level: 90 },
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Digital Privacy", level: 90 },
      { name: "Security Auditing", level: 80 },
    ],
  },
  {
    title: "Software Development",
    color: "primary",
    skills: [
      { name: "Flutter & Dart", level: 95 },
      { name: "Clean Architecture (MVVM)", level: 90 },
      { name: "State Management (Riverpod/GetX)", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "RESTful API Design", level: 85 },
    ],
  },
  {
    title: "System Administration",
    color: "accent",
    skills: [
      { name: "Windows Server & AD", level: 80 },
      { name: "Linux Administration", level: 85 },
      { name: "Network Configuration", level: 80 },
      { name: "Server Hardening", level: 85 },
      { name: "DNS/DHCP", level: 75 },
    ],
  },
];

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
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-xl"
            >
              <h3 className={`text-xl font-bold font-heading mb-6 ${
                category.color === "primary" ? "text-primary" : "text-accent"
              }`}>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full ${
                          category.color === "primary"
                            ? "bg-gradient-to-r from-primary to-primary/70"
                            : "bg-gradient-to-r from-accent to-accent/70"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
