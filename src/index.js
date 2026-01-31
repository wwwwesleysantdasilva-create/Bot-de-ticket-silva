require("dotenv").config();
const { Client, GatewayIntentBits, Collection, REST, Routes } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();

// Carregar comandos
const central = require("./commands/central");
client.commands.set(central.data.name, central);

// Registrar slash commands
client.once("ready", async () => {
  console.log(`🤖 Logado como ${client.user.tag}`);

  const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: [central.data.toJSON()] }
    );
    console.log("✅ Comando /central registrado");
  } catch (err) {
    console.error("Erro ao registrar comandos:", err);
  }
});

// Interações
client.on("interactionCreate", async interaction => {
  try {

    // SLASH COMMANDS
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) return;
      return await command.execute(interaction);
    }

    // BOTÕES
    if (interaction.isButton()) {
      const button = client.buttons.get(interaction.customId);
      if (!button) return;
      return await button.execute(interaction);
    }

    // MODAIS
    if (interaction.isModalSubmit()) {
      const modal = client.modals.get(interaction.customId);
      if (!modal) return;
      return await modal.execute(interaction);
    }

  } catch (err) {
    console.error(err);
    if (interaction.replied || interaction.deferred) {
      interaction.followUp({ content: "❌ Erro interno", ephemeral: true });
    } else {
      interaction.reply({ content: "❌ Erro interno", ephemeral: true });
    }
  }
});
// LOGIN
client.login(process.env.BOT_TOKEN);
