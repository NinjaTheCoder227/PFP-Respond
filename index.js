const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!pfp') {
        // User's profile picture
        message.channel.send(`Here is your profile picture: ${message.author.displayAvatarURL()}`);
    } else if (message.content === '!botpfp') {
        // Bot's profile picture
        message.channel.send(`Here is my profile picture: ${client.user.displayAvatarURL()}`);
    } else if (message.content === '!servericon') {
        // Server's icon
        if (message.guild) {
            message.channel.send(`Here is the server icon: ${message.guild.iconURL()}`);
        } else {
            message.channel.send('This command can only be used in a server.');
        }
    }
});

// Bot Login
client.login('YOUR_BOT_TOKEN');
