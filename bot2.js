const Discord = require('discord.js');
let client = new Discord.Client();
const prefix = "?";
client.on("message", function(message) {
    if (message.content === prefix + "open") {
      if (message.channel.id === "605852566701473834") {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setDescription("Choisissez le sujet de votre question parmis les 4 proposés\nCommandez => 💸\nFaire un don => 🏪\nRecrutement => 🌱\nProposer une suggestion => 🔧")

        const facturation = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Vous avez donc choisi la catégorie ``Commandez``")
            .setDescription("Vous pouvez maintenant nous donner ce que vous desirez commandez")

        const commercial = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Vous avez donc choisi une question en rapport avec les dons")
            .setDescription("Vous pouvez maintenant poser votre question")

        const recrutement = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Vous avez donc une question en rapport avec le recrutement")
            .setDescription("Vous pouvez maintenant poser votre question")

        const tech = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("RANDOM")
            .setTitle("Vous avez donc une suggestion à nous faire part")
            .setDescription("Vous pouvez maintenant poser votre suggestion")


        message.guild.createChannel("Ticket-" + message.author.username, "text")
            .then(c => {
                c.overwritePermissions(message.author, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
                c.overwritePermissions("586121137545543691", {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
                c.overwritePermissions("586121182097440778", {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
                c.overwritePermissions("586121225487777807", {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
                c.overwritePermissions("586121269699805187", {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true
                })
                c.overwritePermissions(message.guild.id, {
                    VIEW_CHANNEL: false
                })
                c.overwritePermissions("515590705511530523", {
                    VIEW_CHANNEL: false
                })
                c.send(message.author, embed).then(async data => {
                data.react("💸")
                await data.react("🏪")
                await data.react("🌱")
                await data.react("🔧")
                    .then(ok => {
                        const msgreact = data.createReactionCollector((reaction, user) => user.id === message.author.id);
                        msgreact.on("collect", async (reaction) => {
                            if (reaction.emoji.name === "💸") { //menu d'aide
                                reaction.remove(message.author.id);
                                data.edit(facturation)
                                data.clearReactions()
                            } else {
                                if (reaction.emoji.name === "🏪") { //menu d'aide
                                    reaction.remove(message.author.id);
                                    data.edit(commercial)
                                    data.clearReactions()
                                } else {
                                    if (reaction.emoji.name === "🌱") { //menu d'aide
                                        reaction.remove(message.author.id);
                                        data.edit(recrutement)
                                        data.clearReactions()
                                    } else {
                                        if (reaction.emoji.name === "🔧") { //menu d'aide
                                            reaction.remove(message.author.id);
                                            data.edit(tech)
                                            data.clearReactions()
                                        }
                                    }
                                }
                            }
                        })
                    })
            })
          
        })
    } else {
      message.channel.send("Merci d'utiliser cette commande dans <#586130252905054221>")
    }}
    if (message.content === prefix + "close") {
        if (message.channel.name.startsWith("ticket-")) {
            message.channel.delete()
        } else {
            message.channel.send("Impossible de fermer ce ticket")
        }
    }
})
});
client.on ("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  
  
  if (message.content.startsWith ( prefix + "ban")) {
		 	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send (":x: Tu ne peux pas executer la commande demandée");	

    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first () || message.mentions.id.first ();
    let member2 = message.mentions.users.first () || message.mentions.id.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire bannir :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes bannis, vous ne pourrez y retournez que en cas de unban 💮 !!")
    
    let search = message.guild.channels.find(`name`, "logs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
   member2.ban ();
   member.ban();
     
  }
  if (message.content.startsWith(prefix + "kick")) {
	    	if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Tu ne peux pas executer la commande demandée");	

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
    
    let search = message.guild.channels.find(`name`, "logs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
 member.kick ();
  }
  if (message.content.startsWith (prefix + "warn")) {
    amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle (":warning: Avertissement NerveRadio :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous avez reçu un avertissement ")
    
    let search = message.guild.channels.find(`name`, "modlogs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire warn pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
  } 
  if (message.content.startsWith (prefix + "mute")) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Tu ne peux pas executer la commande demandée");	
     if(message.mentions.users.size === 0)
			return message.reply("Vous avez oublier de mentionner une personne !")
    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")
 let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire mute :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes mute  💮 !!")
    member.addRole('564605053055401994')
    member.send ({embed})
    message.channel.send ("```diff\nL'utilisateurs \ "+ member2.username +"#"+ member2.discriminator +"\ Viens de ce faire mute  pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
  }
  if (message.content.startsWith (prefix + "unmute")) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Tu ne peux pas executer la commande demandée");	
     if(message.mentions.users.size === 0)
			return message.reply("Vous avez oublier de mentionner une personne !")
   // var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
	//	var msg = amsg.substr(amsg.indexOf(" ") + 23);
   //var reason = msg;
  //  if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")
 let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire unmute :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
  // .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes unmute💮 !!")
    member.removeRole('564605053055401994')
    member2.removeRole ('564605053055401994')
    member.send ({embed})
    message.channel.send (member2.username +"#"+ member2.discriminator + " N'est plus réduit au silence !")
  }
  var fly = [
    "discord.gg",
    
      //"ect..."
      ];
  if (fly.some (x => message.content.toLowerCase().includes(fly))) {
    message.reply (":x: Faire de la publicité vous oppose au règlement ! ")
    message.delete(message.author)
  }
  //var fly = [
    //"discord.gg",
    
      //"ect..."
     // ];
  //if (fly.some (x => message.content.toLowerCase().includes(fly))) {
   // message.reply ("Lien interdit sur ce serveur !")
    //message.delete(message.author)
 // }
  if(message.content.startsWith (prefix + "clear")) {
		message.delete()
		if(!message.member.hasPermission("KICK_MEMBERS")) 
			return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:").then(message => {message.delete(5000)})
	const deleteCount = parseInt(args[0], 10);
	if(!deleteCount || deleteCount < 2 || deleteCount > 100)
		return message.reply("Veuillez indiquer un nombre compris entre 2 et 100 pour le nombre de messages à supprimer.").then(message => {message.delete(5000)});
		const fetched = await message.channel.fetchMessages({limit: deleteCount});
		message.channel.bulkDelete(fetched)
		.catch(error => message.reply(`Impossible de supprimer des messages à cause de: ${error}`)).then(message => {message.delete(5000)});
	}
  var banni = [
   "connard",
   "pute",
   "putain",
   "tg",
   "nique",
   "con",
   "conne",
   "salope",
   "je ten merde",
   "j'ten merde",
   "merde",
   "pd",
   "fdp",
   "cons",
   "con",
   "tes con",
   "nike",
   "nike ta mère",
   "ta daronne",
   "daronne",
   "daronnes",
   "ta daronnes",
   "darones",
   "darone",
   "put",
   "ta darone",
   "fils de pute",
   "fils de put",
   "salop",
   "ta geule",
   "violé",
   "viole",
   "encule",
    "enculer",
   "bite",
   //"ect.."
];
  if (banni.some(x => message.content.toLowerCase().split ().includes(x))) {
    message.reply("Message supprimé !\n :warning: Langage Trop Familier !")
    message.delete(message.author)
  }
  if (message.content.startsWith (prefix + "help")) {
  

const embed = new Discord.RichEmbed()
.setAuthor("Bienvenue sur le menu d'aide de Le coin gameur! ")
.setImage(message.author.avatarURL)
.addField ("Kick","Kick une personne mentionner")
.addField ("Ban","Bannis une personne mentionner")
.addField ("Warn","Avertir un utilisateurs que sont comportement est innaproprié!" )
.addField ("Mute","Réduit au silence une personne mentionner")
.addField ("Unmute","Revoque la réduction au silence d'une personne mentionner")
.setFooter ("Anti-pub et Anti-insulte activé");
message.channel.send({embed})
}
});
client.login (process.env.TOKEN)
