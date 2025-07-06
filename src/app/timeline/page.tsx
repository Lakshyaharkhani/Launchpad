import { Briefcase, GraduationCap, Building } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const timelineData = [
  {
    type: 'work',
    icon: <Briefcase />,
    date: '2022 - Present',
    title: 'Senior Frontend Developer',
    subtitle: 'Innovate Inc.',
    description: 'Leading the development of a new user-facing analytics dashboard using Next.js, TypeScript, and Tailwind CSS. Mentoring junior developers and improving code quality across the team.',
    tags: ['Next.js', 'React', 'TypeScript', 'Leadership'],
  },
  {
    type: 'work',
    icon: <Briefcase />,
    date: '2020 - 2022',
    title: 'Software Engineer',
    subtitle: 'Tech Solutions LLC',
    description: 'Developed and maintained full-stack features for a large-scale e-commerce platform. Worked with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'E-commerce'],
  },
  {
    type: 'education',
    icon: <GraduationCap />,
    date: '2016 - 2020',
    title: 'B.Sc. in Computer Science',
    subtitle: 'University of Technology',
    description: 'Graduated with honors. Focused on algorithms, data structures, and artificial intelligence. President of the university coding club.',
    tags: ['Algorithms', 'AI', 'Data Structures'],
  },
  {
    type: 'work',
    icon: <Building />,
    date: 'Summer 2019',
    title: 'Software Engineering Intern',
    subtitle: 'StartupHub',
    description: 'Gained hands-on experience in a fast-paced startup environment, contributing to both frontend and backend tasks for a new mobile application.',
    tags: ['Internship', 'Mobile Dev', 'Startups'],
  },
];

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-2">My Journey</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A chronological overview of my professional career and educational milestones.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-8 sm:pl-12 py-6 timeline-item">
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
