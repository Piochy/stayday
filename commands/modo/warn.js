const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.MessageEmbed()
            .setDescription("<a:emoji_37:809711156075429909>  Vous ne disposez pas les permissions nécessaires pour envoyer un avertissement à un utilisateur.")
            .setColor("000000")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let args = message.content.split(" ").slice(2);
        let thingToEcho = args.join(" ")
        const member = message.mentions.members.first();
        if (!member) return message.channel.send("<a:emoji_37:809711156075429909>  Merci de mentionner un utilisateur à avertir.");
        if(!args[0]) return message.channel.send("<a:emoji_37:809711156075429909>  Merci de donner une raison pour envoyer un avertissement.");
        message.channel.send(`:warning: | L'utilisateur **${member.user.tag}** viens de recevoir un avertissement par **${message.author}** pour la raison suivante : **` + thingToEcho + `**`)
        member.send(":warning: | Vous avez reçu un avertissement dans le serveur **" + message.guild.name + "** par " + message.author + " pour la raison suivante : **" + thingToEcho + "**")
        message.delete();
    }
}

module.exports.help = {
    name: "warn"
}