const path     = require(`path`);

const TextFile = require(`../../AbstractModels/TextFile`);
const isEmail = require(`../../Helpers/isEmail`);

const filesDir = `Files`; // Absolute path

class Mail extends TextFile {
  async handle() {
    const filePath = path.join(filesDir, `Mails.txt`);

    if (isEmail(this.argv[1])) {
      const mail = this.argv[1];
      try {
        await this.appendFile(filePath, `${mail}\n`);
        this.msg.reply(`Mail \`${mail}\` saved succesfully!`);
      }
      catch (err) {
        console.log(err, err.stack);
        this.msg.reply(`Sorry! Something went wrong.`);
      }
    }
    else if (this.argv[1] === `list`) {
      await this.printFile(filePath, `Here's all the mails of the group members:`);
    }
    else {
      this.msg.sendInvalidCommandReply();
    }
  }
}

module.exports = Mail;
