import { messageController, myChatMemberController } from '../controllers';
import { bot } from '../core/bot';

bot.on('message', messageController);
bot.on('my_chat_member', myChatMemberController);
