const fs = require(`fs`);

// This is an abstract class
class Model {
  constructor(msg, argv) {
    this.msg = msg;
    this.argv = argv;
  }

  printFile(filePath, msgToUser = ``) {
    fs.readFile(filePath, `utf8`, (err, data) => {
      if (err) {
        console.log(err);
        this.msg.reply(`Sorry. Something went wrong.`);
      }
      else {
        this.msg.reply(`${msgToUser}\n\`\`\`${data}\`\`\``);
      }
    });
  }

  appendFile(filePath, stringToAppend) {
    fs.appendFile(filePath, `${stringToAppend}\n`, (err) => {
      if (err) {
        console.log(err);
        this.msg.reply(`Sorry. Something went wrong.`);
      }
      else {
        this.msg.reply(`${this.constructor.name}: \`${stringToAppend}\` saved successfully!`);
      }
    });
  }
}

module.exports = Model;
