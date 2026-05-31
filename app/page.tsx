'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { CoursesSection } from '@/components/courses-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ParentsSection } from '@/components/parents-section';
import { CTASection } from '@/components/cta-section';
import { SocialSection } from '@/components/social-section';
import { FloatingActions } from '@/components/floating-actions';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <AboutSection />
      <SocialSection />
      <CoursesSection />
      <TestimonialsSection />
      <ParentsSection />
      <CTASection />
      <Footer />
      <FloatingActions />
    </main>
  );
}

