const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre o painel de controle"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Painel de Controle")
      .setDescription("Central online! Use os botões abaixo para configurar.")
      .setColor(0x2f3136);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("open_embed_modal")
        .setLabel("Configurar Embed")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
      ephemeral: true
    });
  }
};
