const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "!",
    owners: ["775420795861205013"]
}







client.slashcommands = new Discord.Collection()
client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.buttons = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require ("./handlers/slashcommands")(bot, reload)
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadSlashCommands(bot, false)
client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadButtons(bot, false)
    


const welcomeChannelId = "958518158359162950"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})


module.exports = bot

client.login(process.env.TOKEN)