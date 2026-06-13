import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './lib/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { FreeLessonModal } from './components/layout/FreeLessonModal';
import { SEOHead } from './components/layout/SEOHead';

const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Results = lazy(() => import('./pages/Results'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

export default function App() {
  const [isFreeLessonOpen, setIsFreeLessonOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>();

  const handleOpenFreeLesson = (courseId?: string) => {
    setSelectedCourse(courseId);
    setIsFreeLessonOpen(true);
  };

  const handleCloseFreeLesson = () => {
    setIsFreeLessonOpen(false);
    setSelectedCourse(undefined);
  };

  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header onOpenFreeLesson={() => handleOpenFreeLesson()} />

            <main className="flex-grow">
              <Suspense fallback={<div className="min-h-screen pt-24 flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>}>
                <Routes>
                  <Route path="/" element={<><SEOHead pageKey="home" /><Home onOpenFreeLesson={handleOpenFreeLesson} /></>} />
                  <Route path="/courses" element={<><SEOHead pageKey="courses" /><Courses onOpenFreeLesson={handleOpenFreeLesson} /></>} />
                  <Route path="/courses/:courseId" element={<><SEOHead pageKey="courseDetail" /><CourseDetail onOpenFreeLesson={handleOpenFreeLesson} /></>} />
                  <Route path="/results" element={<><SEOHead pageKey="results" /><Results /></>} />
                  <Route path="/contact" element={<><SEOHead pageKey="contact" /><Contact /></>} />
                  <Route path="/privacy-policy" element={<><SEOHead pageKey="privacy" /><PrivacyPolicy /></>} />
                  <Route path="/terms-of-service" element={<><SEOHead pageKey="terms" /><TermsOfService /></>} />
                </Routes>
              </Suspense>
            </main>

            <Footer />
            <FloatingActions />

            <FreeLessonModal
              isOpen={isFreeLessonOpen}
              onClose={handleCloseFreeLesson}
              preselectedCourse={selectedCourse}
            />

            <Toaster position="top-right" richColors />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}