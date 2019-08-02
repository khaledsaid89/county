const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("606506413153320961")
setInterval(function() {
channel.send(`i need credtits`);
}, 30)
})

client.login(process.env.BOT_TOKEN);