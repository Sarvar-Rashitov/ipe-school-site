# Netlify Environment Variables Setup

## Problem
Production build-da Telegram credentials mavjud bo'lmagani uchun form submissions ishlamaydi.

`.env.local` faylini Netlify production-da o'qiy olmaydi chunki:
- `.env.local` `.gitignore`-da mavjud
- Git-ga commit bo'lmaydi
- Netlify build environment-da accessible emas

## Solution

### Netlify Dashboard-da Setup

1. **Netlify-ga login qilin**
   - https://app.netlify.com/ ochgin

2. **Site-ni tanlang**
   - "gilded-banoffee-66598f" (yoki sizning site name-i)

3. **Environment Variables qo'shing**
   - `Settings` → `Environment` → `Environment variables`

4. **Quyidagi variables qo'shing:**
   ```
   Key: VITE_TELEGRAM_BOT_TOKEN
   Value: 8751470623:AAHONN5hJz7k04_TGoC0GUBtKZk9eDMDnJI
   
   Key: VITE_TELEGRAM_CHAT_ID
   Value: 6047410688 (yoki yangi chat ID)
   ```

5. **Save qilin**

6. **Site-ni rebuild qilin**
   - `Deploys` tab-da → `Trigger deploy` → `Deploy site`

### Local Development

`.env.local` faylida quyidagini qo'shing:
```
VITE_TELEGRAM_BOT_TOKEN=8751470623:AAHONN5hJz7k04_TGoC0GUBtKZk9eDMDnJI
VITE_TELEGRAM_CHAT_ID=6047410688
```

## Verification

Production-da form submit qilganda console-da quyidagini ko'rishingiz kerak:

✅ **Muvaffaqiyatli:**
```
🔧 Telegram Configuration: {
  botTokenConfigured: true
  chatIdConfigured: true
  environment: "production"
}
📤 Sending message to Telegram...
✅ Message sent successfully to Telegram
```

❌ **Xato:**
```
⚠️ Telegram credentials not configured. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in Netlify Environment Variables
```

## Troubleshooting

1. **"Telegram credentials not configured"** - Environment variables Netlify-da qo'shilgan emas
2. **"Telegram API error"** - Bot token yoki chat ID noto'g'ri
3. **"HTTP Error 401"** - Bot token invalid
4. **"HTTP Error 400"** - Chat ID noto'g'ri yoki bot berilgan chat-da mavjud emas

Qaysi xato chiqsa, **browser console-dan xata message-ni copy qilib share qiling!**
