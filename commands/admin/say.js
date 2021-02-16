const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
         var error_permissions = new Discord.MessageEmbed()
            .setDescription("<a:emoji_37:809711156075429909>  Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ");
    if (!args[0]) {
        var error = new Discord.MessageEmbed()
            .setDescription("<a:emoji_37:809711156075429909>  Merci d'entrer un message pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error)
    }else {
    var say = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.AvatarURL)
        .setDescription(thingToEcho)
        .setColor("#282830")
    message.channel.send(say)
    message.delete();
}
}
}

module.exports.help = {
    name: "say"
}
