'use client';

import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Loader from "@/components/common/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader fullScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
