import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let namae = conn.getName(m.sender)
let md = `
╔══✪〘 𝟏𝐒𝐓 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐓𝐈𝐎𝐍 〙✪══
║
║Hai ${namae}, untuk mendaftar silahkan gunakan perintah ${usedPrefix}${command} nama.umur
║Contoh: ${usedPrefix}${command} Ryeon.16
║
╚═〘 ⫹⫺ Ryeon Bot 〙`

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, {
text: md,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/a79591024bc8642a7794f.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'SI PALING TUA'
  if (age < 5) throw 'SI PALING BOCIL EP EP'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let caption = `
  ╔══||〘 𝟏𝐒𝐓 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐓𝐈𝐎𝐍 〙
  ║
  ║ *⏤͟͟͞͞★Successful Registration!*
  ║
  ║☍ *Nama:* ${name}
  ║☍ *Umur:* ${age} tahun
  ║☍ *SN:* ${sn}
  ║
  ╚═〘 ⫹⫺ Ryeon Bot 〙`  
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/a79591024bc8642a7794f.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
