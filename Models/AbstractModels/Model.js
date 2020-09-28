class Model {
  constructor(msg, argv) {
    this.msg = msg;
    this.argv = argv;
    this.guildID = msg.guild.id;
  }
}

module.exports = Model;
