import { Hero } from '../components/sections/Hero';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { CoursesSection } from '../components/sections/CoursesSection';
import { FAQ } from '../components/sections/FAQ';
import { CTASection } from '../components/sections/CTASection';
import { VideoCarousel } from '../components/sections/VideoCarousel';
import { AboutSection } from '../components/sections/AboutSection';
import { SocialLinks } from '../components/sections/SocialLinks';
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

  const reviewsTitle = language === 'uz' ? 'Fikr va mulohazalar' : language === 'ru' ? 'Отзывы и мнения' : 'Reviews & Testimonials';
  const reviewsSubtitle = language === 'uz' ? "O'quvchilarimiz o'z tajribalari haqida gapirmoqda" : language === 'ru' ? 'Наши студенты рассказывают о своём опыте' : 'Our students share their experiences';

  const parentsTitle = language === 'uz' ? 'Ota-onalar uchun tavsiyalar va Yangiliklar' : language === 'ru' ? 'Советы для родителей и Новости' : 'Advice for Parents & News';
  const parentsSubtitle = language === 'uz' ? "Ota-onalar uchun foydali ma'lumotlar" : language === 'ru' ? 'Полезная информация для родителей' : 'Useful information for parents';

  return (
    <div className="pb-20">
      <Hero onOpenFreeLesson={onOpenFreeLesson} />
      <AboutSection />
      <WhyChooseUs />
      <SocialLinks />
      <CoursesSection onOpenFreeLesson={onOpenFreeLesson} />
      <VideoCarousel
        title={reviewsTitle}
        subtitle={reviewsSubtitle}
        videoIds={REVIEWS_VIDEO_IDS}
        autoScroll={true}
      />
      <CTASection onOpenFreeLesson={onOpenFreeLesson} />
      <VideoCarousel
        title={parentsTitle}
        subtitle={parentsSubtitle}
        videoIds={PARENTS_VIDEO_IDS}
        autoScroll={true}
      />
      <FAQ />
    </div>
  );
}
