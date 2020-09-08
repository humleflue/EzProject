const Model = require(`../Model`);
const path  = require(`path`);
const fs    = require(`fs`);

const filesDir = path.join(__dirname, `..`, `..`, `Files`);

class Mail extends Model {
  handle() {
    const filePath = path.join(filesDir, `Mails.txt`);

    if (isEmail(this.argv[1])) {
      this.appendFile(filePath, this.argv[1]);
    }
    else if (this.argv[1] === `list`) {
      this.printFile(filePath, `Here's all the mails of the group members:`); // In Model
    }
    else {
      this.msg.sendErrorReply();
    }
  }
}

// Determines if the string is an email address
function isEmail(string) {
  const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regEx.test(string);
}

module.exports = Mail;
