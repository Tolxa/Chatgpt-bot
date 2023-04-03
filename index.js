const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

require('dotenv').config();
let key = process.env.API_KEY;
let token = process.env.DISCORD_TOKEN;
let channel = process.env.CHANNEL_ID;
const { Configuration, OpenAIApi } = require("openai");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

const config = new Configuration({
    apiKey: key,
  });

const openai = new OpenAIApi(config);

client.once('ready', async() => {
    console.log('\n');
    console.log('\n');
    console.log("%c03/17/2023 15:55", "font-size: 50px; color: blue; text-shadow: 3px 3px 0px #ccc;");
console.log("%cW E L C O M E", "font-size: 50px; color: blue; text-shadow: 3px 3px 0px #ccc;");
  console.log("the script is set on March 17th");
console.log('\n');
    console.log('\n');
    console.log('\x1b[41m\x1b[37m%s\x1b[0m', '𝗕𝗢𝗧 𝗦𝗨𝗗𝗔𝗛 𝗔𝗞𝗧𝗜𝗙');
    console.log('\n\n\n\n\n\n\n');
  console.log('\x1b[42m\x1b[30m%s\x1b[0m', 'JIKA EROR CHAT ATMIN' );
    console.log('\n');
    console.log('\n');
    console.log("🄳🄾🄽🅃 🄵🄾🅁🄶🄴🅃 🅃🄾 🅂🅄🄱🅂🄲🅁🄸🄱🄴");
    console.log('\n');
    console.log("INSTAGRAM: @Norriii_7");
    console.log("BOT WHATSAPP: 6288296785106");
    console.log('\n');
    console.log('\n');
    console.log('\x1b[37m\x1b[30m\x1b[47m%s\x1b[0m', 'JANGAN OTAK ATIK INDEX.JS NANTI EROR !!');
    

});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from other bots
    if (message.channel.id !== channel) return; // Only respond in a particular channel
    const ask = message.content; // Get the message content
  
    const reply = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: ask,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        }); //getting reply from chat gpt
        message.reply(reply.data.choices[0].text); //posting the gathered reply in the channel
    });

client.login(token); //discord bot login
