import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/isaachasbani", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Isaac-2002", label: "GitHub" },
  { icon: Mail, href: "mailto:isaachasbani@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold tracking-tight">
              Isaac Hasbani<span className="text-primary">.</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Analytics • Product Strategy • AI
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Isaac Hasbani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
