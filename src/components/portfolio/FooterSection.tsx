import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30 relative bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>© {currentYear} Md. Abu Bakar Siddique. All rights reserved.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-muted-foreground text-sm"
          >
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in Dhaka, Bangladesh</span>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="text-sm text-primary hover:text-primary/80 transition-colors font-heading font-bold"
          >
            ABS
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
