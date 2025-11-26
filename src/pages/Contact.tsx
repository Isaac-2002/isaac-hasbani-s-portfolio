import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/isaachasbani", label: "LinkedIn", handle: "@isaachasbani" },
  { icon: Github, href: "https://github.com/isaachasbani", label: "GitHub", handle: "@isaachasbani" },
  { icon: Twitter, href: "https://twitter.com/isaachasbani", label: "Twitter", handle: "@isaachasbani" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you want to discuss a project, explore opportunities, or just 
              have a conversation about product strategy and AI, I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight">Send a Message</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-secondary border-border resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Book a Call + Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Book a Call Card */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Calendar className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Book a Call</h3>
                  <p className="mt-2 text-muted-foreground">
                    Prefer a live conversation? Schedule a 30-minute call to discuss 
                    opportunities, projects, or just to connect.
                  </p>
                  <Button variant="outline" size="lg" className="mt-6 w-full" asChild>
                    <a href="https://calendly.com/isaachasbani" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4" />
                      Schedule on Calendly
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Email Me Directly</h3>
                  <p className="mt-2 text-muted-foreground">
                    For quick inquiries or professional matters, feel free to email me directly.
                  </p>
                  <Button variant="outline" size="lg" className="mt-6 w-full" asChild>
                    <a href="mailto:isaac@example.com">
                      <Mail className="h-4 w-4" />
                      isaac@example.com
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect on Social</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
