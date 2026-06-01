import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './lib/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { FreeLessonModal } from './components/layout/FreeLessonModal';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { Contact } from './pages/Contact';
import { Results } from './pages/Results';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Team } from './pages/Team';

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
              <Routes>
                <Route path="/" element={<Home onOpenFreeLesson={handleOpenFreeLesson} />} />
                <Route path="/courses" element={<Courses onOpenFreeLesson={handleOpenFreeLesson} />} />
                <Route path="/courses/:courseId" element={<CourseDetail onOpenFreeLesson={handleOpenFreeLesson} />} />
                <Route path="/team" element={<Team />} />
                <Route path="/results" element={<Results />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
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