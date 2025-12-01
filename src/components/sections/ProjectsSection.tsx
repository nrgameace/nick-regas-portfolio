import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// PLACEHOLDER PROJECTS - Replace with your actual projects
const projects = [
  {
    title: "AI-Powered Trading System",
    description: "Machine learning model for algorithmic trading with real-time market analysis and automated decision-making.",
    tags: ["Python", "TensorFlow", "React", "Node.js"],
    github: "https://github.com/nrgameace",
    demo: null,
  },
  {
    title: "Autonomous Navigation System",
    description: "Computer vision-based navigation system for autonomous vehicles using deep learning and sensor fusion.",
    tags: ["C++", "ROS", "OpenCV", "PyTorch"],
    github: "https://github.com/nrgameace",
    demo: null,
  },
  {
    title: "Cybersecurity Analytics Platform",
    description: "Real-time threat detection and analysis platform using advanced pattern recognition and anomaly detection.",
    tags: ["Python", "Django", "PostgreSQL", "D3.js"],
    github: "https://github.com/nrgameace",
    demo: null,
  },
  {
    title: "Full-Stack Web Application",
    description: "Modern web application with microservices architecture, featuring user authentication and real-time data processing.",
    tags: ["TypeScript", "React", "Express", "MongoDB"],
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
