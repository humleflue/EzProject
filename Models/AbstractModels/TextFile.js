const fs = require(`fs`);

const Model = require(`./Model`);

// This is an abstract class
class TextFile extends Model {
  async readFile(filePath) {
    return fsReadFilePromisified(filePath);
  }

  async readJSON(filePath) {
    const data = await fsReadFilePromisified(filePath);
    return JSON.parse(data);
  }

  async printFile(filePath, msgToUser = ``) {
    try {
      const data = await fsReadFilePromisified(filePath);
      this.msg.reply(`${msgToUser}\n\`\`\`${data}\`\`\``);
    }
    catch (err) {
      console.log(err);
      this.msg.reply(`Sorry. Something went wrong.`);
    }
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

async function fsReadFilePromisified(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, `utf8`, (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
}
