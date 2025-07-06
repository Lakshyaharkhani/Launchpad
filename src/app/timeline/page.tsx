
'use client';

import { Briefcase, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const timelineData = [
  {
    type: 'education',
    icon: <GraduationCap />,
    date: 'Present',
    title: 'Student at Parul Institute of Engineering and Technology',
    subtitle: 'B.Tech in AI & ML',
    description: 'Currently pursuing my bachelor\'s degree, focusing on the fascinating world of Artificial Intelligence and Machine Learning.',
    tags: ['AI', 'ML', 'Student', 'B.Tech'],
  },
  {
    type: 'work',
    icon: <Briefcase />,
    date: 'Ongoing',
    title: 'Learning in Progress',
    subtitle: 'Continuous Development',
    description: 'Actively learning new technologies and sharpening my skills to build innovative solutions.',
    tags: ['Learning', 'Development', 'Skills'],
  },
];

export default function TimelinePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div 
        className={cn(
          "text-center mb-16 opacity-0", 
          isMounted && "animate-fade-in-up"
        )} 
        style={{ animationDelay: '100ms' }}
      >
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-2">My Journey</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A snapshot of my current learning and development path.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative pl-8 sm:pl-12 py-6 timeline-item opacity-0",
              isMounted && "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 200 + 300}ms` }}
          >
            <div className="absolute left-0 timeline-dot">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background ring-4 ring-primary">
                {item.icon}
              </span>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-primary/20 transition-shadow duration-300">
                <span className="text-sm text-muted-foreground">{item.date}</span>
                <h3 className="font-headline text-xl font-bold mt-1">{item.title}</h3>
                <h4 className="text-md font-semibold text-primary mb-2">{item.subtitle}</h4>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
