const fs = require(`fs`);

// This is an abstract class
class Model {
  constructor(msg, argv) {
    this.msg = msg;
    this.argv = argv;
  }

  printFile(filePath, msgToUser = ``) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
        this.msg.reply(`Sorry. Something went wrong.`);
      }
      else {
        this.msg.reply(`${msgToUser}\n\`\`\`${data}\`\`\``);
      }
    });
  }
}

module.exports = Model;
