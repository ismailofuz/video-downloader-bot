import { Bot } from 'grammy';
import * as dotenv from 'dotenv';
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN || '');

export { bot };
