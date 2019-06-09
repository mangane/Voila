  
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
  if(message.author.id === "586962507776655372") {
  } else {
   var link = [
      "http",
      //"ect..."
      ];
    if (link.some (x => message.content.toLowerCase().includes(link))) {
      message.reply ("Lien Interdit sur ce serveur !")
      message.delete (message.author)
    }
    var fly = [
    "discord.gg",
    
      //"ect..."
      ];
  if (fly.some (x => message.content.toLowerCase().includes(x=fly))) {
    message.reply ("Lien interdit sur ce serveur !")
    message.delete(message.author)
  }
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
            name: "🔨 | Modération",
            value: "Voir les commandes de modération "
        }, {
            name: ":family: | Utilisateurs",
            value: "Voir les commandes Utilisateurs "
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            value: "Voir les commandes de création de serveur"
          }, {
            name: "⛔| Fermer l'aide",
value: "Vous ne pourrez plus naviguez dans l'aide cependant le message sera encore présent !"
        }], 
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
    }});  
    await base.react('🔨');
    await base.react('👪');
    await base.react('🔩');
    await base.react ('🔐');
   await base.react('⛔');
await base.react('🏠');
 
    const collector = base.createReactionCollector((reaction, user) => user.id === message.author.id);
       
        collector.on('collect', async(reaction) => {
       setTimeout (() => {
         collector.stop ();
       }, 30000);
        if (reaction.emoji.name === "🔨") {
 
            base.edit({ embed: {
              color: 0xFF0000,
                fields: [{
                    name: "Le placard de la modération",
                    value: "**<:en_ligne:576662449734811659>``g!lock``\ Interdit au rôle everyone de parler sur le salon\n<:en_ligne:576662449734811659>``g!unlock``\ Autorise de nouveaux au role everyone de parler\n<:en_ligne:576662449734811659>``g!say``\ Fait parler le bot à votre place\n<:en_ligne:576662449734811659>``g!slowmode``\ Mettre un slowmode (mettre 0 pour désactiver)\n<:en_ligne:576662449734811659>``g!deleteserv``\ Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)\n<:en_ligne:576662449734811659>``g!eval``\ Réservé à l'owner du bot\n<:en_ligne:576662449734811659>``g!kick``\ Exclut le membre mentionner\n<:en_ligne:576662449734811659>``g!ban``\ Bannis le membre mentionner\n<:en_ligne:576662449734811659>``g!reglement``vous fait un jolie règlement pré-definis**"
                }]
            }})
 
          //  collector.stop();
           
        };
 
        if (reaction.emoji.name === "👪") {
 
            base.edit({ embed: {
              color: 0xFF0000,
                title: "Le placard de l'utilisateurs",
              description: "<:en_ligne:576662449734811659>``g!new``\ **Créé un ticket de support\n<:en_ligne:576662449734811659>``g!verif``\ Vous permet de verifier si l'utilisateur mentionné est dans le staff du bot\n<:en_ligne:576662449734811659>``g!gen``\ Vous permet de générer une invitation permanente!\n <:en_ligne:576662449734811659>``g!avatar``\ Vous donne la photo de profil de la personne mentionné !\n <:en_ligne:576662449734811659>``g!uptime``\ Voir depuis quand le bot ne c'est pas redémarré\n<:en_ligne:576662449734811659>``g!ping``\ Regarder le ping du bot\n<:en_ligne:576662449734811659>``g!setup``\ Vous permet de voir comment construire votre serveur\n<:en_ligne:576662449734811659>``g!view``\ Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes\n<:en_ligne:576662449734811659>``g!contact``\ faire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)**"
 
        }})
 
        //collector.stop();
    }
 
    if (reaction.emoji.name === "🔩") {
 
        base.edit({ embed : {
          color: 0xFF0000,
            fields: [{
                name: "Communautaire :",
                value: "<:en_ligne:576662449734811659>``g!commu``**\ Crée votre serveur sous le thème de la communauté**"
            }, {
                name : "Basique :",
                value: "<:en_ligne:576662449734811659>``g!salon``\ **Création de votre serveur sous le thème global**"
            }, {
                name : "Publicitaire :",
                value: "<:en_ligne:576662449734811659>``g!pub``\ **Crée un serveur sous le thème Publicitaire**\n<:en_ligne:576662449734811659>``g!p-2``\ **Crée un serveur sous le thème Publicitaire 2**"
            }, {
                name: "Uniquement les rôles",
                value: "<:en_ligne:576662449734811659>``g!role``\ **Création des roles uniquement**"
            }]
            }})
}
          if (reaction.emoji.name === "🔐") {
            
            base.edit ({ embed : {
              color: 0xF0000,
              title: "Les commandes De Protection",
              description: "<:en_ligne:576662449734811659>``g!verif-on``\ **Vous permet D'activer une protection  (vérification à l'arrivée) sur votre serveur**\n <:en_ligne:576662449734811659>``g!v-ok``\ **Permet de passez la vérification**\n ",
            }})
          }
          if(reaction.emoji.name === "⛔") {
          base.clearReactions();
          }
          if(reaction.emoji.name === "🏠") {
       
           base.edit ({ embed : {
             
             color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Modération",
            value: "Voir les commandes de modération "
        }, {
            name: ":family: | Utilisateurs",
            value: "Voir les commandes Utilisateurs "
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            value: "Voir les commandes de création de serveur"
          }, {
            name: "⛔| Fermer l'aide",
value: "Vous ne pourrez plus naviguez dans l'aide cependant le message sera encore présent !"
        }], 
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
                 }})
          }
          
})
 };

            
  
  if(command === "test") {
    message.channel.send("tres")
message.react(':grimacing:')
 setTimeout (() => {
         message.clearReactions();
       }, 30000);
  } 
  if (command === "info") {
message.channel.send("Je vais te donner les infos").then ( m => 
setTimeout (() => { 
m.edit ("Salut toi")
}, 5000)
    )}
  if (command === "role") {
                      if (message.author.id ===  "459986110525997067","516274923828805667") {
                          message.guild.createRole({
                  name: "[🔨] Administrateurs",
                    color: "#ffe200",
                    permissions: ["ADMINISTRATOR"]
     })                 
    message.guild.createRole({
                  name: "[🔧] Modérateurs ",
                    color: "#f08619",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })    
    message.guild.createRole({
                  name: "[🆘] Helpers",
                    color: "#d11000",
                    permissions: []
     })    
    message.guild.createRole({
                  name: "[🆙] Partenaires",
                    color: "#10d6b3",
                    permissions: []
     })    
    message.guild.createRole({
                  name: "Membres Vérifié",
                    color: "#008080",
                    permissions: []
     })    
    message.guild.createRole({
                  name: "[💮] Bots",
                    color: "#3b3b71",
                    permissions: ["ADMINISTRATOR"]
     
                      })
  
                             
  }
  }
  
  if (command === "kick") {
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
  }
   });
client.login(process.env.TOKEN)