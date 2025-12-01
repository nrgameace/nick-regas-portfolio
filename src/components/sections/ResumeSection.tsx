import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <FileText className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download my complete resume to learn more about my experience, skills, and education.
          </p>
          
          <Button size="lg" className="group">
            <a href="/resume.pdf" download className="flex items-center">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            PDF format • Last updated: December 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
};
