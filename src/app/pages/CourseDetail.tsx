import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Clock, BookOpen, Users, Award, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../lib/LanguageContext';
import { courses } from '../data/courses';
import { SITE_URL } from '../lib/seo';

interface CourseDetailProps {
  onOpenFreeLesson: (courseId?: string) => void;
}

export function CourseDetail({ onOpenFreeLesson }: CourseDetailProps) {
  const { courseId } = useParams();
  const { t, language } = useLanguage();

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Link to="/courses">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <Helmet>
        <title>{course.title[language]} | IPE School</title>
        <meta name="description" content={course.description[language]} />
        <meta property="og:title" content={`${course.title[language]} | IPE School`} />
        <meta property="og:description" content={course.description[language]} />
        <meta property="og:url" content={`${SITE_URL}/courses/${course.id}`} />
        <link rel="canonical" href={`${SITE_URL}/courses/${course.id}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: course.title.en,
          description: course.description.en,
          provider: { '@type': 'EducationalOrganization', name: 'IPE School' },
          timeRequired: course.duration.en,
        })}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/courses">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.courses}
            </Button>
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {course.title[language]}
              </h1>
              <p className="text-lg text-blue-200/80 mb-8 leading-relaxed">
                {course.fullDescription[language]}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration[language]}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.level[language]}</span>
                </div>
              </div>

              <Button
                onClick={() => onOpenFreeLesson(course.id)}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 h-16"
              >
                {t.registerFree}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What you'll learn
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {course.features[language].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Course Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Small Groups
                    </h3>
                    <p className="text-gray-600 text-sm">
                      6-8 students per class for personalized attention
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Modern Materials
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Latest textbooks and online resources
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Certificate
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Receive an official certificate upon completion
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to start?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Register for a free trial lesson and experience our teaching methods
            </p>
            <Button
              onClick={() => onOpenFreeLesson(course.id)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-12 h-16"
            >
              {t.registerFree}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
