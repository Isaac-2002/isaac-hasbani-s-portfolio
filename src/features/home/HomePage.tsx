import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/shared/layout/Layout";
import { getFeaturedProjects } from "@/data/projects";
import { getFeaturedPosts } from "@/data/blog";
import profileImage from "@/assets/profile-pic.jpg";

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

export function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredPosts = getFeaturedPosts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid gap-12 lg:grid-cols-[1fr_auto] items-start"
          >
            {/* Left side - Title and Presentation */}
            <div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Isaac Hasbani
              </motion.h1>

              {/* Presentation text */}
              <motion.div
                variants={fadeUp}
                className="mt-6 max-w-3xl text-lg text-muted-foreground lg:text-xl leading-relaxed"
              >
                <p>
                  I'm an MSc student in{" "}
                  <span className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2 py-1 text-sm font-medium text-foreground">
                    Analytics & Management
                  </span>{" "}
                  at London Business School, merging data science with{" "}
                  <span className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2 py-1 text-sm font-medium text-foreground">
                    Product Strategy
                  </span>{" "}
                  to create impactful experiences. I craft{" "}
                  <span className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2 py-1 text-sm font-medium text-foreground">
                    AI-powered products
                  </span>{" "}
                  and regularly share my learnings as{" "}
                  <span className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2 py-1 text-sm font-medium text-foreground">
                    Insights
                  </span>{" "}
                  by writing about my discoveries in technology.
                </p>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex items-center gap-4"
              >
                <a
                  href="https://linkedin.com/in/isaachasbani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background hover:bg-secondary hover:border-primary/50 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Isaac-2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background hover:bg-secondary hover:border-primary/50 transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:isaachasbani@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background hover:bg-secondary hover:border-primary/50 transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 hover:bg-secondary hover:border-primary/50 transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">Schedule a call</span>
                </a>
              </motion.div>
            </div>

            {/* Right side - Profile Picture */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-secondary shadow-lg">
                  <img
                    src={profileImage}
                    alt="Isaac Hasbani"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                Featured Projects
              </h2>
              <Button variant="ghost" className="group" asChild>
                <Link to="/projects">
                  View all
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden hover:border-primary/50 hover-lift">
                    <div className="aspect-video bg-secondary" />
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="mt-3 font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                Blog
              </h2>
              <Button variant="ghost" className="group" asChild>
                <Link to="/blog">
                  View all
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden hover:border-primary/50 hover-lift">
                    <div className="aspect-video bg-secondary" />
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="mt-3 font-semibold">{post.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
