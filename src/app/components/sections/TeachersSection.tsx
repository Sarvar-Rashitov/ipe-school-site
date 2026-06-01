import { motion } from 'motion/react';
import { Instagram, Send, Linkedin, Youtube } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useLanguage } from '../../lib/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { teachers } from '../../data/teachers';

export function TeachersSection() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return Instagram;
      case 'telegram':
        return Send;
      case 'linkedin':
        return Linkedin;
      case 'youtube':
        return Youtube;
      default:
        return Instagram;
    }
  };

  return (
    <section id="teachers" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.ourTeachers}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.teachersSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 bg-white">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-white text-6xl font-bold">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h3>

                  <p className="text-sm text-blue-600 font-medium mb-3">
                    {teacher.position[language]}
                  </p>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {teacher.bio[language]}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    {teacher.experience[language]}
                  </div>

                  {/* Social Links */}
                  {teacher.socials && (
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      {Object.entries(teacher.socials).map(([platform, url]) => {
                        const Icon = getSocialIcon(platform);
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group/icon"
                          >
                            <Icon className="w-4 h-4" />
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
      </div>
    </section>
  );
}
