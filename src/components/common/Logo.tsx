import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Rocket className="w-6 h-6 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tight">
        Lakshya's Launchpad
      </span>
    </Link>
  );
}
