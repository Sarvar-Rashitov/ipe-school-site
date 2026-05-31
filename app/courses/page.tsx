'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CoursesSection } from '@/components/courses-section';
import { FloatingActions } from '@/components/floating-actions';

export default function CoursesPage() {
  return (
    <main>
      <Header />
      <div className="pt-24">
        <CoursesSection showTitle={true} />
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}
