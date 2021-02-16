const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_nomentions = new Discord.MessageEmbed()
            .setDescription("<:false:551460099600678944> Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_nomentions)            
    }else {
        var calin = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> viens de faire un calin à <@" + member.user.id + "> !")
            .setColor("000000")
            .setImage("https://i.skyrock.net/6316/91506316/pics/3227357985_1_4_Gv21i7uB.gif")
        message.channel.send(calin)
    }
}


