const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "g!";
var prefix2 = "G!";
const cooldown = new Set ();
const cooldown2 = new Set ();
const cooldown3 = new Set ();
const cooldown4 = new Set ();

client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: "Maintenance", type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: "Maintenance", type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: "Maintenance", type: "WATCHING" } });
        }, 1*70000);
});
client.on('message', message => {
if (message.content.startsWith ('g!uptime')) {
let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600; 
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);
let uptime = `${hours} heures, ${minutes} minutes et ${seconds} secondes`;
var embed220 = new Discord.RichEmbed()
.setTitle("je ne me suis pas redémarré depuis :")
.setDescription(uptime)
.setFooter(`Discord créateur sur ${client.guilds.size}\ Serveurs`)
.setColor("#ff0000")
.setTimestamp()
message.channel.sendEmbed(embed220)
}
});
client.on("message", async message => {
  if (message.content.startsWith (prefix + "avatar")) {
    if(message.mentions.users.size === 0)
			return message.channel.send("Vous vouliez voir la photo de profil de quelqu'un mais vous ne l'avez pas mentionné!! **Recommencer!!**")
    const toi = message.mentions.users.first();
const embed = new Discord.RichEmbed()
//.setImage(message.author.avatarURL)
.setImage(message.mentions.users.first ().avatarURL);
message.channel.send ({embed})
  }
});
  client.on ("message", async message => {
	if (cooldown.has(message.guild.id)) {
	} else {
    if(message.content.startsWith(prefix + "view")) {
message.delete ()
const embed = new Discord.RichEmbed()
.addField("Vous voulez voir ce que les commandes font ??? alors rejoignez les serveurs pré faite :"," <:en_ligne:576662449734811659> Qu’il est disponible \n\n<:indisponible:576662605704200192> Qu’il est déjà pris\n\n<:indisponible:576662605704200192> Qu’il est en maintenance\n\n<:offline:576662534585712640>: Qu’il est Fermer\n\nServeur #1 https://discord.gg/Av73Vwg <:en_ligne:576662449734811659>\n\nServeur #2 https://discord.gg/bpZpepc <:en_ligne:576662449734811659> \n\nServeur #3 https://discord.gg/SwuCmmB <:en_ligne:576662449734811659> \n\nServeur #4 https://discord.gg/ <:offline:576662534585712640> \n\nServeur #5 https://discord.gg/ <:offline:576662534585712640>");
message.channel.send({embed})
}
if (message.content.startsWith (prefix + "salon")) {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");	
	message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: ["ADMINISTRATOR"]
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })     
		message.guild.createRole({
                  name: "Staff",
                    permissions: ["KICK_MEMBERS"]
     })     
	message.guild.createChannel(`Général`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`Général`, "voice").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`Staff`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
		    MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`Général`, "category").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		    MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`Réunion`, "voice").then(c => {
	let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
		    MENTION_EVERYONE: false
            });
})
		message.guild.createChannel(`Staff`, "category").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
   });
})
	       message.guild.createChannel(`information`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
		    MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	       message.guild.createChannel(`commandes`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		   MANAGE_MESSAGE: tr
	
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		MENTION_EVERYONE: false
   });
         
	}).catch(console.error); // Send errors to console
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
}
   //message.channel.send(":warning: Cooldown activé pendant 1minutes :warning:")
cooldown.add(message.guild.id)
setTimeout(() => 
    cooldown.delete(message.guild.id);
}, 60000);
	}
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
         if (cooldown.has(message.author.id)) {
	} else {
if (message.content.startsWith (prefix + "setup")) {
  message.delete ()
const embed = new Discord.RichEmbed()
.setColor ("RANDOM")
.setTitle("Bonjour, Je m'appelle **Discord créateur** je suis là pour configurer votre serveur en 1 commandes!")
.setDescription("Quand le bot est sur votre serveur, executer la commande du panel ``g!help`` ")
.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
message.channel.send({embed})
}
    message.channel.send (":warning: Cooldown activé pendant 1 minutes !")
    cooldown.add(message.author.id);
setTimeout(() => {
    cooldown.delete(message.author.id); 
}, 60000);
	}
});
client.on ("message", async message => {
  if(cooldown.has(message.author.id)) {
  } else {
if(message.content.startsWith(prefix + "delete")) {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
message.channel.delete()
}
    cooldown4.add(message.author.id);
setTimeout(() => { 
    cooldown4.delete(message.author.id); 
}, 60000);
	}
});
client.on ("message", async message => {
if (cooldown4.add(message.author.id)) {
} else {
if (message.content.startsWith (prefix + "commu")) {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
	message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: ["ADMINISTRATOR"]
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })     
		message.guild.createRole({
                  name: "Staff",
                    permissions: ["KICK_MEMBERS"]
     })     
	message.guild.createChannel(`🗯info`, "category")
message.guild.createChannel(`Général`, "category")
	message.guild.createChannel(`Staff`, "category")
message.guild.createChannel(`✈•bienvenue-bye`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`📜•règlement`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
   });
})
	message.guild.createChannel(`📯•annonces`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`🎁•events`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`💬•chat-textuel`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		   MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`👾•commandes`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		    MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`🗯•Chat Vocal`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`🗯💬•chat-staff`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
})
	message.guild.createChannel(`🗯📈•Réunion`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
}).catch(console.error); // Send errors to console
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
} 
  cooldown4.add(message.author.id);
