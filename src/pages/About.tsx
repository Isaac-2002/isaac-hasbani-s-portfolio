import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Target } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    year: "2024 - 2025",
    title: "MSc Analytics & Management",
    subtitle: "London Business School",
    description: "Focusing on data-driven decision making, machine learning applications, and product strategy.",
    icon: GraduationCap,
  },
  {
    year: "2020 - 2024",
    title: "Previous Education",
    subtitle: "Undergraduate Studies",
    description: "Built a strong foundation in business, technology, and analytical thinking.",
    icon: GraduationCap,
  },
  {
    year: "Experience",
    title: "Professional Background",
    subtitle: "Various Roles",
    description: "Worked on data analytics, product development, and technology projects across multiple industries.",
    icon: Briefcase,
  },
];

const interests = [
  "Artificial Intelligence & ML",
  "Product Strategy",
  "Startups & Entrepreneurship",
  "Applied Data Science",
  "Consumer Behavior",
  "Tech Innovation",
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

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-primary">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Italy → France → United Kingdom</span>
            </motion.div>
            
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              About Me
            </motion.h1>
            
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-muted-foreground"
            >
              I'm Isaac Hasbani, a product-minded analyst with a passion for building 
              data-driven solutions. Currently pursuing my MSc at London Business School, 
              I bring a multicultural perspective from my journey across Italy, France, and the UK.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-2"
          >
            <div>
              <h2 className="text-2xl font-bold tracking-tight">My Story</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  My journey has been defined by curiosity and a desire to understand 
                  how technology can solve real problems. Growing up across different 
                  European cultures gave me a unique perspective on consumer behavior 
                  and market dynamics.
                </p>
                <p>
                  At London Business School, I'm deepening my expertise in analytics 
                  and management, focusing on how data can drive product decisions. 
                  I'm particularly interested in the intersection of AI, user experience, 
                  and business strategy.
                </p>
                <p>
                  My goal is to become a product lead who can bridge the gap between 
                  technical innovation and user needs — building products that are not 
                  just smart, but genuinely useful.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Interests & Focus Areas
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold tracking-tight">Education & Experience</h2>
            
            <div className="mt-8 space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="hover:border-primary/30 transition-colors">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">{item.year}</span>
                      <h3 className="mt-1 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
