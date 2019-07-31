const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";

bot.on("ready", () => {
    bot.user.setPresence({
        game: {
            name: `!open pour cree un ticket`
        }
    });
    console.log(
        `\nBot prêt !`
    );
});
bot.on("message", function(message) {
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

bot.login (process.env.TOKEN)