setTimeout(() => { 
    cooldown4.delete(message.author.id); 
}, 60000);
	}
});
client.on ("message", async message => {
	if(message.content.startsWith (prefix + "role")) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: []
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: []
     })     
		message.guild.createRole({
                  name: "Staff",
                    permissions: ["KICK_MEMBERS"]
     })
message.channel.send("<:okay:578974520199741472>\ ``Tout les rôles on bien été mise à jours!!!``");  
}
		if (message.content.startsWith (prefix + "help") || message.content.startsWith (prefix2 + "help")) {	
const embed = new Discord.RichEmbed()
.setColor ("RANDOM")
.setTitle (`Bienvenue ${message.author.username} dans le placard de mes serveurs Choisi bien :ballot_box_with_check:`)
.addField("Balise :",`<:en_ligne:576662449734811659> = Commandes disponibles\n<:indisponible:576662605704200192> = commandes en modification mais disponible\n<:offline:576662534585712640> = Commandes Indisponibles`, true)
.addField(" Communautaire :","<:offline:576662534585712640>``g!commu``**\ Crée votre serveur sous le thème de la communauté**", true)
.addField(" Basique :","<:en_ligne:576662449734811659>``g!salon``\ **Création de votre serveur sous le thème global**", true)
.addField("Publicitaire :","<:en_ligne:576662449734811659>``g!pubs``\ **Crée un serveur sous le thème Publicitaire**\n<:en_ligne:576662449734811659>``g!pub-2``\ **Crée un serveur sous le thème Publicitaire 2**", true)
.addField(" Uniquement les rôles :","<:en_ligne:576662449734811659>``g!role``\ **Création des roles uniquement**", true)
.addField("Le placard de la modération","<:en_ligne:576662449734811659>``g!eval``\ **Réservé à l'owner du bot**\n<:en_ligne:576662449734811659>``g!kick``\ **Exclut le membre mentionner**\n<:en_ligne:576662449734811659>``g!ban``\ **Bannis le membre mentionner**\n<:en_ligne:576662449734811659>``g!reglement``**vous fait un jolie règlement pré-definis**", true)
.setAuthor(`${message.author.username}`,`${message.author.avatarURL}`)
.addField("Le placard de l'utilisateurs","<:en_ligne:576662449734811659>``g!avatar``\ **Vous donne la photo de profil de la personne mentionné!**\n<:en_ligne:576662449734811659>``g!uptime``\ **Voir depuis quand le bot ne c'est pas redémarré**\n<:en_ligne:576662449734811659>``g!ping``\ **Regarder le ping du bot**\n<:en_ligne:576662449734811659>``g!setup``\ **Vous permet de voir comment construire votre serveur**\n<:en_ligne:576662449734811659>``g!view``\ **Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes !**\n<:en_ligne:576662449734811659>``g!contact``\**faire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)**", true)
.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
message.channel.send({embed})
}
if (message.content.startsWith (":")) {
if(message.channel.id === "576842402459811863") {
message.react ("🔻");
message.react ("🔺");
}
}
if(message.content.startsWith(prefix + "kick")) {
		if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été Kické par ${message.author.username}`);
		member.kick();
		}
	 if (message.content.startsWith(prefix + "ban")) {
		if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été banni par ${message.author.username}`);
		member.ban();
	}
	if (message.content.startsWith (prefix + "ping")) {
    message.delete();
    message.reply("Pong! (Calcul en cours...)").then(m => m.edit(`${message.author}:ping_pong: Pong!__\n La latence actuelle est de ${m.createdTimestamp - message.createdTimestamp}ms__`) );
    message.react("✅");
  }
	if (message.content.startsWith (prefix + "pubs")) {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
	message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: ["ADMINISTRATOR"]
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })     
		message.guild.createRole({
                  name: "Staff",
                    permissions: ["KICK_MEMBERS"]
     })     
	message.guild.createChannel(`🗯info`, "category")
message.guild.createChannel(`Général`, "category")
	message.guild.createChannel(`Staff`, "category")
