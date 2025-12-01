import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science and Electrical Engineering student at Washington University in St. Louis, passionate about leveraging technology to solve complex problems in AI, autonomous systems, and cybersecurity.
              </p>
              <p>
                With a strong foundation in both hardware and software, I enjoy building systems that bridge the gap between theoretical concepts and real-world applications. My interdisciplinary approach allows me to tackle challenges from multiple perspectives.
              </p>
              <p>
                Beyond academics, I've served as Head Drum Major, leading a team and developing strong communication and organizational skills. I'm also actively involved in tech outreach and the Armenian community, believing in the power of technology to create positive change.
              </p>
              <p>
                I'm currently seeking opportunities to apply my skills in innovative projects and contribute to cutting-edge research in machine learning, autonomous systems, and financial technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Photo placeholder - Replace with your actual photo */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border/50">
              <p className="text-muted-foreground text-center px-8">
                Your professional photo here
                <br />
                <span className="text-sm">(Replace this placeholder)</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
