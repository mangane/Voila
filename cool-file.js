const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "g!";
var prefix2 = "G!";
const cooldown = new Set ();

client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `MAINTENANCE `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `MAINTENANCE`, type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `MAINTENANCE`, type: "WATCHING" } });
        }, 1*70000);
});
 client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
	const embed = new Discord.RichEmbed()
        .setDescription(`<:en_ligne:576662449734811659> Merci à **${guild.name}** d'avoir ajouté __Discord créateur__.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("RANDOM")
      client.channels.get('576665756389867520').send(embed);
});

// Listener - Bot leaves server
client.on("guildDelete", guild => {
    // This event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
	const embed = new Discord.RichEmbed()
        .setDescription(`<a:non:576666508571312138> **${guild.name}** ma retiré.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("RANDOM")
      client.channels.get('576665756389867520').send(embed);
});
client.on("message", async message => { 
	function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
      const clean = text => {
          if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
          else
              return text;
        }
}
let args = message.content.split(" ").slice(1);
  if (message.content.startsWith("g!eval")) {
    if(message.author.id === "516274923828805667") {
     try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
    }
  } else {
	  message.channel.send("<a:non:576666508571312138> Accès insuffisant");
  }
}
});
client.on ("message", async message => {
  if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	// ajout de args vu que tu appelle une variable qui n'existe pas
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  if (message.content.startsWith (prefix)) {
    message.channel.send ("****__Maintenance en cours__***");
  }
  if(message.content.startsWith (prefix + "deletead")) {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande.")
message.guild.channels.forEach(c => {
    c.delete()
    })
message.author.send("🔰Le serveur a été supprimé en entier !")
}
  if (command === "test") {
    var toi = message.member
    toi.addRole(`584305495771185162`)
    message.channel.send("Role Ajouté avec succès!")
  }
  //584305495771185162
 // if (command === "rolear") {
  //  message.guild.createRole(Mentionable(true, 'Développeur'))
   // message.channel.send ("ok")
  //}
});
client.login (process.env.TOKEN)