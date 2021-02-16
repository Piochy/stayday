const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        var error_permissions = new Discord.MessageEmbed()
            .setDescription("<a:emoji_37:809711156075429909>  Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send("<a:emoji_37:809711156075429909>  Merci de mentionner un utilisateur pour envoyer un message privé depuis le bot.")
        let arg = message.content.split(" ").slice(2);
        let content_msg = arg.join(" ");
        if(!args[0]) return message.channel.send("<a:emoji_37:809711156075429909>  Votre syntaxe est incorrecte. \n```Syntaxe : d!mp [Utilisateur] [Message]```");
        member.send(`:pushpin: | Vous avez reçu un message de **${message.author.tag}** : **` + content_msg + `**`)
        message.channel.send(`<a:true:809497859731882024>  | Votre message privé a bien été envoyé à **${member.user.tag}** !`)
        message.delete();
    }
}

module.exports.help = {
    name: "mp"
}