const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{ //permet de communiquer avec l'index pour executer la commande
    console.log("Quelqu'un à ping !")
    if (message.content === 'h!ping') { //si le message est strictement égal à "h!ping" 
    message.reply('pong !') //on envoie "pong !"
    
}
}

module.exports.help = { //On exporte des helps qu'on a définit dans "bot.commands.set(fileGet.help.name, fileGet)""
    name: "ping"
}