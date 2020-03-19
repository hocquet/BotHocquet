const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{ 
    console.log("Quelqu'un à utilisé la commande Hapolyon")
    if (message.content === "h!hapolyon") {
        message.reply("Mon créateur le tout puissants HAPOLYON !")
    } 
}

module.exports.help = {
    name: "hapolyon"
}