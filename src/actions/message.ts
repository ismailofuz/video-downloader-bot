import { messageController } from '../controllers';
import { bot } from '../core/bot';

bot.on('message', messageController);
