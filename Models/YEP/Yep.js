const Model = require(`./../AbstractModels/Model`);

class Yep extends Model {
  handle() {
    const botId = `752966570094886981`;
    if (this.msg.author.id !== botId) {
      const yep = global.bot.emojis.cache.find((emoji) => emoji.name === `YEP`);
      this.msg.channel.send(`${yep}`);
    }
  }
}

module.exports = Yep;
