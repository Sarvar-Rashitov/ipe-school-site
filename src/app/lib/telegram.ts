// Telegram Bot Integration Utility
export interface TelegramMessage {
  fullName: string;
  phone: string;
  message?: string;
  course?: string;
  type: 'contact' | 'free-lesson';
}

// Telegram bot credentials (from environment variables)
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';

// Validate credentials on module load
const credentialsValid = !!(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID);
const isProduction = import.meta.env.PROD;

// Enhanced logging
if (!credentialsValid) {
  const message = `⚠️ Telegram credentials not configured.`;
  if (isProduction) {
    console.warn(message, 'Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in Netlify Environment Variables');
  } else {
    console.warn(message, 'Set them in .env.local for development');
  }
}

console.log('🔧 Telegram Configuration:', {
  botTokenConfigured: !!TELEGRAM_BOT_TOKEN,
  chatIdConfigured: !!TELEGRAM_CHAT_ID,
  environment: isProduction ? 'production' : 'development',
});

// Helper function to prevent user strings from crashing the Telegram HTML parser
const escapeHTML = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

export async function sendToTelegram(data: TelegramMessage): Promise<boolean> {
  try {
    // Check if credentials are available
    if (!credentialsValid) {
      console.error('❌ Telegram credentials are missing. Please configure environment variables.');
      return false;
    }

    // Validate input data
    if (!data.fullName?.trim() || !data.phone?.trim()) {
      console.error('❌ Invalid message data:', { 
        fullName: data.fullName, 
        phone: data.phone,
        hasFullName: !!data.fullName?.trim(),
        hasPhone: !!data.phone?.trim(),
      });
      return false;
    }

    // Always run formatting through the secure formatMessage method
    const text = formatMessage(data);

    console.log('📤 Sending message to Telegram...', { 
      chat_id: TELEGRAM_CHAT_ID ? '***' : 'MISSING',
      type: data.type,
    });

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      }
    );

    // Check if response is ok
    if (!response.ok) {
      console.error('❌ Telegram API HTTP Error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('❌ Response body:', errorText);
      return false;
    }

    const result = await response.json();

    if (!result.ok) {
      console.error('❌ Telegram API error:', {
        error_code: result.error_code,
        description: result.description,
      });
      return false;
    }

    console.log('✅ Message sent successfully to Telegram');
    return true;
  } catch (error) {
    console.error('❌ Telegram send error:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : 'No stack trace',
    });
    return false;
  }
}

function formatMessage(data: TelegramMessage): string {
  const emoji = data.type === 'free-lesson' ? '📚' : '📧';
  const title = data.type === 'free-lesson' ? 'BEPUL DARSGA YOZILISH' : 'KONTAKT FORMA';

  let message = `${emoji} **${title}**\n\n`;
  message += `👤 **Ism:** ${escapeHTML(data.fullName)}\n`;
  message += `📱 Telefon:** ${escapeHTML(data.phone)}\n`;

  if (data.course) {
    message += `📖 **Kurs:** ${escapeHTML(data.course)}\n`;
  }

  if (data.message) {
    message += `\n💬 **Xabar:**\n${escapeHTML(data.message)}\n`;
  }

  message += `\n⏰ **Vaqt:** ${new Date().toLocaleString('uz-UZ')}`;

  return message;
}