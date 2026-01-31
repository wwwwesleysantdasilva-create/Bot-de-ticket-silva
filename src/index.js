const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 👇 ISSO AQUI É O MAIS IMPORTANTE
client.commands = new Collection();

// 👇 CARREGAR COMANDOS
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if (command.data && command.execute) {
    client.commands.set(command.data.name, command);
  }
}

client.once("ready", () => {
  console.log(`✅ Bot online como ${client.user.tag}`);
});

// 👇 INTERACTIONS
client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    if (!interaction.replied) {
      await interaction.reply({ content: "Erro ao executar comando.", ephemeral: true });
    }
  }
});

client.login(process.env.TOKEN);
