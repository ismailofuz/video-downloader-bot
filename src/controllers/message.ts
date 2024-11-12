import { Context } from 'grammy';
import axios from 'axios';

const checkValidUrl = (url: string) => {
    const regex =
        /^https:\/\/www\.instagram\.com\/reel\/[A-aZ-z0-9]+(\/|\?|&|#|$)/;
    return regex.test(url);
};

const downloadInstagramReel = async (url: string, ctx: Context) => {
    const options = {
        method: 'GET',
        url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
        params: {
            url,
        },
        headers: {
            'x-rapidapi-key': process.env.Rapid_API_KEY,
            'x-rapidapi-host':
                'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        await ctx.replyWithVideo(response.data.media, {
            caption: `Video @videosaves_robot orqali yuklab olindi`,
        });
    } catch (error) {
        console.error(error);
        ctx.reply("Sorry, I couldn't download the video");
    }
};

const messageController = async (ctx: Context) => {
    const message = ctx.message?.text as string;
    const isvalidUrl = checkValidUrl(message);
    if (isvalidUrl) {
        await ctx.reply('Videoni yuklayabman, iltimos kuting...');
        await ctx.replyWithChatAction('upload_video');
        await downloadInstagramReel(message, ctx);
    }
};

export { messageController };
