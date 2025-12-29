import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2021",
    gpa: "3.33",
  },
  {
    degree: "Higher School Certificate",
    institution: "Chuadanga Govt. College, Chuadanga",
    year: "2016",
    gpa: "4.33",
  },
  {
    degree: "Secondary School Certificate",
    institution: "V.J. Govt. High School, Chuadanga",
    year: "2014",
    gpa: "4.94",
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="glass-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="text-sm text-muted-foreground">
                    Passing Year: {edu.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
