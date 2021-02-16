const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var desc = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send("<a:emoji_37:809711156075429909> **Merci de donner une description correcte s'il vous plaît.**")
    if (!db.get("description").find({ auteur: author }).value()) {
        db.get("description").push({ auteur: author, description: desc }).write()
      } else {
        db.get("description").find({ auteur: author }).assign({ auteur: author, description: desc }).write()   
}
message.channel.send("<a:true:809497859731882024> **Votre description a bien été actualisé avec succès.**")
}
