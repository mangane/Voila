const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "s!";
var prefix2 = "s!";
const cooldown = new Set ();
const Staff = ["493474639331459072"];
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
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '🚫vérification🚫');
    if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor(0xF0000)
    .addField("Bienvenue Pour accéder au serveur il va falloir passer la vérification pour cela taper","\n``g!v-ok``")
    .setAuthor("🔐 La sécurité avant tout 🔐 ");
    channel.send({embed})
channel.send(member)
});
client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `s!help | V.1.0.0`, type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
        }, 1*70000);
});
client.on('message', async message => {
  if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	// ajout de args vu que tu appelle une variable qui n'existe pas
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  if(command === "help") {
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Commandes Lock",
            value: "Voir les commandes Lock"
        }, { 
          name: "🔒 | Commandes Vérification",
          value: "Les commandes relatives à la vérification"
        }, {
          name: "🔧 | Commandes de modération",
          value: "Les commandes de modération"
        }],
      footer: { 
        text: "Menu d'aide",
    }
      }});
    await base.react ('🔨');
    await base.react ('🔧');
    await base.react ('🔒');
    const collector = base.createReactionCollector((reaction, user) => user.id === message.author.id);
       
        collector.on('collect', async(reaction) => {
       setTimeout (() => {
         collector.stop ();
       }, 30000);
        if (reaction.emoji.name === "🔨") {
 base.edit({ embed: {
              color: 0xFF0000,
                fields: [{
                    name: "Commandes Lock",
                  value: "**<:en_ligne:576662449734811659>``s!lock``\ Interdit au rôle everyone de parler sur le salon\n<:en_ligne:576662449734811659>``s!unlock``\ Autorise de nouveaux au role everyone de parler\n<:en_ligne:576662449734811659>``s!unlockall``\ Autorise de nouveaux au role everyone de parler sur le serveur\n <:en_ligne:576662449734811659>``s!lockall``\ Interdit au rôle everyone de parler sur le serveur **"
        
                             }]
            }})
 
          //  collector.stop();
           
        };
          if (reaction.emoji.name === "🔒") {
            base.edit ({ embed: {
              color: 0xFF0000,
              fields: [{
                name:"Commandes Vérification",
                value: " <:en_ligne:576662449734811659>``s!verif-on``\ **Vous permet D'activer une protection  (vérification à l'arrivée) sur votre serveur**\n <:en_ligne:576662449734811659>``s!v-ok``\ **Permet de passez la vérification**"
  
              }]
            }})
          };
          if (reaction.emoji.name === "🔧") {
            base.edit ({ embed: {
              color: 0xFF0000,
              fields: [{
                name: "Commandes de modération",
                value: "<:en_ligne:576662449734811659>``s!kick``\** Exclut le membres Mentionné**\n` <:en_ligne:576662449734811659>``s!ban``\**Bannis un membres mentionné"
              }]
            }})
          };
      
                //if (command === "kick") {
	    //	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");	

  //  var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
	//	var msg = amsg.substr(amsg.indexOf(" ") + 23);
  // var reason = msg;
 //   if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

 //   let member = message.mentions.members.first ();
 //   let member2 = message.mentions.users.first ();
 //  var embed = new Discord.RichEmbed()
  // .setColor ("#f08619")
  // .setTitle ("Vous venez de vous faire kické :warning:")
 //  .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
 //  .addField("Depuis le serveur :", message.guild.name)
 //  .addField ("Pour la raison suivante :", reason)
   //.setFooter ("Vous n'êtes pas bannis du serveur et pouvez y revenir !!")
    
  //  let search = message.guild.channels.find(`name`, "modlogs")
 //   const a = new Discord.RichEmbed()
 //   .setTitle("test")
 //   member.send ({embed})
   //
//message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
// member.kick ();
 // }
	// if (command === "ban") {
	//	 	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");	

  //  var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
	//	var msg = amsg.substr(amsg.indexOf(" ") + 23);
 //  var reason = msg;
 //   if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

 //   let member = message.mentions.members.first ();
 //   let member2 = message.mentions.users.first ();
  // var embed = new Discord.RichEmbed()
  // .setColor ("#f08619")
  // .setTitle ("Vous venez de vous faire bannir :warning:")
  // .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
  // .addField("Depuis le serveur :", message.guild.name)
   //.addField ("Pour la raison suivante :", reason)
 //  .setFooter ("Vous êtes bannis, vous ne pourrez y retournez que en cas de unban 💮 !!")
    
  //  let search = message.guild.channels.find(`name`, "modlogs")
 //   const a = new Discord.RichEmbed()
    //.setTitle("test")
  //  member.send ({embed})
   
//message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
// member.ban();
     
 // }
})}
   if(command === "lock") {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    });
    let embed = new Discord.RichEmbed()
    .addField(`🔒 Salon verrouillé`,`**Le salon a été verrouillé par ${message.author}**`)
    message.channel.send ({embed})
    }
    if(command === "unlock") {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    });
    let lock = new Discord.RichEmbed()
    .addField(`🔓 Salon déverrouillé `,`**Le salon a été déverouillé par ${message.author}**`)
      
    message.channel.send(lock)
    }
