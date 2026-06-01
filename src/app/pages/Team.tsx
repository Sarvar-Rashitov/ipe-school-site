import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Send, Linkedin, Youtube, Users, GraduationCap, Shield, Briefcase } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useLanguage } from '../lib/LanguageContext';
import { teamMembers } from '../data/team';

const roleIcons = {
  director: Shield,
  teacher: GraduationCap,
  mentor: Users,
  administrator: Briefcase,
};

export function Team() {
  const { language } = useLanguage();
  const [activeRole, setActiveRole] = useState<string>('all');

  const roles = [
    { id: 'all', label: { uz: 'Barchasi', ru: 'Все', en: 'All' } },
    { id: 'director', label: { uz: 'Rahbariyat', ru: 'Руководство', en: 'Leadership' } },
    { id: 'teacher', label: { uz: 'O\'qituvchilar', ru: 'Преподаватели', en: 'Teachers' } },
    { id: 'mentor', label: { uz: 'Mentorlar', ru: 'Менторы', en: 'Mentors' } },
    { id: 'administrator', label: { uz: 'Administratorlar', ru: 'Администраторы', en: 'Administrators' } },
  ];

  const filteredMembers = activeRole === 'all'
    ? teamMembers
    : teamMembers.filter(m => m.role === activeRole);

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
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {language === 'uz' ? 'Bizning jamoa' : language === 'ru' ? 'Наша команда' : 'Our Team'}
            </h1>
            <p className="text-xl text-blue-200/80">
              {language === 'uz'
                ? 'IPE School jamoasi - bu professional mutaxassislar guruhi'
                : language === 'ru'
                ? 'Команда IPE School - это группа профессиональных специалистов'
                : 'IPE School team is a group of professional specialists'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { num: teamMembers.filter(m => m.role === 'director').length, label: { uz: 'Rahbariyat', ru: 'Руководство', en: 'Leadership' } },
              { num: teamMembers.filter(m => m.role === 'teacher').length, label: { uz: 'O\'qituvchilar', ru: 'Преподаватели', en: 'Teachers' } },
              { num: teamMembers.filter(m => m.role === 'mentor').length, label: { uz: 'Mentorlar', ru: 'Менторы', en: 'Mentors' } },
              { num: teamMembers.filter(m => m.role === 'administrator').length, label: { uz: 'Administratorlar', ru: 'Администраторы', en: 'Administrators' } },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.num}
                </div>
                <div className="text-sm text-gray-600">{stat.label[language]}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Role Tabs */}
            <Tabs value={activeRole} onValueChange={setActiveRole} className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 h-auto bg-transparent p-0">
                {roles.map((role) => (
                  <TabsTrigger
                    key={role.id}
                    value={role.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white py-3 rounded-lg"
                  >
                    {role.label[language]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMembers.map((member, index) => {
                const RoleIcon = roleIcons[member.role];
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                      {/* Photo Placeholder */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                              <div className="text-white text-5xl font-bold">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Role Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                            <RoleIcon className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Name */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>

                        {/* Position */}
                        <p className="text-sm text-blue-600 font-medium mb-3">
                          {member.position[language]}
                        </p>

                        {/* Bio */}
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">
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
                                  className="w-9 h-9 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
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
                );
              })}
            </div>

            {/* Empty State */}
            {filteredMembers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">
                  {language === 'uz' ? 'Ushbu kategoriyada xodimlar yo\'q' : language === 'ru' ? 'В этой категории нет сотрудников' : 'No team members in this category'}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'uz' ? 'Bizga qo\'shiling!' : language === 'ru' ? 'Присоединяйтесь к нам!' : 'Join Us!'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'uz'
                ? 'Professional jamoamizning bir qismiga aylaning'
                : language === 'ru'
                ? 'Станьте частью нашей профессиональной команды'
                : 'Become part of our professional team'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
