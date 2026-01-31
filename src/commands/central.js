const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre a central de atendimento"),
  async execute(interaction) {
    await interaction.reply({
      content: "🟢 Central online! Em breve aqui entram os botões.",
      ephemeral: true
    });
  }
};
