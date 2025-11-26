import { Link } from "react-router-dom";
import { ArrowRight, Download, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import profileImage from "@/assets/profile-placeholder.png";

const quickLinks = [
  {
    label: "Available",
    title: "Schedule a call",
    href: "/contact",
    icon: Calendar,
  },
  {
    label: "Projects",
    title: "View my work",
    href: "/projects",
    icon: Sparkles,
  },
  {
    label: "Resume",
    title: "Download CV",
    href: "/cv",
    icon: Download,
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

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Analytics + Product Strategy + AI
              <br />
              <span className="text-gradient">Building data-driven products.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl"
            >
              Hi, I'm Isaac Hasbani — an MSc student in Analytics & Management at London Business School, 
              aspiring product lead and tech entrepreneur passionate about turning data into impactful products.
            </motion.p>

            {/* Quick Links */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {quickLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <Card className="group cursor-pointer hover:border-primary/50 hover-lift">
                    <CardContent className="flex items-center justify-between p-5">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">
                          {link.label}
                        </p>
                        <p className="mt-1 font-semibold">{link.title}</p>
                      </div>
                      <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="border-t border-border bg-card/30">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center"
          >
            {/* Image */}
            <div className="relative mx-auto max-w-md lg:order-2">
              <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-secondary">
                <img
                  src={profileImage}
                  alt="Isaac Hasbani"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
            </div>

            {/* Content */}
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-muted-foreground">
                Originally from Italy with roots in France, I'm now based in London 
                pursuing my MSc at London Business School. My journey spans across 
                cultures and disciplines — from business analytics to AI product development.
              </p>
              <p className="mt-4 text-muted-foreground">
                I'm passionate about the intersection of data science, consumer behavior, 
                and product strategy. My goal is to become a product lead who builds 
                technology that genuinely improves people's lives.
              </p>
              <Button variant="outline" className="mt-6 group" asChild>
                <Link to="/about">
                  Learn more about me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
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
              {[
                {
                  title: "AWS Cloud Resume",
                  category: "Cloud",
                  description: "Full-stack serverless resume with AWS services",
                },
                {
                  title: "ASOS Outfit Recommender",
                  category: "AI/ML",
                  description: "Weather-based outfit recommendations using GPT",
                },
                {
                  title: "Canvas Grade Processor",
                  category: "Web App",
                  description: "Next.js app with AWS backend for grade processing",
                },
              ].map((project) => (
                <Link key={project.title} to="/projects">
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

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Let's Connect
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether you want to discuss a project, explore opportunities, 
              or just chat about product strategy and AI, I'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <Calendar className="h-5 w-5" />
                  Book a Call
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/cv">
                  <Download className="h-5 w-5" />
                  Download CV
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
