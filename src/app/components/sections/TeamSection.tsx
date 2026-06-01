import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Send, Linkedin, Youtube, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useLanguage } from '../../lib/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { teamMembers } from '../../data/team';

export function TeamSection() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  // Homeda faqat rahbarlarni ko'rsatamiz
  const directors = teamMembers.filter(m => m.role === 'director');

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return Instagram;
      case 'telegram': return Send;
      case 'linkedin': return Linkedin;
      case 'youtube': return Youtube;
      default: return Instagram;
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            {language === 'uz' ? 'Bizning jamoa' : language === 'ru' ? 'Наша команда' : 'Our Team'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {language === 'uz' ? 'Rahbariyat' : language === 'ru' ? 'Руководство' : 'Leadership'}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {language === 'uz'
              ? 'IPE School jamoasining asoschi va rahbarlari'
              : language === 'ru'
              ? 'Основатели и руководители команды IPE School'
              : 'Founders and leaders of IPE School team'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {directors.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                {/* Photo Placeholder */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-white text-6xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Role Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-sm text-blue-600 font-medium mb-4">
                    {member.position[language]}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {member.bio[language]}
                  </p>

                  {/* Experience */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    {member.experience[language]}
                  </div>

                  {/* Social Links */}
                  {member.socials && (
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      {Object.entries(member.socials).map(([platform, url]) => {
                        const Icon = getSocialIcon(platform);
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Barcha jamoani ko'rish tugmasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/team">
            <Button size="lg" variant="outline" className="text-lg px-8 hover:border-blue-600 hover:text-blue-600">
              {language === 'uz' ? 'Barcha jamoa' : language === 'ru' ? 'Вся команда' : 'Full Team'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
