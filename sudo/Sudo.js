// const path = require(`path`);

//                           Lasse                 Jacob                  Rasmus
const moderatorIds = [`187542518659809280`, `246647153865392138`, `251059000668323840`]; // Discord IDs (msg.member.id)

// This class handles commands which are only available to the moderators of the server
class Sudo {
  constructor(msg, argv) {
    this.msg = msg;
    this.argv = argv;
  }

  handle() {
    if (isModerator(this.msg.member.id)) {
      switch (this.argv[1]) {
        case `ping`: this.msg.reply(`Glorified pong!`); break; // FIXME: Should be removed in the future
        default: sendErrorMsg(this.msg);                break;
      }
    }
    else {
      this.msg.reply(`Unauthorized.`);
    }
  }
}

function sendErrorMsg(msg) {
  msg.reply(`Invalid sudo command. See ${global.prefix}help for a list of available commands.`);
}

// Returns boolean. Returns true if the user is a moderator.
function isModerator(userId) {
  return undefined !== moderatorIds.find((modId) => modId === userId);
}

module.exports = Sudo;
