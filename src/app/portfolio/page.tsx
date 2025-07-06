'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application for project management, built with the MERN stack.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'project management dashboard'
  },
  {
    title: 'NextGen E-commerce',
    description: 'A modern e-commerce platform built with Next.js, Stripe, and Tailwind CSS.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'online shopping interface'
  },
  {
    title: 'DataViz Dashboard',
    description: 'An interactive data visualization dashboard using D3.js and React.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'charts and graphs'
  },
  {
    title: 'Task Tracker API',
    description: 'A RESTful API for a task management application, built with Python and Django.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Django'],
    githubUrl: '#',
    liveUrl: null,
    aiHint: 'code on screen'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website (this one!) built with Next.js and love.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Tailwind'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'personal website design'
  },
  {
    title: 'Chat App',
    description: 'A real-time chat application using Socket.IO, Node.js, and React.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'Socket.IO'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'messaging app interface'
  },
];

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-2">My Project Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Feel free to explore them.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={activeFilter === tag ? 'default' : 'secondary'}
            onClick={() => setActiveFilter(tag)}
            className="rounded-full transition-transform hover:scale-105"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="p-0">
               <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover"
                  data-ai-hint={project.aiHint}
                />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
            </CardContent>
            <CardFooter className="p-6 bg-secondary/50 flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild className="transition-transform hover:scale-105">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </Link>
                </Button>
                {project.liveUrl && (
                    <Button size="sm" asChild className="transition-transform hover:scale-105">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </Link>
                    </Button>
                )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
