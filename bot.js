  
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
  //if (message.author.id === "516274923828805667") {
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
          m.edit('Vous n\'avez pas choisi la catégorie du help').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
    if (message.content.startsWith (prefix + "help")) {
      const embed = new Discord.RichEmbed()
      .setColor ("RANDOM")
      .setTitle("📈Choisissez là catégorie que vous souhaitez voir :")
      .addField("🔨 | Modérateurs","Envoyez modo")
      .addField ("👪 | Utilisateurs","Envoyez Je user")
      .addField ("🔩 | Commande pour la création des serveurs","Envoyez serveur")
      .setFooter ("⚠Vous avez 30 seconds⚠");
      message.channel.send ({embed}).then((m) => {
      message.channel.awaitMessages(response => response.content === 'user', {
        max: 1,
        time: 30000,
        errors: ['time'],
      })
        .then ((collected) => {
        let eb = new Discord.RichEmbed()
        .setColor ("RANDOM")
        .addField("Le placard de l'utilisateurs","<:en_ligne:576662449734811659>``g!verif``\ **Vous permet de verifier si l'utilisateur mentionné est dans le staff du bot**\n<:en_ligne:576662449734811659>``g!gen``\ **Vous permet de générer une invitation permanente! **\n<:en_ligne:576662449734811659>``g!avatar``\ **Vous donne la photo de profil de la personne mentionné !**\n<:en_ligne:576662449734811659>``g!uptime``\ **Voir depuis quand le bot ne c'est pas redémarré**\n<:en_ligne:576662449734811659>``g!ping``\ **Regarder le ping du bot**\n<:en_ligne:576662449734811659>``g!setup``\ **Vous permet de voir comment construire votre serveur**\n<:en_ligne:576662449734811659>``g!view``\ **Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes !**\n<:en_ligne:576662449734811659>``g!contact``\**faire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)**", true)
       message.channel.send (eb)
      });
      message.channel.awaitMessages(response => response.content === 'modo', {
        max: 1,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
          let salut =  new Discord.RichEmbed()
          .setColor ("RANDOM")
          .addField("Le placard de la modération","<:en_ligne:576662449734811659>``g!lock``\ **Interdit au rôle everyone de parler sur le salon**\n<:en_ligne:576662449734811659>``g!unlock``\ **Autorise de nouveaux au role everyone de parler**\n<:en_ligne:576662449734811659>``g!say``\ **Fait parler le bot à votre place**\n<:en_ligne:576662449734811659>``g!slowmode``\ **Mettre un slowmode (mettre 0 pour désactiver)**\n<:en_ligne:576662449734811659>``g!deleteserv``\ **Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)**\n<:en_ligne:576662449734811659>``g!eval``\ **Réservé à l'owner du bot**\n<:en_ligne:576662449734811659>``g!kick``\ **Exclut le membre mentionner**\n<:en_ligne:576662449734811659>``g!ban``\ **Bannis le membre mentionner**\n<:en_ligne:576662449734811659>``g!reglement``**vous fait un jolie règlement pré-definis**", true);
message.channel.send(salut)
        })   
        .then((m) => {
      message.channel.awaitMessages(response => response.content === 'serveur', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          let serveur = new Discord.RichEmbed()
          .setColor ("RANDOM")
          .addField(" Communautaire :","<:en_ligne:576662449734811659>``g!commu``**\ Crée votre serveur sous le thème de la communauté**", true)
.addField(" Basique :","<:en_ligne:576662449734811659>``g!salon``\ **Création de votre serveur sous le thème global**", true)
.addField("Publicitaire :","<:en_ligne:576662449734811659>``g!pub``\ **Crée un serveur sous le thème Publicitaire**\n<:en_ligne:576662449734811659>``g!p-2``\ **Crée un serveur sous le thème Publicitaire 2**", true)
.addField(" Uniquement les rôles :","<:en_ligne:576662449734811659>``g!role``\ **Création des roles uniquement**", true)
message.channel.send (serveur)
        })
        .catch(() => {
          m.edit('Vous n\'avez pas précisez le help souhaitez').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
      })
    
  }         
                 if(message.content.startsWith (prefix +  "h")) {

    message.channel.send({embed: {
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Modération",
            value: "Envoyez modo"
        }, {
            name: ":family: | Utilisateurs",
            value: "Envoyez User"
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            value: "Envoyez serveur"
        }],
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
    }})
}           
    if(message.content.startsWith (prefix + "y")) {
 
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Modération",
            value: "Envoyez modo"
        }, {
            name: ":family: | Utilisateurs",
            value: "Envoyez User"
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            value: "Envoyez serveur"
        }],
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
    }})
 
    await base.react('🔨');
    await base.react('👪');
    await base.react('🔩');
 
    const collector = base.createReactionCollector((reaction, user) => user.id === message.author.id);
       
        collector.on('collect', async(reaction) => {
       
        if (reaction.emoji.name === "🔨") {
 
            base.edit({ embed: {
                fields: [{
                    value: "Le placard de la modération",
                    text: ":en_ligne:``g!lock``\ **Interdit au rôle everyone de parler sur le salon**\n:en_ligne:``g!unlock``\ **Autorise de nouveaux au role everyone de parler**\n:en_ligne:``g!say``\ **Fait parler le bot à votre place**\n:en_ligne:``g!slowmode``\ **Mettre un slowmode (mettre 0 pour désactiver)**\n:en_ligne:``g!deleteserv``\ **Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)**\n:en_ligne:``g!eval``\ **Réservé à l'owner du bot**\n:en_ligne:``g!kick``\ **Exclut le membre mentionner**\n:en_ligne:``g!ban``\ **Bannis le membre mentionner**\n:en_ligne:``g!reglement``**vous fait un jolie règlement pré-definis**"
                }]
            }})
        };
 
        if (reaction.emoji.name === "👪") {
 
            base.edit({ embed: {
                title: "Le placard de l'utilisateurs",
                description: `:en_ligne:g!verif Vous permet de verifier si l'utilisateur mentionné est dans le staff du bot
               :en_ligne:g!gen Vous permet de générer une invitation permanente!
               :en_ligne:g!avatar Vous donne la photo de profil de la personne mentionné !
               :en_ligne:g!uptime Voir depuis quand le bot ne c'est pas redémarré
                :en_ligne:g!ping Regarder le ping du bot
                :en_ligne:g!setup Vous permet de voir comment construire votre serveur
                :en_ligne:g!view Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes !
               :en_ligne:g!contactfaire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)`
 
           }})
 
           collector.stop();
       }
 
       if (reaction.emoji.name === "🔩") {
 
           base.edit({ embed : {
               fields: [{
                   value: "Communautaire :",
                   text: ":en_ligne:``g!commu``**\ Crée votre serveur sous le thème de la communauté**"
               }, {
                   value : "Basique :",
                   text: ":en_ligne:``g!salon``\ **Création de votre serveur sous le thème global**"
               }, {
                   value : "Publicitaire :",
                   text: ":en_ligne:``g!pub``\ **Crée un serveur sous le thème Publicitaire**\n:en_ligne:``g!p-2``\ **Crée un serveur sous le thème Publicitaire 2**"
               }, {
                   value: "Uniquement les rôles",
                   text: ":en_ligne:``g!role``\ **Création des roles uniquement**"
               }]
           }})
       }
       
   });
 
};
    
  
if(message.content.startsWith (prefix + "f")) {
 
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Modération",
            name: "Envoyez modo"
        }, {
            name: ":family: | Utilisateurs",
            name: "Envoyez User"
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            name: "Envoyez serveur"
        }],
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
    }})
 
    await base.react('🔨');
    await base.react('👪');
    await base.react('🔩');
 
    const collector = base.createReactionCollector((reaction, user) => user.id === message.author.id);
       
        collector.on('collect', async(reaction) => {
       
        if (reaction.emoji.name === "🔨") {
 
            base.edit({ embed: {
                fields: [{
                    name: "Le placard de la modération",
                    text: ":en_ligne:``g!lock``\ **Interdit au rôle everyone de parler sur le salon**\n:en_ligne:``g!unlock``\ **Autorise de nouveaux au role everyone de parler**\n:en_ligne:``g!say``\ **Fait parler le bot à votre place**\n:en_ligne:``g!slowmode``\ **Mettre un slowmode (mettre 0 pour désactiver)**\n:en_ligne:``g!deleteserv``\ **Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)**\n:en_ligne:``g!eval``\ **Réservé à l'owner du bot**\n:en_ligne:``g!kick``\ **Exclut le membre mentionner**\n:en_ligne:``g!ban``\ **Bannis le membre mentionner**\n:en_ligne:``g!reglement``**vous fait un jolie règlement pré-definis**"
                }]
            }})
 
            
           
        };
 
        if (reaction.emoji.name === "👪") {
 
            base.edit({ embed: {
                title: "Le placard de l'utilisateurs",
                description: `:en_ligne:g!verif Vous permet de verifier si l'utilisateur mentionné est dans le staff du bot
             :en_ligne:g!gen Vous permet de générer une invitation permanente!
             :en_ligne:g!avatar Vous donne la photo de profil de la personne mentionné !
             :en_ligne:g!uptime Voir depuis quand le bot ne c'est pas redémarré
                :en_ligne:g!ping Regarder le ping du bot
                :en_ligne:g!setup Vous permet de voir comment construire votre serveur
                :en_ligne:g!view Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes !
             :en_ligne:g!contactfaire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)`
 
         }})
 
        
     }
 
     if (reaction.emoji.name === "🔩") {
 
         base.edit({ embed : {
             fields: [{
                 name: "Communautaire :",
                 text: ":en_ligne:``g!commu``**\ Crée votre serveur sous le thème de la communauté**"
             }, {
                 name : "Basique :",
                 text: ":en_ligne:``g!salon``\ **Création de votre serveur sous le thème global**"
             }, {
                 name : "Publicitaire :",
                 text: ":en_ligne:``g!pub``\ **Crée un serveur sous le thème Publicitaire**\n:en_ligne:``g!p-2``\ **Crée un serveur sous le thème Publicitaire 2**"
             }, {
                 name: "Uniquement les rôles",
                 text: ":en_ligne:``g!role``\ **Création des roles uniquement**"
             }]
         }})
 
         
     }
   
 });
 
};
  if(message.content.startsWith (prefix + "?")) {
 
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Modération",
            value: "Envoyez modo"
        }, {
            name: ":family: | Utilisateurs",
            value: "Envoyez User"
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            value: "Envoyez serveur"
        }],
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
    }})
 
    await base.react('🔨');
    await base.react('👪');
    await base.react('🔩');
 
    const collector = base.createReactionCollector((reaction, user) => user.id === message.author.id);
       
        collector.on('collect', async(reaction) => {
       
        if (reaction.emoji.name === "🔨") {
 
            base.edit({ embed: {
                fields: [{
                    name: "Le placard de la modération",
                    value: "<:en_ligne:576662449734811659>``g!lock``\ **Interdit au rôle everyone de parler sur le salon**\n<:en_ligne:576662449734811659>``g!unlock``\ **Autorise de nouveaux au role everyone de parler**\n<:en_ligne:576662449734811659>``g!say``\ **Fait parler le bot à votre place**\n<:en_ligne:576662449734811659>``g!slowmode``\ **Mettre un slowmode (mettre 0 pour désactiver)**\n<:en_ligne:576662449734811659>``g!deleteserv``\ **Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)**\n<:en_ligne:576662449734811659>``g!eval``\ **Réservé à l'owner du bot**\n<:en_ligne:576662449734811659>``g!kick``\ **Exclut le membre mentionner**\n<:en_ligne:576662449734811659>``g!ban``\ **Bannis le membre mentionner**\n<:en_ligne:576662449734811659>``g!reglement``**vous fait un jolie règlement pré-definis**"
                }]
            }})
 
            collector.stop();
           
        };
 
        if (reaction.emoji.name === "👪") {
 
            base.edit({ embed: {
                title: "Le placard de l'utilisateurs",
                description: `<:en_ligne:576662449734811659>g!verif Vous permet de verifier si l'utilisateur mentionné est dans le staff du bot
            <:en_ligne:576662449734811659>g!gen Vous permet de générer une invitation permanente!
            <:en_ligne:576662449734811659>g!avatar Vous donne la photo de profil de la personne mentionné !
            <:en_ligne:576662449734811659>g!uptime Voir depuis quand le bot ne c'est pas redémarré
                <:en_ligne:576662449734811659>g!ping Regarder le ping du bot
                <:en_ligne:576662449734811659>g!setup Vous permet de voir comment construire votre serveur
                <:en_ligne:576662449734811659>g!view Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes !
            <:en_ligne:576662449734811659>g!contactfaire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)`
 
        }})
 
        collector.stop();
    }
 
    if (reaction.emoji.name === "🔩") {
 
        base.edit({ embed : {
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
 
        collector.stop();
    }
        
});
  };

   if(message.content.startsWith (prefix + "rea")) {
if (message.channel.id === "584904228833591323") {
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez votre rôle :`,
        fields : [{
            name: ":white_check_mark:",
            value: "Accepter le règlement"
        }],
        footer: {
            text: "⚠ Réagit et gagne ton role ⚠",
        }
    }})
    await base.react ("🔨");
      const collector = base.createReactionCollector((reaction, user) => user.id);
       
        collector.on('collect', async(reaction) => {
        if (reaction.emoji.name === "🔨") {
          collector.stop ();
          setTimeout (() => {
            base.delete ();
          }, 10000);
  var serv = message.guild.id || message.author.id
  message.channel.send("Merci de notez ci-dessous :\ " + serv).then((m) => {
      message.channel.awaitMessages(response => response.content === `${serv}`, {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
        var test = client.channels.find(`id`, "583693815190126592");
       const embed = new Discord.RichEmbed()
        .addField ("Verification passé", message.author.username)
   test.send(embed)
    message.member.addRole(`584843275047796741`);
        })
        .catch(() => {
          m.edit('Vous n\'avez pas confirmer le code').then(m => {
              m.delete ()
            message.member.send ("Vous venez de cous faire kick de\ " + message.guild.name +"\ Car vous n'avez pas comérification vérification");
          }, 10000);
        });
    });
        }
        });
   };
   }
});
client.login(process.env.TOKEN)