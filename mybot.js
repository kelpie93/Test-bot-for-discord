const Discord = require('discord.js');

const client = new Discord.Client();
const config = require('./config.json');

const games = ['elite dangerous', 'farming simulator', 'fallout 76'];

// dice roller
function rollNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
// dice roller

// prefix
const prefix = '!';
// prefix

// thing printed to powershell when bot is activated
client.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('I am ready!');
});
// thing printed to powershell when bot is activated
client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('pong!');
  } else if (command === 'hi') {
    message.channel.send('oh hi');
  } else if (command === 'test') {
    message.channel.send('success');
    // dice roller
  } else if (command === 'roll') {
    const number = args.join().match(/\d+/);
    const dice = parseInt(number, 10) || 100;
    message.channel.send(`you rolled ${rollNumber(dice)}`);
    // dice roller
  } else if (command === 'game') {
    const randomValue = games[Math.floor(Math.random() * games.length)];
    message.channel.send(randomValue);
  }
});
// sends token from folder
client.login(config.token);
// sends token from folder
