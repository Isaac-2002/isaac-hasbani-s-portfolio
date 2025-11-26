import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "ai-product-strategy",
    title: "How AI is Reshaping Product Strategy",
    excerpt: "Exploring how artificial intelligence is transforming the way we think about product development and user experience design.",
    date: "Nov 15, 2024",
    category: "AI & Product",
    readTime: "5 min read",
  },
  {
    id: "data-driven-decisions",
    title: "The Art of Data-Driven Decision Making",
    excerpt: "A practical guide to leveraging analytics for better business decisions without getting lost in the numbers.",
    date: "Oct 28, 2024",
    category: "Analytics",
    readTime: "7 min read",
  },
  {
    id: "lbs-journey",
    title: "My Journey to London Business School",
    excerpt: "Reflections on the application process, what I've learned so far, and advice for prospective students.",
    date: "Sep 10, 2024",
    category: "Personal",
    readTime: "6 min read",
  },
  {
    id: "cloud-resume-learnings",
    title: "What I Learned Building the AWS Cloud Resume",
    excerpt: "Key takeaways from completing the Cloud Resume Challenge and how it changed my approach to cloud architecture.",
    date: "Aug 22, 2024",
    category: "Tech",
    readTime: "8 min read",
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

const Blog = () => {
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
              Blog
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              Thoughts on product strategy, AI, data analytics, and my journey 
              through the tech and business world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp}>
                <Link to={`/blog/${post.id}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden hover:border-primary/50 hover-lift">
                    <div className="aspect-video bg-secondary" />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
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

export default Blog;
