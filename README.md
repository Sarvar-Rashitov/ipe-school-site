# IPE School - Premium Educational Center Website

A modern, conversion-focused educational center website built with React, TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion.

## Features

- 🌐 **Multi-language Support** (Uzbek, Russian, English) - Click to cycle through languages
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎨 **Modern Premium Design** - SaaS-inspired UI with smooth animations
- 📧 **Telegram Integration** - Form submissions sent directly to Telegram
- 🎯 **Conversion Optimized** - Multiple CTAs and free lesson registration
- ⚡ **High Performance** - Optimized for speed and SEO

## Pages

- **Home** - Hero, Features, Courses, Teachers, FAQ, CTA
- **Courses** - All courses with detailed information
- **Course Detail** - Individual course pages with full descriptions
- **Contact** - Contact form with Telegram integration

## Tech Stack

- React 18.3
- TypeScript
- Vite 6
- Tailwind CSS 4
- Shadcn UI
- Framer Motion
- React Router
- React Hook Form
- Zod Validation
- Sonner (Toast Notifications)

## Setup

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Configure Telegram Bot**
   - Create a Telegram bot using [@BotFather](https://t.me/botfather)
   - Get your bot token
   - Get your chat ID (you can use [@userinfobot](https://t.me/userinfobot))
   - Copy `.env.example` to `.env` and fill in your credentials:
     ```
     VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
     VITE_TELEGRAM_CHAT_ID=your_chat_id_here
     ```

3. **Run Development Server**
   ```bash
   pnpm dev
   ```

## Features Breakdown

### Language Switcher
- Single button in header that cycles through UZ → RU → EN
- All content automatically updates

### Free Lesson Registration
- Modal form accessible from multiple CTAs
- Pre-fills selected course when opened from course cards
- Sends data to Telegram

### Floating Action Buttons
- Bottom right corner: Telegram and Call buttons
- Always visible for easy access

### Contact Form
- Full contact page with form
- Sends messages to Telegram
- Loading states and success/error toasts

## Customization

### Update School Information

Edit the following files:
- `src/app/data/courses.ts` - Course information
- `src/app/data/teachers.ts` - Teacher profiles
- `src/app/data/faq.ts` - FAQ items
- `src/app/data/features.ts` - Why Choose Us features

### Update Contact Information

Edit in:
- `src/app/components/layout/Footer.tsx`
- `src/app/pages/Contact.tsx`

### Update Translations

Edit `src/app/lib/translations.ts`

## Performance

The website is optimized for:
- Fast initial load
- Smooth animations
- SEO-friendly structure
- Mobile performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2026 IPE School. All rights reserved.
