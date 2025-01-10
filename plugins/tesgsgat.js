const cron = require('node-cron');
const { cmd, commands } = require('../command');

// Schedule the task to run every day at 7:15 PM
cron.schedule('15 19 * * *', async () => {
    try {
        const chatId = 'your-chat-id-or-group-id'; // Replace with your chat ID or group ID
        const message = 'Good evening! This is your daily message at 7:15 PM.'; // Customize the message

        // Send the message
        await conn.sendMessage(chatId, { text: message });
        console.log('Daily message sent at 7:15 PM!');
    } catch (e) {
        console.error('Error sending daily message:', e);
    }
}, {
    scheduled: true,
    timezone: "Your/Timezone" // Example: "Asia/Kolkata" or "America/New_York"
});

// Optional: You can set up a command to check if the cron job is running.
cmd({
    pattern: 'checkcron',
    desc: 'Check if the daily cron job is running.',
    category: 'main',
    react: '✅',
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {
    reply('The daily cron job is active and will send a message at 7:15 PM every day.');
});
