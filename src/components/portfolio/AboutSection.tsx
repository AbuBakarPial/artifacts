import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Shield, Smartphone, Server } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Oracle Cloud Infrastructure, Docker, CI/CD Pipelines, VMware ESXi",
  },
  {
    icon: Shield,
    title: "Security Expert",
    description: "Penetration Testing, OSINT, Vulnerability Assessment, Digital Privacy",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Flutter & Dart, Clean Architecture, State Management, Firebase",
  },
  {
    icon: Server,
    title: "System Administration",
    description: "Windows/Linux Server, Active Directory, Network Configuration",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Professional <span className="gradient-text">Summary</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-card p-8 md:p-10 rounded-2xl tech-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Versatile and highly technical IT Professional with extensive expertise spanning{" "}
              <span className="text-primary font-medium">full-stack mobile development</span>,{" "}
              <span className="text-accent font-medium">cloud infrastructure (Oracle OCI/APEX)</span>, and{" "}
              <span className="text-primary font-medium">offensive security</span>. Proven track record in designing 
              robust application architectures while simultaneously managing complex server environments. 
              Deep specialist knowledge in digital privacy, OSINT, and network vulnerability assessment.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
              Adept at bridging the gap between software engineering and system administration, offering a{" "}
              <span className="text-primary font-medium">"one-stop" solution</span> for enterprise-grade application 
              deployment, security hardening, and infrastructure troubleshooting.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
