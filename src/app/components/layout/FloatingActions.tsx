import { motion } from 'motion/react';
import { Phone, Send } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

export function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Telegram Button */}
      <motion.a
        href="https://t.me/ipeschool"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Telegram"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
      >
        <Send className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+998555885000"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={t.callUs}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Phone className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </div>
  );
}
