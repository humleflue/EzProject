const TextFile = require(`../../AbstractModels/TextFile`);
const path     = require(`path`);

const filesDir = `Files`; // Absolute path

class Mail extends TextFile {
  handle() {
    const filePath = path.join(filesDir, `Mails.txt`);

    if (isEmail(this.argv[1])) {
      this.appendFile(filePath, `${this.argv[1]}\n`);
    }
    else if (this.argv[1] === `list`) {
      this.printFile(filePath, `Here's all the mails of the group members:`);
    }
    else {
      this.msg.sendInvalidCommandReply();
    }
  }
}

// Determines if the string is an email address
function isEmail(string) {
  const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regEx.test(string);
}

module.exports = Mail;
