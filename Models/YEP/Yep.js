const Model = require(`./../AbstractModels/Model`);

class Yep extends Model {
  handle() {
    if (this.msg.author.bot === false) {
      const yep = global.bot.emojis.cache.find((emoji) => emoji.name === `YEP`);
      this.msg.channel.send(`${yep}`);
    }
  }
}

module.exports = Yep;
