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
    date: "Dec 1, 2024",
    category: "Tech Consulting",
    readTime: "5 min read",
    featured: true,
    image: dealImage,
  },
  {
    id: "ai-product-strategy",
    title: "How AI is Reshaping Product Strategy",
    excerpt: "Exploring how artificial intelligence is transforming the way we think about product development and user experience design.",
    date: "Nov 15, 2024",
    category: "AI & Product",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "data-driven-decisions",
    title: "The Art of Data-Driven Decision Making",
    excerpt: "A practical guide to leveraging analytics for better business decisions without getting lost in the numbers.",
    date: "Oct 28, 2024",
    category: "Analytics",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: "lbs-journey",
    title: "My Journey to London Business School",
    excerpt: "Reflections on the application process, what I've learned so far, and advice for prospective students.",
    date: "Sep 10, 2024",
    category: "Personal",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "cloud-resume-learnings",
    title: "What I Learned Building the AWS Cloud Resume",
    excerpt: "Key takeaways from completing the Cloud Resume Challenge and how it changed my approach to cloud architecture.",
    date: "Aug 22, 2024",
    category: "Tech",
    readTime: "8 min read",
    featured: false,
  },
];

export const getFeaturedPosts = () => blogPosts.filter((p) => p.featured);
