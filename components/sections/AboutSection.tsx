"use client";

import { useEffect, useState } from 'react';
import { Code2, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [inView, hasTriggered]);

  const stats = [
    { 
      icon: <Code2 className="h-5 w-5 text-primary" />, 
      value: "3.5+", 
      label: "Years of Experience" 
    },
    { 
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      value: "5+", 
      label: "Projects Completed" 
    },
    { 
      icon: <GraduationCap className="h-5 w-5 text-primary" />, 
      value: "8.33", 
      label: "CGPA in B.E." 
    },
    { 
      icon: <MapPin className="h-5 w-5 text-primary" />, 
      value: "Bangalore", 
      label: "Based in" 
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image and stats */}
          <div className="space-y-8">
            <motion.div 
              className="relative rounded-lg overflow-hidden shadow-lg h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={hasTriggered ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Rishi working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </motion.div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-2 rounded-full mb-3">
                        {stat.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Text content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={hasTriggered ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Full Stack Developer with a passion for creating responsive applications</h3>
            
            <p className="text-muted-foreground">
              I'm a Full Stack Developer with over 3.5 years of expertise in JavaScript technologies, specializing in building responsive and user-friendly applications. My journey in software development has equipped me with strong skills in both front-end and back-end technologies.
            </p>
            
            <p className="text-muted-foreground">
              I specialize in ReactJs, NextJs, NodeJs, and ExpressJs, with experience in database management using MSSQL and CosmosDB. My approach to development is focused on creating clean, efficient, and maintainable code that delivers exceptional user experiences.
            </p>
            
            <p className="text-muted-foreground">
              Throughout my career, I've worked on diverse projects, from monitoring systems to EMR products, consistently delivering solutions that enhance user engagement and system performance. I'm passionate about staying current with emerging technologies and applying best practices to solve complex challenges.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-medium">Name:</span> Rishi Pradeep Sharma
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Email:</span> 
                  <a href="mailto:sharmarishi519@gmail.com" className="text-primary hover:underline">
                    sharmarishi519@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Location:</span> Mumbai, India
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Available for:</span> Full-time roles
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}