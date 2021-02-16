const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        var error_permissions = new Discord.MessageEmbed()
            .setDescription("<a:emoji_37:809711156075429909>  Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
        let arg = message.content.split(" ").slice(1);
        let contenu = arg.join(" ");
        if (!args[0]) return message.channel.send("<a:emoji_37:809711156075429909>  Votre syntaxe est incorrecte. \n```Syntaxe : !annonce <Description>```")
        var annonce = new Discord.MessageEmbed()
            .setTitle("📌 __Annonce :__")
            .setDescription(contenu)
            .setColor("#000000")
        message.channel.send(annonce)
        message.delete();
    }
}