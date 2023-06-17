const TOKEN = "MTExOTY0MDI3ODEyMzQyMTY5Ng.GeV12T.ZV9vSUV44vpcVE9ojIAeBP757ElwavnRA6009s"

const { Client, GatewayIntentBits } = require("discord.js");
const PREFIX = "!";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});



client.on('ready', () => {
    console.log("Bot connecté en tant que " + client.user.tag);

    client.user.setPresence({
        activities: [{
            name: 'Regarde pornhub'
        }],
        status: 'dnd'
    });
});

client.on('messageCreate', (message) => {
    console.log(message);

    if(message.content.startsWith(PREFIX)) {
        const input = message.content.slice(PREFIX.length).trim().split(" ");
        const command = input.shift();

        switch(command) {
            case "aide": 
                message.channel.send("Voici la documentation du bot");
                break;
        }



    }
});

client.login(TOKEN);
