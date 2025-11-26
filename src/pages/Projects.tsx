import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectAws from "@/assets/project-aws.png";
import projectAsos from "@/assets/project-asos.png";
import projectOlympic from "@/assets/project-olympic.png";
import projectCanvas from "@/assets/project-canvas.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "aws-cloud-resume",
    title: "AWS Cloud Resume Challenge",
    category: "Cloud",
    description: "Built a serverless resume website using AWS services including S3, CloudFront, Lambda, DynamoDB, and API Gateway. Implemented CI/CD with GitHub Actions.",
    techStack: ["AWS", "Python", "JavaScript", "Terraform", "GitHub Actions"],
    github: "https://github.com/isaachasbani/cloud-resume",
    image: projectAws,
  },
  {
    id: "asos-recommender",
    title: "ASOS Outfit Recommender",
    category: "AI/ML",
    description: "Developed an intelligent outfit recommendation system that scrapes ASOS products, integrates Weatherstack API for weather data, and uses GPT for personalized suggestions.",
    techStack: ["Python", "OpenAI GPT", "Weatherstack API", "Web Scraping", "FastAPI"],
    github: "https://github.com/isaachasbani/outfit-recommender",
    image: projectAsos,
  },
  {
    id: "olympic-data-story",
    title: "Olympic House Price Data Story",
    category: "Data Analysis",
    description: "An interactive data story exploring the relationship between Olympic events and local house prices, using advanced visualization and statistical analysis.",
    techStack: ["Python", "Pandas", "Plotly", "Statistical Analysis"],
    github: "https://github.com/isaachasbani/olympic-analysis",
    image: projectOlympic,
  },
  {
    id: "canvas-grade-processor",
    title: "Canvas Grade Processor",
    category: "Web App",
    description: "A full-stack web application for processing and analyzing Canvas LMS grades. Features AWS Lambda backend and modern Next.js frontend with real-time updates.",
    techStack: ["Next.js", "TypeScript", "AWS Lambda", "DynamoDB", "Tailwind CSS"],
    github: "https://github.com/isaachasbani/canvas-processor",
    demo: "https://canvas-processor.vercel.app",
    image: projectCanvas,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Projects
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              A collection of my work spanning cloud infrastructure, AI/ML applications, 
              data analysis, and full-stack development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Link to={`/projects/${project.id}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden hover:border-primary/50 hover-lift">
                    <div className="aspect-video bg-secondary overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-secondary px-2 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="rounded bg-secondary px-2 py-1 text-xs font-medium">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        {project.github && (
                          <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
