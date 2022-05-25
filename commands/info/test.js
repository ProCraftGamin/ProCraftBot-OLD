const { MessageEmbed } = require("Discord.js")

module.exports = {
    name: "test",
    catagory: "info",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("This is a test command").setAuthor("Hi").setDescription("A command for Pro to test variables!").setTimestamp(Date.now()).setURL('https://linktr.ee/procraftgamin').addField('Youtube', 'https://www.youtube.com/channel/UCh4YeYnQcdmTMB-Q4ckuiDQ', true).addField('Twitch', 'https://twitch.tv/procraftgamin', true).setThumbnail('https://i.imgur.com/gXRJVBK.png').setColor("BLUE")
            ]
        })
    }
}