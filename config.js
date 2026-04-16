const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    // මම මෙතනට ඔයාගේ RasheedX style එකට ගැළපෙන image එකක් හෝ placeholder එකක් දැම්මා
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/RasheedX/RasheedX-MD/raw/main/assets/alive.png",
    ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 RasheedX-MD Is Alive Now!* 🚀\n\n*Developer:* Rasheed\n*Prefix:* [ . ]",
    
    // ඔයාගේ Owner Number එක හරියටම තියෙනවා
    BOT_OWNER: process.env.BOT_OWNER || '94776121326',
    
    // තවත් වැදගත් සැකසුම් කිහිපයක් (Optional)
    MODE: process.env.MODE || "public",
    AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS || "true"),
    MONGODB_URI: process.env.MONGODB_URI || ""
};
