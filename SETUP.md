# IPE School - Quick Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies (Already Done)
The project dependencies are already installed.

### 2. Configure Telegram Bot

#### Step 1: Create a Telegram Bot
1. Open Telegram and search for [@BotFather](https://t.me/botfather)
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the **Bot Token** (looks like: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

#### Step 2: Get Your Chat ID
1. Search for [@userinfobot](https://t.me/userinfobot) on Telegram
2. Start a conversation with it
3. It will send you your **Chat ID** (a number like: `123456789`)

#### Step 3: Set Up Environment Variables
1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
   VITE_TELEGRAM_CHAT_ID=your_chat_id_here
   ```

### 3. Customize Content

#### Update School Contact Information
Edit these locations:
- **Phone Number**: Search for `+998901234567` in all files and replace
- **Email**: Search for `info@ipeschool.uz` and replace
- **Address**: Update in `Footer.tsx` and `Contact.tsx`
- **Social Media Links**: Update in `Footer.tsx`

#### Add Your Courses
Edit `src/app/data/courses.ts`:
```typescript
{
  id: 'your-course-id',
  title: {
    uz: 'Uzbek Title',
    ru: 'Russian Title',
    en: 'English Title',
  },
  // ... other fields
}
```

#### Add Your Teachers
Edit `src/app/data/teachers.ts` - follow the same pattern as courses.

#### Update FAQ
Edit `src/app/data/faq.ts` with your frequently asked questions.

### 4. Add Images

Place your images in the appropriate folders:
- `public/images/hero/` - Hero section images
- `public/images/courses/` - Course thumbnails
- `public/images/teachers/` - Teacher photos
- `public/images/gallery/` - Gallery images

See `public/images/PLACEHOLDER.md` for detailed image guidelines.

### 5. Run Development Server

The Vite dev server should already be running. If not:
```bash
pnpm dev
```

## 📱 Features Implemented

### ✅ Multi-Language Support
- **Languages**: Uzbek, Russian, English
- **How to switch**: Click the language button in the header
- **Cycles through**: UZ → RU → EN → UZ

### ✅ Free Lesson Registration Modal
- Opens from multiple CTAs throughout the site
- Auto-fills selected course when opened from course cards
- Sends data to Telegram bot
- Form validation with error messages
- Success/error toast notifications

### ✅ Floating Action Buttons
- **Telegram Button** (Blue): Bottom right, opens Telegram
- **Call Button** (Green): Bottom right, initiates phone call
- Always visible and accessible

### ✅ Contact Form
- Full contact page at `/contact`
- Sends messages to Telegram
- Includes contact information cards
- Map placeholder (ready for Google Maps embed)

### ✅ Responsive Navigation
- Desktop: Full navigation menu
- Mobile: Hamburger menu with smooth slide-in
- Sticky header with scroll effect

### ✅ Pages
1. **Home** (`/`)
   - Hero with animated stats
   - Why Choose Us features
   - Courses preview
   - Teachers section
   - FAQ accordion
   - CTA banner

2. **Courses** (`/courses`)
   - All courses grid
   - Detailed course cards
   - Links to individual course pages

3. **Course Detail** (`/courses/:courseId`)
   - Full course description
   - Course features
   - Info cards
   - Registration CTA

4. **Contact** (`/contact`)
   - Contact form
   - Contact information
   - Map placeholder

## 🎨 Design Features

### Premium UI Elements
- Modern gradient backgrounds
- Smooth animations with Framer Motion
- Glassmorphism effects
- Custom scrollbar
- Hover effects on all interactive elements
- Loading states for forms
- Toast notifications

### Color Scheme
- **Primary**: Blue (#2563eb) to Purple (#9333ea) gradient
- **Background**: White with subtle colored gradients
- **Text**: Gray scale for hierarchy
- **Accents**: Green for call buttons

## 🔧 Customization Tips

### Change Colors
Edit `src/styles/theme.css` for theme colors.

### Add New Sections
1. Create component in `src/app/components/sections/`
2. Import and use in the appropriate page

### Update Translations
Edit `src/app/lib/translations.ts` - all text is centralized here.

## 📞 Support

If you need help:
1. Check the README.md for detailed documentation
2. Review the code comments
3. All data is in `src/app/data/` folder - easy to update

## 🎯 Next Steps

1. ✅ Configure Telegram bot (.env file)
2. ✅ Update contact information
3. ✅ Add your courses and teachers
4. ✅ Upload images
5. ✅ Test the website
6. ✅ Deploy (Vercel, Netlify, etc.)

Happy customizing! 🎉
