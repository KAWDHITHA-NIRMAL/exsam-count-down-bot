const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "NHRWgbrC#fvtzo7FSO1XHOAyGZbRwxq2sOXtX10CSkOoipHQtrXg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/198a322e8cc0f2bd6cba2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi QUEEN-KYLIE-MD Is Online Now 💻\n*💻 Owner* - QUEEN-KYLIE-MD\n\n*💻 Owner Number* -94765527900",
SUDO_NB: process.env.SUDO_NB || "94729787750",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
AUTO_VOICE:"false"
};
