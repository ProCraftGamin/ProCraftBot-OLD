const { MessageEmbed } = require("Discord.js")

module.exports = {
    name: "streams",
    catagory: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setAuthor("Last updated: 5/24/22 at 5:30 PM PST").addField('ProCraftGamin streams almost every Saturday', 'https://twitch.tv/procraftgamin', false).setImage("https://i.imgur.com/CBwsZu6.png").setTitle("Next stream: Saturday, May 28th").setTimestamp(Date.now()).setURL('https://twitch.tv/procraftgamin').setColor("BLUE")
            ]
        })
    }
}