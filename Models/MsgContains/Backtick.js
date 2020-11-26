const Model = require(`../AbstractModels/Model`);

class Backtick extends Model {
  handle() {
    const POGGERS = global.bot.emojis.cache.find((emoji) => emoji.name === `POGGERS`);
    this.msg.react(POGGERS);
  }
}

module.exports = Backtick;
