const { MessageEmbed } = require("Discord.js")

module.exports = {
    name: "mod",
    catagory: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Moderator application").setDescription("Want to be a moderator for ProCraftGamin?").addField(' Fill out this fourm to apply!','https://forms.gle/JN5h7S5kHgm4teko6', true).setThumbnail('https://i.imgur.com/QtChcgp.png').setColor("BLUE")
            ]
        })
    }
}