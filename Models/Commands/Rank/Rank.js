const Model = require(`../../AbstractModels/Model`);

class Rank extends Model {
  handle() {
    this.msg.reply(`Nope.`);
    this.msg.member.kick();
    this.msg.member.send(`You just got yeeted boiii. YAAAAA YEEEEEEEET.`);
  }
}

module.exports = Rank;
