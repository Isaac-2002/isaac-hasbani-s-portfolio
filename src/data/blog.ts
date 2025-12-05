import dealImage from "@/assets/Deal.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "tech-shapes-ma-deals",
    title: "How Tech Shapes M&A Deals: A Practical Guide",
    excerpt: "A practical framework for understanding how technology drives investment decisions in private equity M&A, based on insights from tech consulting interviews.",
    date: "Dec 1, 2025",
    category: "Tech Consulting",
    readTime: "5 min read",
    featured: true,
    image: dealImage,
  },
];

export const getFeaturedPosts = () => blogPosts.filter((p) => p.featured);
