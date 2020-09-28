const path = require(`path`);

const TextFile = require(`../../AbstractModels/TextFile`);
const isEmail = require(`../../Helpers/isEmail`);

const filesDir = path.join(__dirname, `Files`);
const validGroupCommands = [`room`, `mail`, `email`, `name`];

class Group extends TextFile {
  async handle() {
    const fileDataPath = path.join(filesDir, `Group-${this.guildID}.json`);
    try {
      const fileData = await this.getFileData(fileDataPath);
      switch (this.argv[1]) {
        case `set`: this.set(fileData); break;
        case `get`: this.get(fileData); break;
        default: this.msg.sendInvalidCommandReply(); break;
      }
    }
    catch (err) {
      this.msg.reply(`Sorry. Something went wrong`);
    }
  }

  get(fileData) {
    const command = validGroupCommands.find((aCommand) => aCommand === this.argv[2]);
    if (command !== undefined) {
      this.sendGetReply(fileData);
    }
    else {
      this.msg.sendInvalidCommandReply();
    }
  }

  sendGetReply(fileData) {
    const command = this.argv[2];
    if (fileData[command] !== undefined) {
      this.msg.reply(`Your group's ${command} is \`${fileData[command]}\``);
    }
    else {
      this.msg.reply(`Your group's ${command} has not yet been set\n`
                   + `Use "${global.prefix}group set ${command} ${command}GoesHere" to set it`);
    }
  }

  async set(fileData) {
    const command = validGroupCommands.find((aCommand) => aCommand === this.argv[2]);
    const validCommand = groupCommandValidator(command, this.argv[3]);
    if (command !== undefined && validCommand !== undefined) {
      fileData[command] = this.argv[3]; // eslint-disable-line prefer-destructuring
      try {
        await this.writeJSON(this.dataFilePath, fileData);
        this.msg.reply(`Group ${command} set succesfully.`);
      }
      catch (err) {
        console.log(err, err.stack);
        this.msg.reply(`Sorry. Something went wrong.`);
      }
    }
    else {
      this.msg.sendInvalidCommandReply();
    }
  }

  async getFileData(dataFilePath) {
    try {
      const data = await this.readJSON(dataFilePath);
      return data;
    }
    catch (err) {
      if (err.code === `ENOENT`) {
        try {
          await this.writeJSON(dataFilePath, {});
          return {};
        }
        catch (writeErr) {
          return writeErr;
        }
      }
      else {
        return err;
      }
    }
  }
}

module.exports = Group;

function groupCommandValidator(commandType, commandAction) {
  let res;
  switch (commandType) {
    case `mail`: case `email`:
      if (isEmail(commandAction)) {
        res = commandType;
      }
      else {
        res = undefined;
      }
      break;
    case `room`: case `name`:
      res = commandType;
      break;
    default:
      res = undefined;
      break;
  }

  return res;
}
