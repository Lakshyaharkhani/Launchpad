import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wind } from "lucide-react";

const skillsData = {
  frontend: [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 98 },
    { name: "HTML5 & CSS3", level: 92 },
  ],
  backend: [
    { name: "Node.js & Express", level: 85 },
    { name: "Python & Django", level: 75 },
    { name: "REST & GraphQL APIs", level: 88 },
  ],
  database: [
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "Firebase", level: 90 },
  ],
};

const PageHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center mb-12">
    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-2">{title}</h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
  </div>
);

const SkillCard = ({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: { name: string; level: number }[] }) => (
  <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center gap-4">
      {icon}
      <CardTitle className="font-headline">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between items-baseline mb-1">
            <span className="font-medium text-sm">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
        </div>
      ))}
    </CardContent>
  </Card>
);

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <PageHeader
        title="My Skill Arsenal"
        description="A curated collection of technologies and tools I wield to build modern, efficient, and scalable web applications."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard title="Frontend" icon={<Code className="w-8 h-8 text-primary" />} skills={skillsData.frontend} />
        <SkillCard title="Backend" icon={<Database className="w-8 h-8 text-primary" />} skills={skillsData.backend} />
        <SkillCard title="Databases & DevOps" icon={<Wind className="w-8 h-8 text-primary" />} skills={skillsData.database} />
      </div>
    </div>
  );
}
