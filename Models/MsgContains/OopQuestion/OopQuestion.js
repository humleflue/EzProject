const Model = require(`../../AbstractModels/Model`);

const patrickID = `139033126864158721`;
const oopChannelID = `751842041880903701`;

class OopQuestion extends Model {
  handle() {
    const msgContainsPatrick = this.msg.content.includes(patrickID);
    if (this.msg.channel.id === oopChannelID && !msgContainsPatrick) {
      this.msg.channel.send(`Looks like you're asking a question in the OOP-channel without tagging Patrick!\n`
                          + `Wtf? He's the guy who knows everything... Let me help you by tagging him: <@${patrickID}>.`);
    }
  }
}

module.exports = OopQuestion;
