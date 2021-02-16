const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.MessageEmbed()
        .setTitle("<a:couronne:809499832011718746>  • Listes des commandes disponibles :")
        .addField("<:dev:810256760862408754>  • __Administration__ ", "`say`, `annonce`, `mp`")
        .addField("<:partner:810257463823040513>  • __Modération__ ", "`ban`, `kick`, `warn`, `clear`, `tempmute`")
        .addField("<:verified:810257463777165342>  • __Utilitaires__ ", "`help`, `test`, `invite`, `suggest`, `bvn`, `infobot`, `infodiscord`, `password`, `calc`, `addnote`, `note`")
        .addField("<:gaming:810257958729416714>  • __Divertissement__ ", "`sondage`, `trueorfalse`, `blague`")
        .addField("<a:792885618421792808:810192935823081533>  • __Fun__ ", "`kiss`, `calin`, `declareramour`, `declareramitie`, `frapper`, `soigner`")
        .addField("<a:804728823903027221:810258352995172394>  • __Économie__ ", "`profil`, `setdesc`, `daily`, `rep`")
        .setThumbnail(client.user.avatarURL())
        .setColor("#000000")   
    message.channel.send(help)
}

module.exports.help = {
    name: "help"
}