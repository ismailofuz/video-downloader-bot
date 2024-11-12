import { Context } from 'grammy';
import db from '../database';

const startController = async (ctx: Context) => {
    const chat_id = ctx.chatId;

    await db('users')
        .insert({
            chat_id,
            first_name: ctx.from?.first_name.substring(0, 100),
            last_name: ctx.from?.last_name?.substring(0, 100),
        })
        .onConflict('chat_id')
        .merge();

    await ctx.reply('Botga xush kelibsiz, menga instgram havola linkini yuboring', { parse_mode: 'HTML' });
};

export { startController };
