import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Layout } from "@/shared/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  SiAmazon,
  SiPython,
  SiJavascript,
  SiTerraform,
  SiGithub,
  SiOpenai,
  SiFastapi,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPandas,
  SiPlotly,
  SiNumpy,
  SiAwslambda
} from "react-icons/si";
import { IconType } from "react-icons";

// Map technology names to their icons
const techIcons: Record<string, IconType> = {
  "AWS": SiAmazon,
  "AWS S3": SiAmazon,
  "CloudFront": SiAmazon,
  "Lambda": SiAwslambda,
  "DynamoDB": SiAmazon,
  "API Gateway": SiAmazon,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Terraform": SiTerraform,
  "GitHub Actions": SiGithub,
  "OpenAI GPT": SiOpenai,
  "Weatherstack API": SiJavascript,
  "FastAPI": SiFastapi,
  "Web Scraping": SiPython,
  "BeautifulSoup": SiPython,
  "Pandas": SiPandas,
  "Plotly": SiPlotly,
  "NumPy": SiNumpy,
  "Statistical Analysis": SiPython,
  "Data Visualization": SiPlotly,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Chart.js": SiJavascript,
  "React": SiReact,
};

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const projectsData: Record<string, ProjectDetail> = {
  "aws-cloud-resume": {
    id: "aws-cloud-resume",
    title: "AWS Cloud Resume Challenge",
    category: "Cloud",
    description: "Built a serverless resume website using AWS services.",
    overview: `
The AWS Cloud Resume Challenge is a hands-on project that demonstrates proficiency in various AWS services and modern DevOps practices.

## Key Features
- Static website hosting with S3 and CloudFront CDN
- Serverless visitor counter using Lambda and DynamoDB
- API Gateway for secure API endpoints
- Infrastructure as Code with Terraform
- CI/CD pipeline with GitHub Actions

## Challenges & Solutions
The main challenge was setting up proper IAM permissions and ensuring secure communication between services. I implemented least-privilege access policies and used environment variables for sensitive configuration.

## Lessons Learned
This project deepened my understanding of serverless architecture and the importance of infrastructure automation. It also reinforced best practices for security and cost optimization in the cloud.
    `,
    techStack: ["AWS S3", "CloudFront", "Lambda", "DynamoDB", "API Gateway", "Terraform", "GitHub Actions", "Python", "JavaScript"],
    github: "https://github.com/Isaac-2002/cloud-resume",
  },
  "asos-recommender": {
    id: "asos-recommender",
    title: "ASOS Outfit Recommender",
    category: "AI/ML",
    description: "An intelligent outfit recommendation system using GPT.",
    overview: `
A personalized outfit recommendation system that combines web scraping, weather data, and AI to suggest perfect outfits.

## How It Works
1. Scrapes product data from ASOS
2. Fetches real-time weather data from Weatherstack API
3. Uses OpenAI GPT to generate personalized recommendations
4. Presents suggestions through a clean API interface

## Technical Implementation
- Python-based web scraper with rate limiting and caching
- FastAPI backend for robust API endpoints
- OpenAI GPT-4 integration for intelligent suggestions
- Weather-based filtering and preference learning

## Future Improvements
Planning to add user accounts, preference history, and a mobile-friendly frontend.
    `,
    techStack: ["Python", "OpenAI GPT", "Weatherstack API", "FastAPI", "Web Scraping", "BeautifulSoup"],
    github: "https://github.com/Isaac-2002/outfit-recommender",
  },
  "olympic-data-story": {
    id: "olympic-data-story",
    title: "Olympic House Price Data Story",
    category: "Data Analysis",
    description: "Interactive analysis of Olympic events and housing prices.",
    overview: `
An in-depth data journalism project exploring the economic impact of Olympic Games on local real estate markets.

## Research Questions
- How do Olympic Games affect local housing prices?
- What is the timeline of price changes before, during, and after the games?
- Which Olympic cities saw the biggest real estate impacts?

## Methodology
- Collected historical housing price data from multiple sources
- Normalized data across different currencies and time periods
- Applied statistical analysis to identify significant trends
- Created interactive visualizations for storytelling

## Key Findings
The analysis revealed that host cities typically experience a housing price increase of 15-20% in the 3-5 years leading up to the games, with varied post-event outcomes depending on the city's overall economic trajectory.
    `,
    techStack: ["Python", "Pandas", "Plotly", "NumPy", "Statistical Analysis", "Data Visualization"],
    github: "https://github.com/Isaac-2002/olympic-analysis",
  },
  "canvas-grade-processor": {
    id: "canvas-grade-processor",
    title: "Canvas Grade Processor",
    category: "Web App",
    description: "Full-stack app for Canvas LMS grade processing.",
    overview: `
A comprehensive web application designed to help students and educators analyze and visualize Canvas LMS grade data.

## Features
- Upload and parse Canvas grade exports
- Interactive grade visualizations
- GPA calculation and projections
- Assignment deadline tracking
- Real-time grade updates

## Architecture
- Next.js 14 with App Router for the frontend
- AWS Lambda functions for data processing
- DynamoDB for persistent storage
- Tailwind CSS for modern, responsive design

## User Experience
The app prioritizes simplicity and clarity, making it easy for users to understand their academic standing at a glance while providing deeper analytics for those who want to dive in.
    `,
    techStack: ["Next.js", "TypeScript", "AWS Lambda", "DynamoDB", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/Isaac-2002/canvas-processor",
    demo: "https://canvas-processor.vercel.app",
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative border-b border-border overflow-hidden">
        {/* Background Image or Gradient */}
        {project.image ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-background" />
          </>
        )}

        <div className="relative z-10 container mx-auto px-4 py-12 lg:px-8 min-h-[60vh] flex flex-col justify-between">
          <Button variant="ghost" className="mb-6 w-fit" asChild>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl pb-12"
          >
            <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              {project.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="default" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,280px]">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert max-w-none"
            >
              <div className="space-y-4 text-muted-foreground">
                {project.overview.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-4">{line.replace('## ', '')}</h2>;
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="ml-4">{line.replace('- ', '')}</li>;
                  }
                  if (line.trim()) {
                    return <p key={i}>{line}</p>;
                  }
                  return null;
                })}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Tech Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.techStack.map((tech) => {
                    const Icon = techIcons[tech];
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm font-medium hover:bg-secondary transition-colors"
                        title={tech}
                      >
                        {Icon && <Icon className="h-5 w-5" />}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
