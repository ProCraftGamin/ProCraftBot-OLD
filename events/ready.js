const Discord = require("discord.js")

module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)
        bot.client.user.setActivity("for !!help", {
            type: "WATCHING",
            status: 'dnd'
        })
        
        
            
  }
}