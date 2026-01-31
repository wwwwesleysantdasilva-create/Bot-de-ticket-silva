const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre o painel de controle"),

  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("painel_produtos")
        .setLabel("📦 Produtos")
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId("painel_suporte")
        .setLabel("🛠 Suporte")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setCustomId("painel_fechar")
        .setLabel("❌ Fechar")
        .setStyle(ButtonStyle.Danger)
    );

    await interaction.reply({
      content: "🟢 **Painel de Controle**\nEscolha uma opção abaixo:",
      components: [row],
      ephemeral: true
    });
  }
};
