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
            I am pursuing a B.S. in Electrical Engineering & Computer Science with a Finance minor at Washington University in St. Louis, maintaining a 4.00 GPA. Selected as one of 15 McKelvey Engineering & Computer Science Fellows, I am passionate about applying technology to solve real-world challenges in AI, autonomous systems, and financial technology.
            </p>
            <p>
            I have hands-on experience across hardware, software, and finance: conducting UAV pathfinding research at NJ's Governor School of Engineering & Technology (sponsored by Lockheed Martin), developing AI-driven stock market prediction models, and creating automation solutions that increased operational efficiency by 40%. My interdisciplinary approach equips me to tackle complex problems from multiple angles, blending CS, EE, and finance.
            </p>
            <p>
            Beyond academics, I actively mentor the next generation of tech talent, coaching elementary students in programming and robotics. I have presented research at MIT’s Undergraduate Research Technology Conference and published findings in IEEE Proceedings, demonstrating my ability to communicate technical work to diverse audiences.
            </p>
            <p>
            I am seeking opportunities to contribute to innovative projects and companies in machine learning, autonomous systems, and financial technology, bringing both technical expertise and a results-driven mindset.
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