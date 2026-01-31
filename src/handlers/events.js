module.exports = (client) => {
  client.once("ready", () => {
    console.log(`🤖 Bot online como ${client.user.tag}`);
  });

  client.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (command) command.execute(interaction);
    }

    if (interaction.isButton()) {
      const button = client.buttons.get(interaction.customId);
      if (button) button.execute(interaction);
    }
  });
};
