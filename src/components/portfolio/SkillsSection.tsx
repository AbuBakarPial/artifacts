import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cloud, Shield, Code, Server, Database, Terminal } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { ScrollAnimatedCard } from "./ScrollAnimatedCard";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
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
    skills: [
      "Git & GitHub",
      "Wazuh SIEM",
      "Kali Linux",
      "OpenBullet",
      "MITRE ATT&CK",
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <SectionWrapper
      id="skills"
      title="Technical Proficiencies"
      subtitle="Expertise"
      description="A comprehensive toolkit spanning cloud infrastructure, security, and full-stack development"
      colorVariant={4}
    >
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ perspective: "1000px" }}
      >
        {skillCategories.map((category, index) => (
          <ScrollAnimatedCard
            key={category.title}
            index={index}
            direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
          >
            <div className="glass-card p-6 md:p-8 rounded-xl group hover:border-primary/30 transition-all duration-300 border border-border/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all group-hover:bg-primary/20 group-hover:scale-110 duration-300 border border-primary/10">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default bg-primary/5 text-primary/80 hover:bg-primary/15 hover:text-primary border border-primary/10 hover:border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
