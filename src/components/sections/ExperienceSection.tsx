import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "IT Specialist & Consultant",
    company: "Patel Law Offices",
    period: "November 2024 - Present",
    description: "Manage and maintain 10+ WordPress websites on IONOS hosting, ensuring optimal performance, security, and runtime. Develop automation workflows and optimize IT infrastructure for a legal practice.",
    achievements: [
      "Developed 20+ Zapier automation workflows linking Gmail, Mailchimp, Google Contacts, and LexHelper, improving efficiency by 40%",
      "Refurbished and redeployed 5 outdated computers and servers, saving over $1,000 in hardware costs",
      "Enabled 5+ legacy and x86-only applications on ARM-based laptops through emulation solutions",
    ],
  },
  {
    title: "Research Scholar",
    company: "The Governor's School of New Jersey Program in Engineering & Technology",
    period: "Summer 2024",
    description: "Conducted advanced research on pathfinding algorithms for unmanned aerial vehicles in collaboration with Lockheed Martin. Competitively selected as one of 60 scholars from New Jersey for this rigorous, month-long program.",
    achievements: [
      "Developed and tested A* & RRT* pathfinding algorithms for UAVs, identifying the most efficient navigation strategies",
      "Selected to present research at MIT's Undergraduate Research Technology Conference",
      "Published paper in IEEE Proceedings",
      "Mastered challenging coursework in Theoretical Physics, Robotics, Microcontroller Programming (C++), and Unity game design",
    ],
  },
  {
    title: "Code Coach",
    company: "The Coder School",
    period: "June 2023 - August 2023",
    description: "Taught programming fundamentals and robotics to elementary school students, creating engaging, hands-on learning experiences that made computing accessible and fun.",
    achievements: [
      "Taught programming and game logic to 12 elementary school students using Minecraft Education",
      "Led robotics sessions where students built and programmed robots using block-based Python coding",
      "Empowered students to understand fundamental computing concepts through dynamic, engaging lessons",
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
