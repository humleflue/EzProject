const Model = require(`../../AbstractModels/Model`);

const grouproom = `2.1.10`;

class GroupRoom extends Model {
  handle() {
    this.msg.reply(`Your group room is: ${grouproom}`);
  }
}

module.exports = GroupRoom;
