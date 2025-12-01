import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// PLACEHOLDER EXPERIENCES - Replace with your actual experiences
const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Company",
    period: "Summer 2024",
    description: "Developed full-stack features for core product, working with React, Node.js, and PostgreSQL. Improved system performance by 30% through optimization.",
    achievements: [
      "Built scalable microservices architecture",
      "Implemented CI/CD pipeline",
      "Mentored junior developers",
    ],
  },
  {
    title: "Research Assistant",
    company: "WashU AI Lab",
    period: "2023 - Present",
    description: "Conducting research in machine learning and computer vision, focusing on autonomous systems and real-time object detection.",
    achievements: [
      "Published paper on neural network optimization",
      "Developed novel algorithm for image processing",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    title: "Head Drum Major",
    company: "University Marching Band",
    period: "2022 - 2024",
    description: "Led a team of 200+ members, managing operations, coordinating rehearsals, and developing leadership skills.",
    achievements: [
      "Coordinated 50+ performances and events",
      "Improved team efficiency by 40%",
      "Mentored section leaders",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover border-border/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="mr-2 text-accent">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
