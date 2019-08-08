const Discord = require('discord.js');
let client = new Discord.Client();
const prefix = "!!";
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '《👋》bienvenue');
    if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor(0xF0000)
    .setDescription("Bienvenue Sur le serveur ``Le coin gameur``")
   // .setAuthor(` Nous sommes maintenant : \ ` + member.guild.memberCount);

    channel.send({embed})
});
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === '《👋》bienvenue');
    if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor(0xF0000)
    .setDescription("Un membre et partis quelle dommage")
    channel.send({embed})
});

client.on ("message", async message => {
 // {
        //"id": 7,
        //"name": "Weather info",
      //  "activated": true,
       // "config": "weather",
      //  "info": {
          //  "example": "!weather Paris",
           // "note": "",
         //   "requirements": ""
       // }
   // }

  if (message.content.startsWith (prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`Ce serveur ne possède pas de rôle \`Support Team\` Le ticket ne peux donc pas être créé, Contacté un administrateur pour qu'ilcréele rôle avec le nom Exact !`);
      if (message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.channel.send(`Vous êtes déjà en possession d'un ticket `)
    message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`<:okay:578974520199741472> Votre ticket à bien été créé  ${c}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Bonjour ${message.author.username}!`, `Merci d'expliquer avec le plus de précisions votre problème puis patientez qu'un **Support Team** viennent vous aider`)
        .setTimestamp()
        .setFooter (prefix+`close pour fermer`);
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.startsWith (prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous pouvez utiliser cette commande uniquement sur votre ticket !`);

    message.channel.send(`Vous êtes sûr ? Vous ne pourrez pas revenir en arrière ! Pour confirmer taper ` + prefix+`confirm (vous avez 20 seconds)`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === prefix +'confirm', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Vous n\'avez pas confirmer la fermeture du ticket').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
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
  var fly = [
    "discord.gg",
    
      //"ect..."
      ];
  if (fly.some (x => message.content.toLowerCase().includes(fly))) {
    message.reply ("Lien interdit sur ce serveur !")
    message.delete(message.author)
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
.addField ("close","Fermer votre ticket support")
.addField ("new","Ouvrir un ticket support")
.addField ("Ban","Bannis une personne mentionner")
.addField ("Warn","Avertir un utilisateurs que sont comportement est innaproprié!" )
.addField ("Mute","Réduit au silence une personne mentionner")
.addField ("Unmute","Revoque la réduction au silence d'une personne mentionner")
.setFooter ("Anti-pub et Anti-insulte activé");
message.channel.send({embed})
}
  if (message.content.startsWith (prefix + "stats")) {
    message.channel.send ("Actualisation dans 59 seconds").then (message => {
      setInterval(() => {
message.edit ("stats")
      }, 1*60000);
    
    })
    }
});
client.login (process.env.TOKEN)