'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of successful students. Book your free lesson today and begin your journey to mastery!
          </p>
          <Link href="/free-lesson">
            <Button 
              size="lg" 
              className="gap-2 bg-white text-primary hover:bg-white/90"
            >
              Get Free Lesson <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
