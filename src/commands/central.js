const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre painel de controle "),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    await interaction.editReply({
      content: "🟢 Central online! Em breve aqui entram os botões."
    });
  }
};

const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("central")
    .setDescription("Abre a central de atendimento"),

  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ticket_suporte")
        .setLabel("📩 Suporte")
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId("ticket_financeiro")
        .setLabel("💰 Financeiro")
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId("ticket_close")
        .setLabel("❌ Fechar")
        .setStyle(ButtonStyle.Danger)
    );

    await interaction.reply({
      content: "🟢 **Central online!**\nSelecione uma opção abaixo:",
      components: [row]
    });
  }
};
