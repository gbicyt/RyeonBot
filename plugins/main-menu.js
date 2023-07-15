/*
By : Zyko MD & S h e n d y & Z I R O MD
©Zyko MD 2023
©ZiroMD 2023
 
 * wa: 081228070013
 * yt: @Ziro-MD Official 
 * tt: @zykosiapa
*/

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix: _p, command: _q}) => {
await m.reply(md)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan, premiumTime } = global.db.data.users[who]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(who)
//let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'No Bio'
let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact')
let d = new Date(new Date + 3600000)
let locale = 'id'
 let time = d.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
  const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
  const hariRaya = new Date("January 1, 2023 23:59:59");
  const sekarang = new Date().getTime();
  const Selisih = hariRaya - sekarang;
  const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
  const jjam = Math.floor((Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mmmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60));
  const ddetik = Math.floor((Selisih % (1000 * 60)) / 1000);
  const hariRayaramadan = new Date("April 21, 2023 23:59:59");
  const sekarangg = new Date().getTime();
  const lebih = hariRayaramadan - sekarangg;
  const harii = Math.floor(lebih / (1000 * 60 * 60 * 24));
  const jamm = Math.floor((lebih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menitt = Math.floor((lebih % (1000 * 60 * 60)) / (1000 * 60));
  const detikk = Math.floor((lebih % (1000 * 60)) / 1000);
  const ultah = new Date("Februari 21, 2023 23:59:59");
  const sekarat = new Date().getTime();
  const Kurang = ultah - sekarat;
  const ohari = Math.floor(Kurang / (1000 * 60 * 60 * 24));
  const ojam = Math.floor((Kurang % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const onet = Math.floor((Kurang % (1000 * 60 * 60)) / (1000 * 60));
  const detek = Math.floor((Kurang % (1000 * 60)) / 1000);
  const natal = new Date("December 25, 2022 23:59:59");
  const kapanatal = new Date().getTime();
  const natalnya = natal - kapanatal;
  const nhari = Math.floor(natalnya / (1000 * 60 * 60 * 24));
  const njam = Math.floor(
    (natalnya % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const nmenit = Math.floor((natalnya % (1000 * 60 * 60)) / (1000 * 60));
  const mdetek = Math.floor((natalnya % (1000 * 60)) / 1000);
  
let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
 let _uptime = process.uptime() * 1000;
  let _muptime;
  if (process.send) {
    process.send("uptime");
    _muptime =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  
  let mode = global.opts["self"] ? "Private" : "Public";
  let muptime = clockString(_muptime);
  let uptime = clockString(_uptime);
  global.jam = time;
  let totalreg = Object.keys(global.db.data.users).length;
  let rtotalreg = Object.values(global.db.data.users).filter(
    (user) => user.registered == true
  ).length;
  let user = db.data.users[m.sender];
  let id = m.chat;
let math = max - xp
let tag = await conn.getName(m.sender)
let mot = pickRandom(["⌬", "⏣", "❐", "❑", "❇", "✡", "✯", "✨", "⛾", "⛐", "♨", "☫", "☘", "◳", "☣", "✎"])

let text = `●────━───༺༻───━───●
┏─────────────────⬣
┆         《 BOT INFO 》
┗┬──────────────┈ ⳹
┏┆⚘ 𝙱𝚘𝚝 𝙽𝚊𝚖𝚎 : RyeonX
┆┆⚘ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛
┆┆⚘ 𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝙾𝚠𝚗𝚎𝚛
┆┆http://wa.me/6282351108031
┆┆⚘ 𝚃𝚊𝚗𝚐𝚐𝚊𝚕: ${date}
┆┆⚘ 𝙹𝚊𝚖: ${time} WIB
┆┆⚘ 𝙼𝚘𝚍𝚎: 「 ${mode}  」
┗┬──────────────┈ ⳹
┏┤      《 USER INFO 》
┆┗──────────────┈ ⳹
┆⚘ 𝙽𝚊𝚖𝚊: ${name}
┆⚘ 𝚂𝚝𝚊𝚝𝚞𝚜: ${premiumTime > 0 ? 'Premium' : 'Free user'}
┆⚘ 𝙻𝚒𝚖𝚒𝚝: ${limit}
┆⚘ 𝙰𝚙𝚒: wa.me/${m.sender.split("@")[0]}
┆⚘ 𝙻𝚎𝚟𝚎𝚕: ${level}
┆⚘ 𝚇𝚙: ${exp}
┆⚘ 𝚁𝚊𝚗𝚔: ${role}
┗┬──────────────┈ ⳹
┏┤     《 BOT STATUS 》 
┆┗──────────────┈ ⳹
┆⚘ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎: ${uptime}
┆⚘ 𝚄𝚜𝚎𝚛 𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛 ${totalreg}
┗┬──────────────┈ ⳹
┏┤     《 ALL MENU 》 
┆┗──────────────┈ ⳹
┆⚘ *.allmenu*
┆⚘ *.all*
┗─────────────────⬣`

conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: v,
body: 'bodynya',
thumbnailUrl: "https://telegra.ph/file/a79591024bc8642a7794f.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(all|help)$/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]  
}

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
function ucapp() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat Malam"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}