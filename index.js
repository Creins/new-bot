const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('Scan this QR code with WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Chatbot is ready!');
});

client.on('message', message => {
    const msg = message.body.toLowerCase();

    if (msg === 'hi' || msg === 'hello') {
        message.reply('Hello! I am your WhatsApp bot 😊');
    } else if (msg === 'help') {
        message.reply('Send: hi, help, info');
    } else if (msg === 'info') {
        message.reply('This is a simple WhatsApp AI bot template.');
    } else {
        message.reply("Sorry, I don't understand that yet.");
    }
});

client.initialize();
