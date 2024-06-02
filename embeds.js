const { EmbedBuilder } = require("discord.js");

async function sendembed(channel, embed) {
    const embednew = new EmbedBuilder(embed)
    embednew.setColor(embed.color);
    channel.send({embeds: [embednew]});
}

module.exports.embed = sendembed