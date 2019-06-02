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
      const embed = new Discord.RichEmbed()
      .setColor ("#d11000")
  .setAuthor(`${message.guild.name}`, message.guild.iconURL)
      .addField("🔱 | Créateur du serveur :", message.guild.owner)
      .addField("📅 | Crée depuis le :", message.guild.createdAt)
      .addField ("🌎 | La région est :", message.guild.region)
      .addField ("👪 | Nombre de membres :", message.guild.memberCount)
      .addField ("♨ | Nombre de salon :", message.guild.channels.size)
      .setThumbnail(message.guild.iconURL)
      message.channel.send ({embed})
      }
  if (message.content.startsWith (prefix + "test2")) {
     var sale = message.guild.members.filter(m =>  ! m.user.bot).size
     var sale2 = message.guild.members.filter (m => m.user.bot).size
    const embed = new Discord.RichEmbed()
    .addField(`Nombre de non bot : `, sale)
    .addField (`nombre bot :`, sale2)
     message.channel.send({embed})
  }
  if(message.content.startsWith (prefix + "ui")) {
    
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mentionné une personne !");
		var use = message.mentions.users.first();
    var use2 = message.mentions.users.first ().username
    const embed = new Discord.RichEmbed()
    .setAuthor("information sur l'utilisateur :\ " + use2 +"#"+ use.discriminator)
    
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
    if(message.content === prefix + "lockall") {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    
     // message.guild.overwritePermissions(message.guild.id, {
       // SEND_MESSAGES: false
    let role2 = message.guild.role.find("name", "@everyone").then(r => 
            r.guild.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
    }))
                                                    
    let lock = new Discord.RichEmbed()
    .addField(`🔒 Salon verrouillé`,`**Le salon a été verrouillé par ${message.author}**`)
      
    message.channel.send(lock)
    }
    if(message.content === prefix + "unlockall") {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS` ❌**")
  let role2 = message.guild.role.find("name", "@everyone").then (r => 
            r.guild.overwritePermissions(role2, {
                SEND_MESSAGES: null,
                READ_MESSAGES: null,
            MENTION_EVERYONE: false
            }))
   // message.guild.overwritePermissions(message.guild.id, {
     // SEND_MESSAGES: null
  //});
  let unlock = new Discord.RichEmbed()
  .addField(`🔓 Salon déverrouillé`,`**Le salon a été déverrouillé par ${message.author}**`)
  
  message.channel.send(unlock)
    }
  }                                                        
});
client.login(process.env.TOKEN)