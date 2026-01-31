const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre a central de atendimento"),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    await interaction.editReply({
      content: "🟢 Central online! Em breve aqui entram os botões."
    });
  }
};
