import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "Advanced React Patterns",
    issuer: "Coursera",
    date: "2023",
    imageUrl: "https://placehold.co/600x400.png",
    url: "#",
    aiHint: "modern abstract"
  },
  {
    title: "Next.js 14 Pro",
    issuer: "Vercel Academy",
    date: "2023",
    imageUrl: "https://placehold.co/600x400.png",
    url: "#",
    aiHint: "minimalist tech"
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    date: "2022",
    imageUrl: "https://placehold.co/600x400.png",
    url: "#",
    aiHint: "network nodes"
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    imageUrl: "https://placehold.co/600x400.png",
    url: "#",
    aiHint: "cloud computing"
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2021",
    imageUrl: "https://placehold.co/600x400.png",
    url: "#",
    aiHint: "team collaboration"
  },
    {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM Skills",
    date: "2021",
    imageUrl: "https://placehold.co/600x400.png",
    url: "#",
    aiHint: "digital security"
  },
];

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-2">Certifications & Achievements</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My commitment to continuous learning and professional development is reflected in these credentials.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <Link href={cert.url} key={index} target="_blank" rel="noopener noreferrer" className="group block">
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader>
                <div className="aspect-[1.5/1] overflow-hidden rounded-md">
                    <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={cert.aiHint}
                    />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{cert.title}</CardTitle>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <Badge variant="secondary">{cert.date}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                 <span className="flex items-center text-sm font-medium text-primary">
                    View Credential <ArrowUpRight className="ml-1 h-4 w-4" />
                 </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
