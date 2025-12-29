import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="Get in Touch"
      description="Ready to discuss your next project or explore collaboration opportunities? I'm always open to meaningful conversations."
      colorVariant={1}
    >
      <div ref={ref} className="max-w-2xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="glass-card p-8 rounded-2xl border border-border/30">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <a
                href="mailto:sidd.abakar@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300 border border-primary/10">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    sidd.abakar@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+8801775811122"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300 border border-primary/10">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    +880 1775 811122
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4 text-center">Connect on social</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://bd.linkedin.com/in/abu-bakar-pial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300 border border-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/AbuBakarPial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300 border border-primary/10"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
