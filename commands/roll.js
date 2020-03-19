const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{ 
    console.log("Quelqu'un à utilisé la commande roll !")
    if (message.content === "h!roll") {
        var roll = Math.floor(Math.random() * (6)) +1 ;
        message.reply("Vous êtes tombé sur un " + roll + ".");
    } 
}

module.exports.help = {
    name: "roll",
    description: "Donne un chiffre aléatoire entre 0 et 6"
}