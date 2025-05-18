"use client";

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Building2, CheckCircle2 } from 'lucide-react';

// Experience data
const experiences = [
  {
    title: "Full Stack Developer",
    company: "Sunzant Technologies",
    location: "Bangalore",
    period: "March 2025 - Present",
    achievements: [
      "Leveraged Next.js incremental static regeneration (ISR) and server-side caching to reduce TTFB by 23% and enhance page performance.",
      "Integrated SWR hook with dynamic route caching and stale-while-revalidate logic, decreasing API overfetching by 32% and improving hydration time by 25%.",
      "Engineered a split-payment feature enabling multiple gift cards per transaction, enhancing checkout flexibility and reducing cart abandonment by 18%.",
      "Identified and fixed performance issues using Chrome DevTools and Lighthouse, leading to a 26% reduction in frontend bugs and smoother user experience."
    ]
  },
  {
    title: "Software Engineer",
    company: "SLK Software",
    location: "Bangalore",
    period: "Jan 2023 - March 2025",
    projects: [
      {
        name: "408 Tank Monitor (Product)",
        achievements: [
          "Developed React.js and Next.js components, enhancing user engagement by 18% through improved responsiveness and state management with Redux.",
          "Architected and designed a scalable multi-tenant solution supporting both stamped and multi-tenant environments, resulting in substantial infrastructure cost reduction by 37%.",
          "Engineered and integrated RESTful and other APIs using Node.js and Express.js to achieve robust data management with MSSQL.",
          "Build third party JWT authentication for secure access control of APIs.",
          "Optimized API performance with server-side pagination enhancing the response time 18%.",
          "Enhanced system stability and reduced downtime through efficient troubleshooting, achieving a 12% reduction in system outages.",
          "Optimized application performance using code splitting, lazy loading, and caching leveraging Context API, React Hooks, and responsive design principles."
        ]
      },
      {
        name: "EMR Product DataHub",
        achievements: [
          "Designed and implemented responsive UI screens, integrating them with APIs, leading to a 23% increase in user satisfaction.",
          "Leveraged Context API, Redux and Custom hooks to enhance state management, resulting in a 12% reduction in form submission errors.",
          "Architected APIs to leverage CosmosDB as the backend infrastructure, ensuring robust data interaction, which improved data access speed by 27%.",
          "Increased code reusability by 12% through modular design."
        ]
      }
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "SLK Software",
    location: "Bangalore",
    period: "Sept 2021 - Jan 2023",
    projects: [
      {
        name: "License Generator",
        achievements: [
          "Led the design and implementation of React screens, integrating with APIs to align with client requirements.",
          "Conducted requirement analysis, directly engaging with clients to gather and interpret needs, leading to a 22% improvement in project accuracy and efficiency.",
          "Managed state within the application and developed intuitive, responsive UI components, enhancing user experience by 15%.",
          "Implemented responsive designs using PrimeReact and Material UI, boosting cross-device compatibility by 23%."
        ]
      }
    ]
  }
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [inView, hasTriggered]);

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My professional journey as a Full Stack Developer, showcasing my roles, responsibilities, and achievements.
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-[16px] top-0 bottom-0 w-0.5 bg-border"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={hasTriggered ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <Building2 className="h-4 w-4 text-primary" />
              </div>
              
              <Card className="w-full">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company}, {exp.location}
                      </CardDescription>
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {!exp.projects && (
                    <div className="space-y-3">
                      <h4 className="font-medium">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements?.map((achievement, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.projects && exp.projects.map((project, pi) => (
                    <div key={pi} className="space-y-3">
                      <h4 className="font-medium">{project.name}</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, ai) => (
                          <li key={ai} className="flex gap-2 text-sm">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}