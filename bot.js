// Dependencies
const Discord = require(`discord.js`);
global.bot    = new Discord.Client(); // Is saved in a global variable, so it's available throughout the modules
const fs      = require(`fs`);
// const path    = require(`path`);

const Mail = require(`./Models/mail/Mail`);

// Variables
const { token } = JSON.parse(fs.readFileSync(`token.json`));
const prefix = `!`;
global.prefix = prefix;

// Connect to the discord api
global.bot.login(token);

// Ready check
global.bot.on(`ready`, () => {
  console.log(`Logged in as ${global.bot.user.tag}!`); // eslint-disable-line no-console
});

// Main method. When a message occurs in a chat this happens
global.bot.on(`message`, (msg) => {
  if (msg.content[0] === prefix) {
    // Split the message into an array for easier access to components
    const argv = msg.content.split(` `).map((arg) => arg.toLowerCase());
    argv[0] = argv[0].substring(prefix.length); // Removes the prefix character
    msg.sendErrorReply = sendErrorReply;
    msg.sendHelpReply = sendHelpReply;

    const allModels = constructModels(msg, argv);
    const modelName = Object.keys(allModels).find((model) => model === argv[0]); // Checks if argv[0] corresponds to any of the models.
    if (modelName) {
      allModels[modelName].handle(); // Handles all requests to models in a uniform way
    }
    else {
      switch (argv[0]) {
        case `help`: case `h`: case `commands`:
          msg.sendHelpReply();              break;
        default: msg.sendErrorReply();      break;
      }
    }
  }
});

// Construct all models for convenience
function constructModels(msg, argv) {
  return {
    mail: new Mail(msg, argv),
  };
}

// Is connected to the msg-object
function sendErrorReply() {
  this.reply(`Invalid command. See ${prefix}help for a list of available commands.`);
}

// Is connected to the msg-object
// Reads the help.txt file and sends it's content as a reply to the user
function sendHelpReply() {
  fs.readFile(`help.txt`, `utf-8`, (err, data) => {
    if (err) {
      throw err;
    }
    this.reply(data);
  });
}

// https://www.reddit.com/r/discordapp/comments/8yfe5f/discordjs_bot_get_username_and_tag/
