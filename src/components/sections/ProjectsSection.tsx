import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Stock Market Prediction Using AI-Based Analysis of News Headlines",
    description: "Built and trained a neural network using PyTorch to predict stock market movements from news headlines, achieving 60% prediction accuracy and demonstrating the potential of NLP-driven financial forecasting.",
    tags: ["Python", "PyTorch", "pandas", "XGBoost"],
    github: "https://github.com/nrgameace",
    demo: null,
  },
  {
    title: "Analysis of A* and RRT* Pathfinding Algorithms for Drone Navigation",
    description: "Spearheaded research analyzing A* vs. RRT* for drone navigation, finding A* 3-5x faster while RRT* offered superior flight efficiency. Conducted real-world drone trials with DJI Tello EDU and visualized performance across diverse maze types.",
    tags: ["Python", "PyGame", "DJI Tello API", "C++"],
    github: "https://github.com/nrgameace",
    demo: null,
  },
  {
    title: "IT Infrastructure & Automation Solutions",
    description: "Developed 20+ Zapier automation workflows and managed 10+ WordPress websites, improving operational efficiency by 40%. Implemented emulation solutions for legacy application compatibility on ARM architectures.",
    tags: ["WordPress", "Zapier", "IONOS", "System Administration"],
    github: "https://github.com/nrgameace",
    demo: null,
  },
  {
    title: "Educational Robotics & Programming Platform",
    description: "Designed and delivered interactive programming curriculum for elementary students using Minecraft Education and block-based Python, empowering 12 students with fundamental computing concepts.",
    tags: ["Python", "Minecraft Education", "Robotics", "Education"],
    github: "https://github.com/nrgameace",
    demo: null,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in AI, autonomous systems, and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full card-hover border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
