const Model = require(`../Model`);
const path  = require(`path`);
const fs    = require(`fs`);

const filesDir = path.join(__dirname, `..`, `..`, `Files`);

class Mail extends Model {
  handle() {
    const filePath = path.join(filesDir, `Mails.txt`);

    if (isEmail(this.argv[1])) {
      this.saveEmail(this.argv[1], filePath);
    }
    else if (this.argv[1] === `list`) {
      this.printFile(filePath, `Here's all the mails of the group members:`); // In Model
    }
    else {
      global.sendErrorMsg(this.msg);
    }
  }

  saveEmail(mail, filePath) {
    fs.appendFile(filePath, `${mail}\n`, (err) => {
      if (err) {
        console.log(err);
        this.msg.reply(`Sorry. Something went wrong.`);
      }
      else {
        this.msg.reply(`Mail: \`${mail}\` saved successfully!`);
      }
    });
  }
}

// Determines if the string is an email address
function isEmail(string) {
  const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regEx.test(string);
}

module.exports = Mail;
