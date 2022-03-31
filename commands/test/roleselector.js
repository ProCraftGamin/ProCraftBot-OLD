const { MessageActionRow, MessageButton, MessageEmbed } = require("Discord.js")

module.exports = {
    name: "roleselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        try {
            message.channel.send({
                embeds: [
                    new MessageEmbed().setTitle("Select Role").setDescription("Select the roles from the buttons below").setColor("BLUE")
            ],
            
                    components: [
                    new MessageActionRow().addComponents([
                        new MessageButton().setCustomId("role-958250712125554699").setStyle("PRIMARY").setLabel("Member")
                ])
            ]
         
        })
    }catch (err){
        if (err) {
            console.error (err)
            return
        }
        }
    }
}
