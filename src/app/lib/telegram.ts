// Telegram Bot Integration Utility

export interface TelegramMessage {
  fullName: string;
  phone: string;
  message?: string;
  course?: string;
  type: 'contact' | 'free-lesson';
}

// Telegram bot credentials
const TELEGRAM_BOT_TOKEN = '8751470623:AAHONN5hJz7k04_TGoC0GUBtKZk9eDMDnJI';
const TELEGRAM_CHAT_ID = '6047410688';

export async function sendToTelegram(data: TelegramMessage): Promise<boolean> {
  try {
    const text = typeof data.message === 'string' && data.message.includes('<b>')
      ? data.message // Agar message HTML formatda bo'lsa, to'g'ridan-to'g'ri ishlatamiz
      : formatMessage(data); // Aks holda format qilamiz

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

    const result = await response.json();

    if (!result.ok) {
      console.error('Telegram API error:', result);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Telegram send error:', error);
    return false;
  }
}

function formatMessage(data: TelegramMessage): string {
  const emoji = data.type === 'free-lesson' ? '📚' : '📧';
  const title = data.type === 'free-lesson' ? 'BEPUL DARSGA YOZILISH' : 'KONTAKT FORMA';

  let message = `${emoji} <b>${title}</b>\n\n`;
  message += `👤 <b>Ism:</b> ${data.fullName}\n`;
  message += `📱 <b>Telefon:</b> ${data.phone}\n`;

  if (data.course) {
    message += `📖 <b>Kurs:</b> ${data.course}\n`;
  }

  if (data.message && !data.message.includes('<b>')) {
    message += `\n💬 <b>Xabar:</b>\n${data.message}\n`;
  }

  message += `\n⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}`;

  return message;
}
