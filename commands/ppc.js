const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{ 
    console.log("Quelqu'un à utilisé la commande ppc !")
    if (message.content === "h!ppc") {
        const embed = new RichEmbed()
        .setColor("#ffffff")
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setDescription("Add a reaction to one of these emojis to play the game!")
        .setTimestamp();

    const m = await message.channel.send(embed);
    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
    await m.clearReactions();

    embed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed);

    function getResult(me, clientChosen) {
        if ((me === "🗻" && clientChosen === "✂") ||
            (me === "📰" && clientChosen === "🗻") ||
            (me === "✂" && clientChosen === "📰")) {
                return "You won!";
        } else if (me === clientChosen) {
            return "It's a tie!";
        } else {
            return "You lost!";
        }
    }
}
}

module.exports.help = {
    name: "ppc",
    description: "Pierre Pappier Ciseaux"
}