import { Context } from 'grammy';
import db from '../database';
const myChatMemberController = async (ctx: Context) => {
    const chat_member = ctx.update['my_chat_member']?.new_chat_member;

    await db('users')
        .where({ chat_id: ctx.chatId?.toString() })
        .update({ status: chat_member?.status });
};

export { myChatMemberController };
