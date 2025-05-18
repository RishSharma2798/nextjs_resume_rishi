"use client";

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Skills data
const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Redux", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "Tailwind", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "RESTful APIs", level: 90 },
    { name: "Authentication", level: 85 },
  ],
  database: [
    { name: "MSSQL", level: 75 },
    { name: "CosmosDB", level: 70 },
    { name: "MongoDB", level: 65 },
  ],
  other: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 80 },
    { name: "Agile", level: 75 },
    { name: "Waterfall", level: 70 },
    { name: "Azure", level: 65 },
    { name: "GCP", level: 60 },
  ],
};

const getColorForLevel = (level: number) => {
  if (level >= 80) return "bg-primary"; 
  if (level >= 60) return "bg-chart-2"; 
  return "bg-chart-3";
};

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasTriggered, setHasTriggered] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [inView, hasTriggered]);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My technical skills and proficiency in various technologies across frontend, backend, and other areas.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-md">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </motion.div>

          {Object.entries(skills).map(([category, categorySkills]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasTriggered && activeTab === category ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                          indicatorColor={getColorForLevel(skill.level)}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">My Development Approach</h3>
              <p className="text-muted-foreground mb-4">
                I approach development with a focus on creating clean, efficient, and maintainable code. My process involves:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Understanding project requirements thoroughly before beginning development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Implementing responsive designs that work seamlessly across devices</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Writing clean, well-documented code following best practices</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Optimizing performance for better user experience</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Conducting thorough testing to ensure quality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Staying current with emerging technologies and industry trends</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}