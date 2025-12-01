import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm pursuing a B.S. in Electrical Engineering & Computer Science with a Minor in Finance at Washington University in St. Louis, maintaining a 4.00 GPA. As one of 15 first-year students selected for the McKelvey Engineering & Computer Science Fellowship, I'm passionate about leveraging technology to solve complex problems in AI, autonomous systems, and financial technology.
              </p>
              <p>
                With a strong foundation in both hardware and software, I've conducted research at Lockheed Martin on UAV pathfinding algorithms, developed AI-driven stock market prediction models, and built automation solutions that improved operational efficiency by 40%. My interdisciplinary approach: combining CS, EE, and Finance, allows me to tackle challenges from multiple perspectives.
              </p>
              <p>
                Beyond academics, I'm actively involved in tech education, having coached elementary students in programming and robotics. I've also presented research at MIT's Undergraduate Research Technology Conference and published findings in IEEE Proceedings.
              </p>
              <p>
                I'm currently seeking opportunities to apply my skills in machine learning, autonomous systems, and financial technology through innovative projects and cutting-edge research.
              </p>
            </div>
          </motion.div>

          {/* Headshot Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={`${import.meta.env.BASE_URL}headshot.png`}
              alt="Nick Regas"
              className="aspect-square w-full max-w-xs md:max-w-sm rounded-2xl object-cover shadow-lg border border-border/50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};