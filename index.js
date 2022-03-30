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
    prefix: "?",
    owners: ["775420795861205013"]
}







client.slashcommands = new Discord.Collection()
client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require ("./handlers/slashcommands")(bot, reload)
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadSlashCommands(bot, false)
client.loadEvents(bot, false)
client.loadCommands(bot, false)
    
client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return 
    if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return interaction.reply("Invalid slash command")

    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply("You do not have permission for this command")

    slashcmd.run(client, interaction)
})


module.exports = bot

client.login(process.env.TOKEN)