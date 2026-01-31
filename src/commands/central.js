const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abrir a central de atendimento"),

  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("abrir_ticket")
        .setLabel("🎫 Abrir Ticket")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({
      content: "📌 **Central de Atendimento**\nClique no botão abaixo para abrir um ticket.",
      components: [row],
      ephemeral: false
    });
  }
};
