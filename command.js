var commands = [];
var replyHandlers = [];

/**
 * Register a new command or a reply handler.
 * @param {Object} info - Command configuration.
 * @param {Function} func - The function to execute.
 */
function cmd(info, func) {
    const data = info;
    data.function = func;

    // Default configuration fields
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!data.desc) data.desc = '';
    if (!data.category) data.category = 'misc';
    if (!data.filename) data.filename = "Not Provided";
    if (!data.use) data.use = ''; // Command එක පාවිච්චි කරන විදිහ (Usage)
    if (!data.fromMe) data.fromMe = false; // Owner පමණක්ද කියන එක

    // Pattern එකක් නැතිව filter එකක් පමණක් ඇත්නම් එය reply handler එකක් ලෙස සලකයි
    if (!data.pattern && typeof data.filter === "function") {
        replyHandlers.push(data);
    } else {
        commands.push(data);
    }

    return data;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands,
    replyHandlers,
};
