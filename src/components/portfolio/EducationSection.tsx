import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { ScrollAnimatedCard } from "./ScrollAnimatedCard";

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

  return (
    <SectionWrapper
      id="education"
      title="Academic Background"
      subtitle="Education"
      colorVariant={6}
    >
      <div ref={ref} className="max-w-3xl mx-auto" style={{ perspective: "1000px" }}>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <ScrollAnimatedCard
              key={edu.degree}
              index={index}
              direction="left"
            >
              <div className="glass-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-primary/30 transition-all duration-300 border border-border/30">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300 border border-primary/10">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-1 group-hover:text-primary transition-colors">
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
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            </ScrollAnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
