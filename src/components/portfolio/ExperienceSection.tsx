import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Information Technology Officer",
    company: "Ministry of Home Affairs",
    location: "Dhaka, Bangladesh",
    period: "Sept 2022 – Present",
    current: true,
    responsibilities: [
      "Manage and support critical IT infrastructure in an office environment",
      "Oversee secure server deployments and system availability",
      "Lead mobile application initiatives for internal and public services",
      "Implement security controls for data privacy, access management, and verification systems",
    ],
  },
  {
    title: "XML Programmer",
    company: "Intellier Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Aug 2022 – Sept 2022",
    responsibilities: [
      "Optimized data structures and XML configurations for enterprise software solutions",
      "Collaborated with cross-functional teams to streamline data exchange protocols",
    ],
  },
  {
    title: "Quality Assurance Engineer (QA)",
    company: "Vcube Soft And Tech",
    location: "Dhaka, Bangladesh",
    period: "Jun 2022 – Jul 2022",
    responsibilities: [
      "Conducted manual and automated testing to ensure software reliability and security compliance",
      "Identified vulnerabilities and performance bottlenecks in pre-production environments",
    ],
  },
  {
    title: "Flutter Trainer",
    company: "ICT Division, Bangladesh",
    location: "Dhaka, Bangladesh",
    period: "Sept 2021 – Dec 2021",
    responsibilities: [
      "Trained aspiring developers in mobile app architecture, state management, and secure coding practices",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full border-4 border-background ${
                exp.current ? "bg-primary animate-pulse-glow" : "bg-muted-foreground"
              } left-0 md:left-1/2 transform -translate-x-1/2`} />

              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <div className="glass-card p-6 md:p-8 rounded-xl hover:border-primary/30 transition-all duration-300">
                  {exp.current && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                      Current Position
                    </span>
                  )}
                  
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
