const path     = require(`path`);

const TextFile = require(`../../AbstractModels/TextFile`);
const isEmail = require(`../../Helpers/isEmail`);

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

module.exports = Mail;
