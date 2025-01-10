const axios = require('axios');  // Add axios for fetching remote JSON
const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
    pattern: "quote",  // The new command pattern
    desc: "Get a random motivational quote with emoji.",
    category: "main",
    react: "🍀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetch quotes and emojis from the remote URL
        const quoteResponse = await axios.get('https://exsam-countdown.pages.dev/masseg/quotes.json');
        
        // Assuming the JSON response has a structure like this:
        const quotes = quoteResponse.data.quotes;

        // Select a random quote and emoji from the array
        const randomQuoteObject = quotes[Math.floor(Math.random() * quotes.length)];

        // Send the selected random quote along with its emoji
        await conn.sendMessage(from, { 
            text: `${randomQuoteObject.quote} ${randomQuoteObject.emoji}` 
        });
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
