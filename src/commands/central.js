const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre o painel de controle"),

  async execute(interaction) {
    await interaction.reply({
      content: "✅ Painel de controle aberto!",
      ephemeral: true
    });
  }
};