message.guild.createChannel(`✈•bienvenue-bye`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`📜•règlement`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
   });
})
	message.guild.createChannel(`📯•annonces`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`🎁•events`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`💬•chat-textuel`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		   MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`👾•commandes`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		    MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`🗯•Chat Vocal`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
   });
})
		message.guild.createChannel(`👾•discord`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
})
message.guild.createChannel(`🤖•autre`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
})
message.guild.createChannel(`🎥•vidéo`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
})
message.guild.createChannel(`📱•résaux-sociaux`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
})
message.guild.createChannel(`pub-24h`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`🗯💬•chat-staff`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
})
	message.guild.createChannel(`🗯📈•Réunion`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
}).catch(console.error); // Send errors to console
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
} 
//if(message.content.startsWith(prefix + "view")) {
//message.delete ()
//const embed = new Discord.RichEmbed()
//addField("Vous voulez voir ce que les commandes font ??? alors rejoignez les serveurs pré faite :"," <:en_ligne:576662449734811659> Qu’il est disponible \n\n<:indisponible:576662605704200192> Qu’il est déjà pris\n\n<:indisponible:576662605704200192> Qu’il est en maintenance\n\n<:offline:576662534585712640>: Qu’il est Fermer\n\nServeur #1 https://discord.gg/Av73Vwg <:en_ligne:576662449734811659>\n\nServeur #
	if(message.content.startsWith(prefix + "contact")) {
		message.delete()
var amsg = message.content;
var msg = amsg.substr(amsg.indexOf(" ") + 1);
var test = client.channels.find(`id`, "578189974667788289");
var reason = msg;
		if(msg.length <= 10) {
			console.log("Pour contacter un Administrateur il faut au moin avoir écrit 10 caractères !!");
			return message.channel.send ("Pour contacter un Administrateur il faut au moin avoir écrit 10 caractères !!");	
}
		const embed = new Discord.RichEmbed()
.addField("Le message provient de :", message.author.username +"#"+ message.author.discriminator)
.addField("du serveur :", message.guild.id)
.addField("La raison du report est :", reason);
test.send({embed})
message.channel.send("Votre demande à bien été transmis à nos Administrateurs !!");
}
	if (message.content.startsWith(prefix + "count")) {
		if(message.author.id === "516274923828805667") {
message.delete ()
const embed = new Discord.RichEmbed()
.addField("Le bot possède : " +client.users.size +"\``Utilisateurs``","Ainsi que : " + client.guilds.size + "\``Serveurs``")
.setTimestamp();
message.channel.send({embed}).then (async msg => {
setInterval(() => {
        const embed = new Discord.RichEmbed()
.addField("Le bot possède : " +client.users.size +"\``Utilisateurs``","Ainsi que : " + client.guilds.size + "\``Serveurs``")
.setTimestamp();
msg.edit ({embed})
        }, 1*20000);
})
 } else {
	  message.channel.send("<a:non:576666508571312138> Accès insuffisant");
  }	
}
	if (message.content.startsWith (prefix + "pub-2")) {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
	message.guild.createRole({
                  name: "『👑』 Administrateurs",
                    color: "#ffe200",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR"]
     })    		
		
	message.guild.createRole({
                  name: "『🚨』 Modérateurs",
                    color: "#2fa421",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })    	
		message.guild.createRole({
                  name: "『🚨』 Modérateurs",
                    color: "#6c7aba",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })    	
		message.guild.createRole({
                  name: "『👥』Partenaire",
                    color: "#daf012",
                    permissions: []
     })    	
		message.guild.createRole({
                  name: "『👾』Bot",
                    color: "#d319d3",
                    permissions: []
     })    	
		message.guild.createRole({
                  name: "『⭐️』VIP",
                    color: "#878640",
                    permissions: []
     })    	
		message.guild.createRole({
                  name: "『👤』Membres",
                    color: "#421ee3",
                    permissions: []
     })    	
		message.guild.createRole({
                  name: "staff",
                    color: "#ffe200",
                    permissions: ["VIEW_CHANNEL"]
     })    
		
	message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『✈』bienvenue-bye`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『📜』règlement`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『📯』annonces`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🎁』events`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『💬』chat-public`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『👾』commandes`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🗯』Chat Vocal`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『👾』pub-discord`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🎥』pub-youtube-twitch`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『📱』résaux-sociaux`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🤖』bots-site-autre`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『💬』chat-staff`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🗯』 Réunion`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`Info`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`Général`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`pub`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`staff`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
}).catch(console.error); // Send errors to console
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
} 
	if(message.content.startsWith(prefix + "reglement")) {
		if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
		message.channel.send("**__Règlement du serveur | " + message.guild.name + "__**\n\nVoici le règlement du serveur :\n\n:clipboard:Si une des règles n'est pas respectée par un membre, une sanction sera appliquée.\n\n:no_entry: Interdictions:\n\n• Lien innaproprié : Kick, Ban si récidive\n\n• Spam auditif : Mute\n\n• Pub sur le discord ou en mp en dehors des salons appropriés : Ban de 1 mois\n\n• Diffamation : Ban\n• Flood ou spam : Ban\n\n• Insultes : Kick, Ban si récidive\n\n• Pseudos Inappropriés : Demande de changement\n\n• Usurpation d'identité d'un staff : Ban\n\n• Provocation : Mute, puis Ban\n\n• Utilisation de ``@everyone / @here`` : Ban\n\n• Utilisation d'emotes/réactions inapropriées : Mute, puis Ban");
	await message.react("✅");
	}
	if(message.content.startsWith(prefix + "invite")) {
		message.delete()
		const embed = new Discord.RichEmbed()
		.setColor("RANDOM")
	.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
        message.channel.send({embed})
	}
  if (message.content.startsWith (prefix + "testadmin")) {
    message.channel.send ("Yop");
  }
//<:en_ligne:576662449734811659>
//<:indisponible:576662605704200192>
//<:offline:576662534585712640>offline
});
client.login(process.env.TOKEN)
