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
client.on("interactionCreate", async (interaction) => {
  const embedModal = require("./panels/embedModal");

  // BOTÕES
  if (interaction.isButton()) {
    if (interaction.customId === "open_embed_modal") {
      return embedModal.execute(interaction);
    }
    return;
  }

  // SLASH COMMANDS
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error(err);
      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({
          content: "❌ Erro ao executar o comando.",
          ephemeral: true,
        });
      }
    }
  }
});

client.login(process.env.BOT_TOKEN);
