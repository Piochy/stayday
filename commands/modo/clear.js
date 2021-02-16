const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.MessageEmbed()
            .setDescription("<a:emoji_37:809711156075429909>   Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#000000")
         message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let msg = message.content.split(' ').slice(1);
    if (!msg[0]) {
        message.channel.send("<a:emoji_37:809711156075429909>  Merci de donner un chiffre entre 1 et 100 pour effectuer cette commande.")
    }else {
        let x = parseInt(msg[0], 10)
        if (x > 100) {
            x = 100
        }
        message.delete();
        message.channel.bulkDelete(x)
        message.channel.send("<a:true:809497859731882024>    **" + x + " messages ont été supprimés.**").then(m => m.delete({ timeout: 5000 }))
    }
}
} 