import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden py-20 md:py-32 hero-blobs">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                Lakshya's Launchpad
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Hello! I'm Lakshya, a passionate developer and innovator. This is my digital space where I showcase my projects, skills, and journey in the world of technology. Welcome aboard!
              </p>
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center items-center">
              <Card className="p-2 rounded-full shadow-2xl bg-background/50 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/lakshya-portrait.jpg"
                      alt="Lakshya's Portrait"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                      data-ai-hint="portrait man"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
