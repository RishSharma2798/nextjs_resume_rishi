"use client";

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Trophy, Users } from 'lucide-react';

const achievements = [
  {
    title: "Budding Rockstar",
    description: "Awarded at SLK software for outstanding project delivery",
    icon: <Trophy className="h-10 w-10 text-primary" />,
    iconBg: "bg-primary/10",
  },
  {
    title: "GenAI Ninja Training",
    description: "Certificate of Appreciation for successfully completing GenAI Ninja Training by SLK",
    icon: <Award className="h-10 w-10 text-primary" />,
    iconBg: "bg-primary/10",
  },
  {
    title: "Technical Blogging",
    description: "Published articles on web development and software engineering practices",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    iconBg: "bg-primary/10",
  },
  {
    title: "Sports Enthusiast",
    description: "Enjoy playing sports (Football, Cricket, Badminton)",
    icon: <Users className="h-10 w-10 text-primary" />,
    iconBg: "bg-primary/10",
  },
];

export default function AchievementsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [inView, hasTriggered]);

  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Achievements & Interests</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Recognition for my work and the activities I'm passionate about beyond my professional life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`${achievement.iconBg} p-4 rounded-full mb-4`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-xl mb-2">Bachelor of Engineering (Computer Science)</p>
              <p className="text-lg font-medium">CGPA: 8.33</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}