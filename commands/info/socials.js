const { MessageEmbed } = require("Discord.js")

module.exports = {
    name: "socials",
    catagory: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("ProCraftGamin's socials").setDescription("All of ProCraftGamin's socials. Feel free to follow or subscribe!").setURL('https://linktr.ee/procraftgamin').addField('Youtube', 'https://www.youtube.com/channel/UCh4YeYnQcdmTMB-Q4ckuiDQ', true).addField('Twitch', 'https://twitch.tv/procraftgamin', true).setThumbnail('https://i.imgur.com/gXRJVBK.png').setColor("BLUE")
            ]
        })
    }
}