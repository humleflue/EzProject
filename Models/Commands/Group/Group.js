const path = require(`path`);

const TextFile = require(`../../AbstractModels/TextFile`);

const groupInfoPath = path.join(__dirname, `groupInfo.json`);

class Group extends TextFile {
  async handle() {
    const data = await this.readJSON(groupInfoPath);

    if (data[this.argv[1]] !== undefined) {
      this.msg.reply(`Your group's ${this.argv[1]} is ${data[this.argv[1]]}`);
    }
    else {
      this.msg.sendInvalidCommandReply();
    }
  }
}

module.exports = Group;
