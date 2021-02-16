const { timeStamp, timeEnd, time } = require("console");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(`Tu n'as pas spécifié le temps!`);
    console.log("tkt")
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Syntaxe non valide bg !`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Ce n'est pas un chiffre !`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Je n'arrive pas à trouver le channel !`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`*Giveaway created in ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`🎉 GIVEAWAY 🎉`)
      .setDescription( ` Prix à gagner : ${prize} \n\n Réagit avec 🎉 pour entrer ! \n\n Auteur: **${message.author}** \n Temps du giveaway : ${args[0]} ` )
      .setTimestamp( Date.now() + ms(args[0]))
      .setColor(`BLACK`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Pas assez de personne on réagit!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => u != u.client.user)
        .random();
      channel.send(
        ` ${winner} a gagner **${prize}** ! `
      );
    }, ms(args[0]));
  },
}