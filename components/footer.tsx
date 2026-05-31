'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Youtube, Instagram, MessageCircle, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    {
      category: 'Courses',
      links: [
        { label: 'English', href: '/english/beginner' },
        { label: 'IT Backend', href: '/it-backend/python-basics' },
        { label: 'IT Frontend', href: '/it-frontend/web-basics' },
        { label: 'SAT', href: '/sat/sat-intensive' },
        { label: 'Mathematics', href: '/mathematics/algebra' },
        { label: 'Russian', href: '/russian/russian-beginner' },
      ],
    },
    {
      category: 'Company',
      links: [
        { label: 'About Us', href: '/#about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Contact', href: '/contact' },
        { label: 'Free Lesson', href: '/free-lesson' },
      ],
    },
    {
      category: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'GDPR Compliance', href: '#' },
      ],
    },
  ];

  const socials = [
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@ipeschool', color: 'hover:text-red-500' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/ipeschool', color: 'hover:text-pink-500' },
    { icon: MessageCircle, label: 'Telegram', href: 'https://t.me/ipeschool', color: 'hover:text-blue-500' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="IPE School" width={48} height={48} className="w-12 h-12" />
              <div>
                <p className="font-bold text-lg">IPE School</p>
                <p className="text-sm text-background/70">Inter Prof Education</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Transforming lives through world-class education since 2010. Join thousands of successful students.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin size={16} className="text-background/50" />
                <span>Tashkent, Uzbekistan</span>
              </div>
              <a href="tel:+998712005060" className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Phone size={16} className="text-background/50" />
                <span>+998 (71) 200-50-60</span>
              </a>
              <a href="mailto:info@ipeschool.uz" className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Mail size={16} className="text-background/50" />
                <span>info@ipeschool.uz</span>
              </a>
            </div>

            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all ${social.color}`}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h4 className="font-semibold text-background mb-4">{section.category}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; 2025 IPE School. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-background transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
