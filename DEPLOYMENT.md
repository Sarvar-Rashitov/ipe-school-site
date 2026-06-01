# Deployment Guide - IPE School Website

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via GitHub**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables:
     - `VITE_TELEGRAM_BOT_TOKEN`
     - `VITE_TELEGRAM_CHAT_ID`
   - Deploy!

3. **Deploy via CLI**
   ```bash
   vercel
   ```

### Option 2: Netlify

1. **Via GitHub**
   - Push to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Import repository
   - Build settings:
     - Build command: `pnpm build`
     - Publish directory: `dist`
   - Add environment variables in site settings

2. **Via CLI**
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

3. **Deploy**
   ```bash
   pnpm build
   pnpm deploy
   ```

### Option 4: Custom Server (VPS/Hosting)

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Upload `dist` folder** to your server

3. **Nginx Configuration Example**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## 🔐 Environment Variables

Make sure to set these on your hosting platform:

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id
```

### Setting Environment Variables

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site Settings → Build & Deploy → Environment

**GitHub Pages:**
- Use repository secrets for GitHub Actions

## 📝 Pre-Deployment Checklist

- [ ] Updated all contact information
- [ ] Added all course data
- [ ] Added teacher information
- [ ] Uploaded all images
- [ ] Configured Telegram bot
- [ ] Set environment variables
- [ ] Tested all forms
- [ ] Tested all language switches
- [ ] Tested all navigation links
- [ ] Verified mobile responsiveness
- [ ] Checked all external links
- [ ] Updated social media links

## 🎯 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format
   - Compress with TinyPNG or similar
   - Keep under 500KB

2. **Test Build**
   ```bash
   pnpm build
   pnpm preview
   ```

3. **Check Bundle Size**
   - Review build output
   - Ensure total size is reasonable

### After Deployment

1. **Test Lighthouse Score**
   - Aim for 90+ on all metrics
   - Check mobile performance

2. **Verify Forms Work**
   - Test free lesson registration
   - Test contact form
   - Verify Telegram messages arrive

3. **Test All Browsers**
   - Chrome/Edge
   - Firefox
   - Safari
   - Mobile browsers

## 🔧 Troubleshooting

### Forms Not Sending to Telegram

1. Check environment variables are set correctly
2. Verify bot token is valid
3. Ensure chat ID is correct
4. Check browser console for errors

### Images Not Loading

1. Verify image paths are correct
2. Check images exist in `public/images/`
3. Ensure file extensions match

### Routing Issues (404 on Refresh)

**Netlify:** Create `public/_redirects` file:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 📱 Custom Domain Setup

### Vercel
1. Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Domain Settings → Add custom domain
2. Update DNS records
3. Enable HTTPS

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployment:
- Push to `main` branch → Auto-deploy
- Pull requests → Preview deployments

## 🌐 DNS Configuration Example

For custom domain `ipeschool.uz`:

**A Record:**
```
@    A    76.76.21.21  (Your hosting IP)
```

**CNAME Record:**
```
www  CNAME  your-site.vercel.app
```

## 📊 Analytics (Optional)

Consider adding:
- Google Analytics
- Vercel Analytics
- Umami Analytics

Add tracking code to `public/index.html` or use a React integration.

## ✅ Post-Deployment

1. Submit sitemap to Google Search Console
2. Test all functionality in production
3. Monitor Telegram form submissions
4. Set up error monitoring (Sentry, etc.)

Good luck with your deployment! 🎉
