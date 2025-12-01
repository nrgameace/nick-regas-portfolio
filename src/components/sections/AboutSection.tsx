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
                I'm pursuing a B.S. in Electrical Engineering & Computer Science with a Minor in Finance at Washington University in St. Louis, maintaining a 4.00 GPA. As one of 10 first-year students selected for the McKelvey Engineering/Computer Science Fellowship, I'm passionate about leveraging technology to solve complex problems in AI, autonomous systems, and financial technology.
              </p>
              <p>
                With a strong foundation in both hardware and software, I've conducted research at Lockheed Martin on UAV pathfinding algorithms, developed AI-driven stock market prediction models, and built automation solutions that improved operational efficiency by 40%. My interdisciplinary approach—combining CS, EE, and Finance—allows me to tackle challenges from multiple perspectives.
              </p>
              <p>
                Beyond academics, I'm actively involved in tech education, having coached elementary students in programming and robotics. I've also presented research at MIT's Undergraduate Research Technology Conference and published findings in IEEE Proceedings.
              </p>
              <p>
                I'm currently seeking opportunities to apply my skills in machine learning, autonomous systems, and financial technology through innovative projects and cutting-edge research.
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
