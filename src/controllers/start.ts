import { Context } from 'grammy';

const startController = async (ctx: Context) => {
    await ctx.reply('<b>Welcome</b> to the bot', { parse_mode: 'HTML' });
};

export { startController };
