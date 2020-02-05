
const auth = require('./auth.json');
const Discord = require('discord.js');
var number = 1;
var imageNumber = 1;
const client = new Discord.Client();
client.login('your-super-secret-token');

client.on('ready', () => console.log('I am ready!'));

client.on('message', msg => {
    if (msg.content === 'ping') {
        //return msg.reply('pong!');
        number = 14;
       var imageNumber = Math.floor (Math.random() * number) + 1;
        return msg.reply({files: ["./paczka/" + imageNumber + ".png"]})
    }
});
client.login(auth.token);






