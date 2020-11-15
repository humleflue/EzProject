const Model = require(`../../AbstractModels/Model`);

// For testing on Lasses PC
const patrickID = `187542518659809280`;
const oopChannelID = `694592320947093516`;

// const patrickID = `139033126864158721`;
// const oopChannelID = `751842041880903701`;

class OopQuestion extends Model {
  handle() {
    const msgContainsPatrick = this.msg.content.includes(patrickID);
    if (this.msg.channel.id === oopChannelID && !msgContainsPatrick && this.msg.author.id !== patrickID) {
      // Send a message in the channel tagging patrick
      // this.msg.reply(`Looks like you're asking a question in the OOP-channel without tagging Patrick!\n`
      //              + `Wtf? He's the guy who knows everything... Let me help you by tagging him: <@${patrickID}>.`);

      // Send a pb to patrick
      global.bot.users.cache.get(patrickID).send(
        `Yo bro. Der er vidst en, som har et OOP-relateret spørgsmål i din studiegruppe.\n`
      + `Du bør nok liiiiige få fingeren ud og hjælpe ham/hende`,
      );
    }
  }
}

module.exports = OopQuestion;
