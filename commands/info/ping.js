module.exports = {
    name: "ping",
    catagory: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
        message.reply("The bot is working correctly!")
    }
}