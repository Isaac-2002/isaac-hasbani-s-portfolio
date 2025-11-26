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
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "aws-cloud-resume",
    title: "AWS Cloud Resume Challenge",
    category: "Cloud",
    description: "Built a serverless resume website using AWS services including S3, CloudFront, Lambda, DynamoDB, and API Gateway. Implemented CI/CD with GitHub Actions.",
    techStack: ["AWS", "Python", "JavaScript", "Terraform", "GitHub Actions"],
    github: "https://github.com/Isaac-2002/cloud-resume",
    image: projectAws,
    featured: true,
  },
  {
    id: "asos-recommender",
    title: "ASOS Outfit Recommender",
    category: "AI/ML",
    description: "Developed an intelligent outfit recommendation system that scrapes ASOS products, integrates Weatherstack API for weather data, and uses GPT for personalized suggestions.",
    techStack: ["Python", "OpenAI GPT", "Weatherstack API", "Web Scraping", "FastAPI"],
    github: "https://github.com/Isaac-2002/outfit-recommender",
    image: projectAsos,
    featured: true,
  },
  {
    id: "olympic-data-story",
    title: "Olympic House Price Data Story",
    category: "Data Analysis",
    description: "An interactive data story exploring the relationship between Olympic events and local house prices, using advanced visualization and statistical analysis.",
    techStack: ["Python", "Pandas", "Plotly", "Statistical Analysis"],
    github: "https://github.com/Isaac-2002/olympic-analysis",
    image: projectOlympic,
    featured: false,
  },
  {
    id: "canvas-grade-processor",
    title: "Canvas Grade Processor",
    category: "Web App",
    description: "A full-stack web application for processing and analyzing Canvas LMS grades. Features AWS Lambda backend and modern Next.js frontend with real-time updates.",
    techStack: ["Next.js", "TypeScript", "AWS Lambda", "DynamoDB", "Tailwind CSS"],
    github: "https://github.com/Isaac-2002/canvas-processor",
    demo: "https://canvas-processor.vercel.app",
    image: projectCanvas,
    featured: true,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
