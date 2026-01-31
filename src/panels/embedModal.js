const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require("discord.js");

module.exports = async (interaction) => {
  const modal = new ModalBuilder()
    .setCustomId("edit_embed_modal")
    .setTitle("Editar Embed");

  const title = new TextInputBuilder()
    .setCustomId("embed_title")
    .setLabel("Título do embed")
    .setStyle(TextInputStyle.Short)
    .setRequired(false);

  const description = new TextInputBuilder()
    .setCustomId("embed_description")
    .setLabel("Descrição do embed")
    .setStyle(TextInputStyle.Paragraph)
    .setRequired(false);

  const color = new TextInputBuilder()
    .setCustomId("embed_color")
    .setLabel("Cor HEX (#2b2d31)")
    .setStyle(TextInputStyle.Short)
    .setRequired(false);

  const image = new TextInputBuilder()
    .setCustomId("embed_image")
    .setLabel("Imagem ou GIF (URL)")
    .setStyle(TextInputStyle.Short)
    .setRequired(false);

  modal.addComponents(
    new ActionRowBuilder().addComponents(title),
    new ActionRowBuilder().addComponents(description),
    new ActionRowBuilder().addComponents(color),
    new ActionRowBuilder().addComponents(image)
  );

  await interaction.showModal(modal);
};
