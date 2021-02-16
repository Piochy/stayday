const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        var error_permissions = new Discord.MessageEmbed()
            .setDescription("<a:emoji_37:809711156075429909> Vous ne disposez pas les permissions nécessaires pour expulser un utilisateur.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("KICK_MEMBERS")) {
        const member = message.mentions.members.first();
        if (!member) return message.channel.send("<a:emoji_37:809711156075429909> Merci de mentionner un utilisateur pour expulser.")
        member.kick().then(member => {
            message.channel.send(`<a:true:809497859731882024>  L'utilisateur **${member.user.tag}** est désormais expulser du serveur.`).catch(console.error);
        })
        message.delete();
    }
}

module.exports.help = {
    name: "kick"
}