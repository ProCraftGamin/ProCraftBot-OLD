const { MessageEmbed } = require("Discord.js")

module.exports = {
    name: "topclip",
    category: "twitch",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setAuthor("Clipped by ProCraftGamin on May 21").setTitle("(Click to watch) The catJAM's are taking over").setImage('https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/7e0107318ff829e95852_procraftgamin_10896336506_3130774931//thumb/thumb1490593276-640x360.jpg').setURL('https://www.twitch.tv/videos/1490593276').addField('Create a clip and be featured here!', 'https://twitch.tv/procraftgamin', false).setThumbnail('https://i.imgur.com/n3K4Thj.png').setFooter("If you want to be featured here, create a clip on my twitch! I'll pick my favorite clip to go here every week!").setColor("BLUE")
            ]
        })
    }
}