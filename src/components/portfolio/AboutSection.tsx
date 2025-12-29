import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Shield, Smartphone, Server } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Oracle OCI, APEX, Docker, CI/CD, and enterprise cloud deployments",
  },
  {
    icon: Shield,
    title: "Offensive Security",
    description: "Penetration testing, OSINT, vulnerability assessment, and threat intelligence",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Flutter, Dart, clean architecture, and cross-platform applications",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Windows/Linux servers, Active Directory, and network administration",
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Certifications" },
  { value: "4+", label: "Major Projects" },
  { value: "Gov", label: "Sector Focus" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="about"
      title="Professional Profile"
      subtitle="Overview"
      show3D={true}
    >
      <div ref={ref}>
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-xl text-center border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-card p-8 md:p-10 rounded-2xl border border-border/30">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Versatile and highly technical IT Professional with extensive expertise spanning{" "}
              <span className="text-primary font-medium">full-stack mobile development</span>,{" "}
              <span className="text-accent font-medium">cloud infrastructure (Oracle OCI/APEX)</span>, and{" "}
              <span className="text-primary font-medium">offensive security</span>. Proven track record 
              in designing robust application architectures while simultaneously managing complex 
              server environments.
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-accent my-6" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Currently serving as <span className="text-foreground font-medium">IT Officer at Ministry of Home Affairs</span>, 
              delivering enterprise-grade solutions for government digital transformation initiatives, 
              security hardening, and infrastructure optimization.
            </p>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 rounded-xl group hover:border-primary/40 transition-all duration-300 border border-border/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
