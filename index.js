const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

// Initialize the bot client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Listen for when a user joins the server
client.on('guildMemberAdd', async (member) => {
    console.log(`User joined: ${member.user.tag}`);

    // Find the channel where the welcome message should be sent
    const welcomeChannel = member.guild.channels.cache.get('1280492883199266937');

    if (welcomeChannel) {
        // Create the embed message
        const welcomeEmbed = new EmbedBuilder()
            .setColor('#2F3136')
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 128 })) // User's profile picture
            .setAuthor({ 
                name: `Welcome @${member.user.username}`, 
                iconURL: 'https://cdn.discordapp.com/embed/avatars/0.png' // Default icon
            })
            .setTitle(`✶Welcome To Mercenary™ `)
            .setDescription(`
            <a:heart:1289793488946331711> <@${member.user.id}> 

            <a:heart3:1289803379068895253> <a:heart4:1289804880713617420> **Check Out!! **
            
            <a:whitearrow:1289791194318110761> <:heart:1289791508832190475> [rules](https://discord.com/channels/1275007722961764372/1280492821580615753)
            <a:whitearrow:1289791194318110761> <:heart:1289791508832190475> [self roles](https://discord.com/channels/1275007722961764372/1280492850504794123)
            <a:whitearrow:1289791194318110761> <:heart:1289791508832190475> [Hexx](https://discord.com/channels/1275007722961764372/1280492854808019014)
            <a:whitearrow:1289791194318110761> <:heart:1289791508832190475> [events](https://discord.com/channels/1275007722961764372/1280492846075478018)
            
            <a:heart:1289793488946331711> <a:flower:1289793837887393833> <a:heart:1289793488946331711> **Enjoy & stay w/us** <a:fire:1289615081725759619>
            `)
            .setImage('https://media.discordapp.net/attachments/1280493004687282269/1289261167130181683/copy_F6827EA2-1EF8-4630-8C38-BEA4F77B14C2-ezgif.com-video-to-gif-converter.gif?ex=66fa27c7&is=66f8d647&hm=c49634dde8da94e053edfe28f6397f32934b4b8dd47c1bddb3e903e8eefac1cb') // Set the new banner image URL
            .setFooter({ 
                text: `We are now at ${member.guild.memberCount} members • ${new Date().toLocaleString()}` 
            });

        // Send the embed to the welcome channel
        await welcomeChannel.send({ embeds: [welcomeEmbed] });
    } else {
        console.log('Welcome channel not found.');
    }
});

// Log the bot into the Discord API using the token
client.login('MTI4ODkzMTI0MTQ4NzIzNzIyNA.GYQv6p.Bbc5I5GYg2bTaS-5ZOKoF5LaF71UUc2UWC1Vx4'); // Replace 'YOUR_BOT_TOKEN_HERE' with your actual bot token

