const fs = require(`fs`);

const Model = require(`./Model`);

// This is an abstract class
class TextFile extends Model {
  async readFile(filePath) {
    return fsReadFilePromisified(filePath);
  }

  async writeFile(filePath, data) {
    return fsWriteFilePromisified(filePath, data);
  }

  async readJSON(filePath) {
    const data = await fsReadFilePromisified(filePath);
    return JSON.parse(data);
  }

  async writeJSON(filePath, object) {
    const jsonData = JSON.stringify(object);
    await fsWriteFilePromisified(filePath, jsonData);
  }

  async appendFile(filePath, data) {
    await fsAppendFilePromisified(filePath, data);
  }

  async printFile(filePath, msgToUser = ``) {
    const data = await fsReadFilePromisified(filePath);
    this.msg.reply(`${msgToUser}\n\`\`\`${data}\`\`\``);
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

async function fsWriteFilePromisified(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, { flag: `w` }, (err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve();
      }
    });
  });
}
