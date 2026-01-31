const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require("discord.js");

module.exports = {
  id: "panel_embeds",

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Painel de Embeds")
      .setDescription(
        "Aqui você pode **criar ou editar embeds totalmente personalizadas**.\n\n" +
        "✔ Texto livre\n" +
        "✔ Emoji padrão ou custom\n" +
        "✔ GIFs e imagens\n" +
        "✔ Tudo editável pelo painel"
      )
      .setColor("#2f3136");

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("open_embed_modal")
        .setLabel("Criar / Editar Embed")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
      ephemeral: true
    });
  }
};
