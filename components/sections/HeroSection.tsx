"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 dark:from-background dark:via-background dark:to-background/90 z-0"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:40px_40px] z-0"></div>

      <div className="container relative z-10 px-4 md:px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-3/5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="inline-block text-primary-foreground bg-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Full Stack Developer
            </h2>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hello, I'm <span className="text-primary">Rishi</span> Sharma
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Full Stack Developer with 3.5+ years of expertise in JavaScript
            technologies, specializing in responsive applications with ReactJs,
            NextJs, and modern UI libraries. Skilled in back-end development
            using NodeJs and ExpressJs, and database management with MSSQL and
            CosmosDB. Experienced in version control with Git/GitHub and
            delivering high-quality solutions using agile and waterfall
            methodologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Get in Touch{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href="/RishiPSharma(R).pdf" download="Rishi_Sharma_Resume.pdf">
                Download Resume{" "}
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Background elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-5 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-down"></div>
        </div>
        <span className="text-xs text-muted-foreground mt-2">Scroll down</span>
      </motion.div>
    </section>
  );
}
