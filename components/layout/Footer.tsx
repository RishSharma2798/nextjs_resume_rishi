"use client";

import { Mail, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer
      className={cn(
        "border-t",
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      )}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Rishi Sharma</h3>
            <p className="text-muted-foreground max-w-md">
              Full Stack Developer with 3.5+ years of expertise in JavaScript
              technologies, specializing in responsive applications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:sharmarishi519@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              {/* <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button> */}
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://blog.ronli.io/author/rishi-sharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blog"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Bangalore, India</p>
            <p className="text-sm text-muted-foreground">+91-9137269175</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rishi Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
