const Model = require(`../../AbstractModels/Model`);

class Rank extends Model {
  handle() {
    this.msg.reply(`Nope.`);
    this.msg.member.kick();
  }
}

module.exports = Rank;
