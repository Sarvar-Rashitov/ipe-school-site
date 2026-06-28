import { Hero } from '../components/sections/Hero';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { CoursesSection } from '../components/sections/CoursesSection';
import { FAQ } from '../components/sections/FAQ';
import { VideoMarquee } from '../components/sections/VideoMarquee';
import { AboutSection } from '../components/sections/AboutSection';
import { useLanguage } from '../lib/LanguageContext';

interface HomeProps {
  onOpenFreeLesson: (courseId?: string) => void;
}

const REVIEWS_VIDEO_IDS = [
  'YWyPlHCHRPk',
  'GOYJpnsq5ls',
  '83bN5ECyLfk',
  'VTDVTbA92xU',
  'BTKaDFzehxw',
  '0x46JdQJcS8',
  'ZeqRBSfNQWA',
  'GBmBgas0sr0',
];

const PARENTS_VIDEO_IDS = [
  'i__SBkzRgc8',
  'knt2c0zaHbw',
  'r6ZY2RWni-4',
  'mjtif4N4Xnk',
  'm9WDTBJ70BQ',
  'IFQH3dG4POU',
  'ZlLS6NK-Mi8',
];

export function Home({ onOpenFreeLesson }: HomeProps) {
  const { language } = useLanguage();

  const videosTitle = language === 'uz' 
    ? 'Fikr-mulohazalar va Foydali maslahatlar' 
    : language === 'ru' 
    ? 'Отзывы и Полезные советы' 
    : 'Reviews & Useful Tips';
  
  const videosSubtitle = language === 'uz' 
    ? "O'quvchilarimiz va ota-onalar uchun foydali ma'lumotlar" 
    : language === 'ru' 
    ? 'Наши студенты и полезная информация для родителей' 
    : 'Our students and useful information for parents';

  return (
    <div className="pb-20">
      <Hero onOpenFreeLesson={onOpenFreeLesson} />
      <AboutSection />
      <WhyChooseUs />
      <CoursesSection onOpenFreeLesson={onOpenFreeLesson} />
      <VideoMarquee
        title={videosTitle}
        subtitle={videosSubtitle}
        videoIds={[...REVIEWS_VIDEO_IDS, ...PARENTS_VIDEO_IDS]}
      />
      <FAQ />
    </div>
  );
}

export default Home;
