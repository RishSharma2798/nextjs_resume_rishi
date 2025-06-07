"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className={cn(
            "text-2xl font-bold transition-all duration-300",
            isScrolled ? "scale-90" : "scale-100"
          )}
        >
          <span className="text-primary">Rishi</span>&nbsp;
          <span className="text-primary/70">Sharma</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm rounded-md hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </Button>
          <Button asChild className="ml-4" size="sm">
            <a
              href="/RishiPradeepSharma(R).pdf"
              download="Rishi_Sharma_Resume.pdf"
            >
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drop Down Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background shadow-md",
          isMobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col items-center space-y-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <a
              href="/RishiPradeepSharma(R).pdf"
              download="Rishi_Sharma_Resume.pdf"
            >
              Download Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
