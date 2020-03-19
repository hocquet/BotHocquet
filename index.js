const Discord = require("discord.js"); //On demande au code qu'on à bessoin de la library "discord.js" installer avec la commande"npm i discord.js" dans le cmd
const fs = require("fs"); //on récupère la library fs installer avec la commande "npm i fs" dans le cmd
const config = require("./storage/config.json") //les infos sont stocker dans le fichier "./storage/config.json"
const bot = new Discord.Client(); //On définit la notion de client (utilisateur discord)
//var prefix = "h!"; //le préfix utiliser par le bot sur didi

bot.commands = new Discord.Collection(); //On créer notre collection

fs.readdir("./commands/", (err, files) =>{ //on va lire le repertoire 
    if(err) console.log(err); //si on a une erreur on la log dans la console

    var jsFiles = files.filter(f => f.split(".").pop() === "js"); //On sépare les fichiers au niveau du point, on vérifie si l'extension ce finis bien par js
    if(jsFiles.length <= 0){ //Si on a rien on annule 
        console.log("Aucun fichier de commande !")
        return;
    }
    jsFiles.forEach((f,i) =>{ //Pour chaque fichier on va faire une action (f= le fichier) (i= variable qui prend un nombre)
        var fileGet = require("./commands/" + f);
        console.log("Fichier de commande " + f + " récupéré avec succès !") //On log dans la console pour voir si sa marche 
        bot.commands.set(fileGet.help.name, fileGet) //on fais un lien avec notre collection
    });
});

bot.on("ready", async () =>{ //Dans la console le bot indique quand il est pret 
    console.log(" ")
    console.log("Connecté en tant que : " + bot.user.tag) //log la connexion sur didi
    bot.user.setActivity("Gouverner le monde", {type: "PLAYING"}); //L'activiter en dessous du bot 
});

bot.on("message", message =>{
    if(message.author.bot) return; //Si l'auteur du message et un bot on annule 
    if(message.channel.type === "dm") return; //si le message vien des privés on annule 

    var prefix = config.prefix; //On récup le prefix dans la config
    var messageArray = message.content.split(" "); //On liste les valeurs du message envoyer
    var command = messageArray[0]; //On prend le premier éléments de la liste 
    var args = messageArray.slice(1) //on découpe le 1er mot on définis le reste comme arguments
    var commands = bot.commands.get(command.slice(prefix.length)) //On découpe la partie préfix de la commande 
    if(commands) commands.run(bot, message, args); //On demande au code d'exécuter la commande avec (bot, message, args)
});

bot.login(config.token); //lien entre discord et le code via le token sur https://discordapp.com/developers/applications/689808445452582925/bot


