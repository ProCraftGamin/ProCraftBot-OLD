const { MessageEmbed } = require("Discord.js")

module.exports = {
    name: "help",
    catagory: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setFooter("Suggestions are always appreciated! If you have any suggestions for ProCraftBot, please put them in the suggestions channel!").setAuthor("Last updated: 5/24/22").setTitle("Welcome to ProCraftDiscord!").setDescription("Here is all the commands for ProCraftBot. If you need help, ping ProCraftGamin!").setURL('https://linktr.ee/procraftgamin').addField('!!socials', "Gives you all of ProCraftGamin's socials!", false).addField('!!mod', 'Gives you the fourm to apply for moderator in Twitch chat and Discord!', false).addField('!!streams', "Gives you information on when ProCraftGamin's next stream is!", false).setThumbnail('https://i.imgur.com/gXRJVBK.png').setColor("BLUE")
            ]
        })
    }
}