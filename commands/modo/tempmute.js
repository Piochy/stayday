const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.channel.send("**<a:emoji_37:809711156075429909> Merci de mentionner un utilisateur.**");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a:emoji_37:809711156075429909> **Vos permissions sont insuffisantes !**");
  let tmReason = args.join(" ").slice(22);
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a:emoji_37:809711156075429909> **Je ne peut pas mute cette utilisateur.**");
  let muterole = message.guild.roles.cache.get("810853128064073748");
  ;

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("<a:emoji_37:809711156075429909> **Merci de choisir une durée !**");

  await(tomute.roles.add(muterole.id));
  message.channel.send(`**<a:true:809497859731882024>  L'utilisateur <@${tomute.id}> viens d'être mute par ${message.author.tag} !**`);

  setTimeout(function(){
    tomute.roles.remove(muterole.id);
    message.channel.send(`<a:true:809497859731882024> **L'utilisateur <@${tomute.id}> n'est plus mute !**`);
  }, ms(mutetime));
}
