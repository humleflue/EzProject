const Model = require(`../../AbstractModels/Model`);

class Yep extends Model {
  handle() {
    const yep = global.bot.emojis.cache.find((emoji) => emoji.name === `YEP`);
    // this.msg.channel.send(`${yep}`);
    this.msg.react(yep);
  }
}

module.exports = Yep;
