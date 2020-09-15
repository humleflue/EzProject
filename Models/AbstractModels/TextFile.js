const fs = require(`fs`);

const Model = require(`./Model`);

// This is an abstract class
class TextFile extends Model {
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

  async appendFile(filePath, data) {
    try {
      await fsAppendFilePromisified(filePath, data);
      this.msg.reply(`${this.constructor.name}: \`${data}\` saved successfully!`);
    }
    catch (err) {
      console.log(err);
      this.msg.reply(`Sorry. Something went wrong.`);
    }
  }
}

module.exports = TextFile;

async function fsAppendFilePromisified(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, (err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve();
      }
    });
  });
}
