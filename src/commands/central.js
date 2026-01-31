const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre o painel de controle"),

  async execute(interaction) {
    await interaction.reply({
      content: "🧠 Painel de controle online.\nEm breve as opções estarão disponíveis.",
      ephemeral: true
    });
  }
};
