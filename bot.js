  
const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "t!";
var prefix2 = "t!";
const cooldown = new Set ();
client.on('ready', () => {
  console.log ("ready")
  client.user.setActivity ("Bot de test")
});
client.on ("message", async message => {
  if (message.author.id === "516274923828805667") {
  if (message.content.startsWith (prefix + "test484884")) {
    message.channel.send(`{<@&584305495771185162>}`).toString ()
  }
  
 if(message.content.startsWith (prefix + "say")) {
   message.delete()
		var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 1);
   var reason = msg;
let args = message.content.split(" ").slice(1);
   if (!args [0] || args [0] < 0 ) return message.channel.send("pas bien de rien mettre")
message.channel.send (`${reason}`)
}
 //if (message.content.startsWith(prefix +  "say")) {
//var args = message.content.split(` `).slice(1)
  //  if(!args[0]|| args[0] < 0 || args[0] > 10800) return message.channel.send (":x: Vous ne m'avez rien demander");
//	message.channel.send (`${args [0]}`)
//}
if (message.content.startsWith (prefix + "rename")) {
  let args = message.content.split(" ").slice(1);

  var name = message.mentions.users.first();
  message.name.setNickname(`${args[0]}`)
}
  if (message.content.startsWith (prefix + "si")) {
    var sale = message.guild.members.filter(m =>  ! m.user.bot).size
     var sale2 = message.guild.members.filter (m => m.user.bot).size
      const embed = new Discord.RichEmbed()
      .setColor ("#d11000")
  .setAuthor(`${message.guild.name}`, message.guild.iconURL)
      .addField("🔱 | Créateur du serveur :", message.guild.owner)
      .addField("📅 | Crée depuis le :", message.guild.createdAt)
      .addField ("🌎 | La région est :", message.guild.region)
      .addField ("👪 | Nombre de membres :", message.guild.memberCount)
      .addField ("♨ | Nombre de salon :", message.guild.channels.size)
      .addField ("🔨 | Nombre de Bot :", sale2)
      .addField ("👪 | Nombre d'humain", sale)
      .setThumbnail(message.guild.iconURL)
      message.channel.send ({embed})
      }
  if (message.content.startsWith (prefix + "test2")) {
     var sale = message.guild.members.filter(m =>  ! m.user.bot).size
     var sale2 = message.guild.members.filter (m => m.user.bot).size
     const yo = message.mentions.members.first();
    const embed = new Discord.RichEmbed()
    .addField(`Nombre de non bot : `, sale)
    .addField (`nombre bot :`, sale2)
    .addField(`yo`, yo.joinedAt)
     message.channel.send({embed})
  }
  if(message.content.startsWith (prefix + "ui")) {
    
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mentionné une personne !");
		var use = message.mentions.users.first();
    const use3 = message.mentions.members.first();
    var use2 = message.mentions.users.first ().username
    const embed = new Discord.RichEmbed()
    .setAuthor("information sur l'utilisateur :\ " + use2 +"#"+ use.discriminator)
    .addField(`A rejoin `+ message.guild.name, use3.joinedAt)
    
    message.channel.send ({embed})
  }
  if(message.content.startsWith (prefix + "lock")) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    });
    let lock = new Discord.RichEmbed()
    .addField(`🔒 Salon verrouillé`,`**Le salon a été verrouillé par ${message.author}**`)
      
    message.channel.send(lock)
    }
  if(message.content.startsWith (prefix + "unlock")) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    });
    let lock = new Discord.RichEmbed()
    .addField(`🔓 Salon déverrouillé `,`**Le salon a été déverouillé par ${message.author}**`)
      
    message.channel.send(lock)
    }
    if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`Ce serveur ne possède pas de rôle \`Support Team\` Le ticket ne peux donc pas être créé, Contacté un administrateur pour qu'ilcréele rôle avec le nom Exact !`);
      if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`Vous êtes déjà en possession d'un ticket `);
    message.guild.createChannel(`ticket-${message.author.name}`, "text").then(c => {
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
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
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
	  }
});
client.login(process.env.TOKEN)