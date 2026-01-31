require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.commands = new Collection();
client.buttons = new Collection();

require("./handlers/commands")(client);
require("./handlers/events")(client);

client.login(process.env.BOT_TOKEN);
