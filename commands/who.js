const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{ 
    console.log("Quelqu'un à utilisé la commande Who")
    if (message.content === "h!who") {
        let connected = [];
        for (var [id, guild] of bot.guilds.cache) {
            for (var [id, member] of guild.members.cache) {
                if(member.nickname
                    && !member.user.bot
                    && member.user.presence.status === "online")
                    connected.push(member.nickname);
            }
        }
        connected.sort();
        message.reply("Voici les membres connecté: " + connected);
    } 
}

module.exports.help = {
    name: "who",
    description: "Liste les membres connecté"
}