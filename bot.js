const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "+";
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'général');
    if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor(0xF0000)
    .setDescription("Bienvenue Sur le serveur ``NerveRadio !!`` ")
    .setAuthor(` Nous sommes maintenant : \ ` + member.guild.memberCount);
    channel.send({embed})
});
client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `Nerve Moderation `, type: "STREAMING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `+help`, type: "STREAMING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `Love NerveRadio `, type: "STREAMING" } });
        }, 1*70000);
});
client.on ("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  if (message.content.startsWith ( prefix + "tempmute")) {
        let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!tomute) return message.reply("Could't find user.");
        if (tomute.hasPermission("ADMINISTRATOR")) return message.reply("He's an administrator. You can't do that!");
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You don't have permission");

        let muterole = message.guild.roles.find(`name`, "muted");
        let muteEmbed = new Discord.RichEmbed()
            .setDescription("~MUTED~")
            .setColor("#e56b00")
            .addField("Muted User", `${tomute} with ID ${tomute.id}`)
            .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Muted In", message.channel)
            .addField("Time", message.createdAt)

        let channel = message.guild.channels.find(ch => ch.name === 'logs');
        if (!channel) {
            message.channel.send("Can't find a 'logs' channel.");
            return;
        }
        channel.send(muteEmbed);
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: "#000000"
                })
                message.guild.channels.forEach(async(channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SPEAK: false
                    })
                })
            } catch (e) {
                console.log(e.stack);
            }
        }

        let mutetime = args[1];
        if (!mutetime) return message.reply("You didn't specify a time!");

        await (tomute.addRole(muterole));
        message.reply(`<@${tomute.id}> has been muted for ${(mutetime)}`)

        setTimeout(function() {
            tomute.removeRole(muterole);
            message.channel.send(`<@${tomute.id}> has been unmuted!`)

        }, (mutetime));

    }
});
client.login (process.env.TOKEN)