if(command === "lockall") {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
  message.guild.channels.forEach (c => {
    
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    })
  });
    let lock = new Discord.RichEmbed()
    .addField(`🔒 Serveur verrouillé`,`**Le serveur à été verrouillé par ${message.author}**`)
      
    message.channel.send(lock)
}
  if(command === "unlockall") {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    message.guild.channels.forEach (c => {
      
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    })
    });
    let lock = new Discord.RichEmbed()
    .addField(`🔓 Serveur déverrouillé `,`**Le serveur à été déverouillé par ${message.author}**`)
      
    message.channel.send(lock)
  }
  if(command === "v-ok") {
         let role = message.guild.roles.find("name", "Membres Vérifié");

if (message.channel.name === "🚫vérification🚫") {
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez votre rôle :`,
        fields : [{
            name: ":white_check_mark:",
            value: "Tu veux entrez alors appuie sur la réaction !"
        }],
        footer: {
            text: "⚠ Tu a 2 minutes à partir de quand tu ajoute la réaction!  ⚠",
        }
    }})
    await base.react ("🔨");
      const collector = base.createReactionCollector((reaction, user) => user.id);
       
        collector.on('collect', async(reaction) => {
        if (reaction.emoji.name === "🔨") {
          collector.stop ();
          setTimeout (() => {
            base.delete ();
            message.channel.bulkDelete (5);
          }, 120000);
  var serv = message.guild.id
  message.channel.send("Merci de notez ci-dessous :\ " + serv).then((m) => {
      message.channel.awaitMessages(response => response.content === `${serv}`, {
        max: 1,
        time: 120000,
        errors: ['time'],
      })
      .then((collected) => {
        var test = client.channels.find(`id`, "583693815190126592");
       const embed = new Discord.RichEmbed()
        .addField ("Verification passé", message.author.username)
       .addField ("Du serveur :", message.guild.name)
   test.send(embed)
    message.member.addRole(role);
        })
        .catch(() => {
          m.edit('Vous n\'avez pas confirmer le code').then(m => {
              m.delete ()
            message.channel.bulkDelete(5);
            message.member.send ("Vous venez de vous faire kick de\ " + message.guild.name +"\ Car vous n'avez pas Compléter  vérification")
            message.member.kick ();
            var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle ("Vérification Refusée")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
  
            
          }, 10000);
        });
    });
        }
        });
   };
   }

  if (command === "verif-on") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");
          if (message.guild.channels.exists("name", "🚫vérification🚫")) return message.channel.send(`Ce serveur possède déjà la vérification`);

   // if (message.guild.roles.exists("name", "Membres Vérifié")) return message.channel.send(`Ce serveur possède le rôle Membres Validé`);
    message.guild.createRole({
                  name: "Membres Vérifié",
                    color: "#ffe200",
                    permissions: ["VIEW_CHANNEL"]
     })    
		
	message.guild.createChannel(`🚫vérification🚫`, "text").then(c => {
        let role = message.guild.roles.find("name", "Membres Vérifié");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
    message.channel.send("Il ne vous reste plus qu'à configurer tout vos salons sauf le salon vérification !")
  }
  if (command === "kick") {
	    	if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");	

    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire kické :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous n'êtes pas bannis du serveur et pouvez y revenir !!")
    
    let search = message.guild.channels.find(`name`, "modlogs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
 member.kick ();
  }
	 if (command === "ban") {
		 	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");	

    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire bannir :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes bannis, vous ne pourrez y retournez que en cas de unban 💮 !!")
    
    let search = message.guild.channels.find(`name`, "modlogs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
 member.ban();
     
  }
});
client.login (process.env.TOKEN2)