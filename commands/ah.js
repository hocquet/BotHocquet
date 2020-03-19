const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{ 
    console.log("Quelqu'un à utilisé la commande ah !")
    if (message.content === "h!ah") {
        message.reply("https://tenor.com/view/ah-denis-brognart-tf1-koh-gif-7256068")
    } 
}

module.exports.help = {
    name: "ah",
    description: "Denis ?!"
}