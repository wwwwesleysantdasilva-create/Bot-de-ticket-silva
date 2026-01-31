module.exports = {
  data: {
    name: 'central',
    description: 'Central de tickets'
  },
  async execute(interaction) {
    await interaction.reply({
      content: 'Central funcionando ✅',
      ephemeral: true
    });
  }
};
