import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "Machine Learning–Based Stock Portfolio Optimizer",
    description:
      "Designed and implemented an end-to-end ML-powered portfolio optimizer. Built a data pipeline for historical market data, trained a Random Forest model to forecast daily returns, and integrated predictions into a custom backtesting engine with mean-variance optimization. Achieved consistent performance improvements over an S&P 500 benchmark in simulation.",
    tags: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Finance",
      "Machine Learning",
      "Backtesting",
    ],
    github: "https://github.com/nrgameace/StockPortfolioOptimizer",
    demo: null,
    report: null,
  },
  {
  title: "Handwritten Digit Classification Using K-Means Clustering",
  description:
    "Recreated and improved the K-Means clustering algorithm from scratch to classify MNIST handwritten digits. Implemented K-Means++ initialization, Euclidean-distance-based assignment, centroid recomputation, and an outlier-detection system based on statistical distance thresholds. Achieved 78% classification accuracy on the test set and identified high-variance outliers, demonstrating how unsupervised learning can reveal structure in high-dimensional image data.",
  tags: [
    "MATLAB",
    "Machine Learning",
    "Unsupervised Learning",
    "K-Means",
    "Data Analysis"
  ],
  github: "https://github.com/nrgameace/Handwritten-Digit-Classification-Using-K-Means-Clustering",   // or specific repo if you upload code
  demo: null,
  report: "https://drive.google.com/file/d/17r9EtcVT9_izzu0qHtmZd0d9M-x3GvbP/view?usp=sharing"
  },
  {
    title: "Stock Market Prediction Using AI-Driven News Headline Analysis",
    description:
      "Trained a neural network using PyTorch to classify market direction using financial news headlines. Achieved 60% accuracy and demonstrated the viability of NLP-based market signal extraction.",
    tags: ["Python", "PyTorch", "pandas", "NLP", "XGBoost"],
    github:
      "https://github.com/nrgameace/StockMarketPredictionUsingAIAnalysisofHeadlines",
    demo: null,
    report: null,
  },
  {
    title: "Analysis of A* and RRT* Pathfinding Algorithms for Drone Navigation",
    description:
      "Conducted comparative research between A* and RRT* for autonomous drone navigation. Found A* to be 3-5x faster, while RRT* produced smoother and more efficient paths. Implemented simulations using PyGame and executed real-world tests on the DJI Tello EDU.",
    tags: ["Python", "PyGame", "DJI Tello API", "Algorithmic Pathfinding"],
    github: "https://github.com/nrgameace/GSETAutonomousDroneResearchProject",
    demo: null,
    report: "https://drive.google.com/file/d/1ekhDYca4KmztGw5VgzEJipM4wT3kJcBb/view",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in AI, autonomous systems, and
            full-stack development
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
                    {/* GitHub */}
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>

                    {/* Demo (optional) */}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}

                    {/* Report (optional) */}
                    {project.report && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.report}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Report
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