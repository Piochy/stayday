const Discord = require("discord.js");
const { resolveSoa } = require("dns");
const client = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const fs = require("fs");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ description: [], credits: [], note: [], rep: [], age: []}).write()

const config = require("./config.json");
client.config = config;

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

client.on('ready', () => {
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion en cours...');
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion à l\'API Discord.js en cours...');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
  console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connecté sur ' + client.user.username + '#' + client.user.discriminator);
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Chargement terminé');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Prêt et connecté');

  const activities = [
      "+help | Stayday Protect",
      "discord.gg/stayday"
  ];
  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[index], {
          type: "STREAMING",
          url: "https://twitch.tv/client"
      });
  }, 15000);
});


client.login(process.env.token);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

// Recherche de toutes les commandes
fs.readdir("./commands/", (err, content) => {
  if(err) console.log(err);
  if(content.length < 1) return console.log('Veuillez créer des dossiers dans le dossier commands !');
  var groups = [];
  content.forEach(element => {
      if(!element.includes('.')) groups.push(element); // Si c'est un dossier
  });
  groups.forEach(folder => {
      fs.readdir("./commands/"+folder, (e, files) => {
          let js_files = files.filter(f => f.split(".").pop() === "js");
          if(js_files.length < 1) return console.log('Veuillez créer des fichiers dans le dossier "'+folder+'" !');
          if(e) console.log(e);
          js_files.forEach(element => {
              let props = require('./commands/'+folder+'/'+element);
              client.commands.set(element.split('.')[0], props);
          });
      });
  });
});

client.on('guildCreate', guild => {
    const embed = new Discord.MessageEmbed()
        .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté ${client.user.username}`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("#F03A17")
      client.channels.get('553915173757255680').send(embed);
});

      client.on("ready", () => {
        const channel = client.channels.cache.get("810930543579103242");
        if (!channel) return console.error("Le channel n'existe pas !");
        channel.join().then(connection => {
            // Yay, it worked!
            console.log("Successfully connected.");
        }).catch(e => {
    
            // Oh no, it errored! Let's log it to console :)
            console.error(e);
        });
    });


  
