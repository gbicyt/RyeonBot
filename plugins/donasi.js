let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 DONASI 𝐁𝐎𝐓 』––––––❏*

⏣ ᴛᴇʟᴋᴏᴍsᴇʟ: 082351108031

⫹⫺ ᴅᴏɴᴀsɪ • ɴᴏɴ ᴘᴜʟsᴀ ⫹⫺
⏣ ᴅᴀɴᴀ: 082351108031
⏣ ᴏᴠᴏ: 082351108031
⏣ ɢᴏᴘᴀʏ: 085245759983

𝚃𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑 𝙱𝚊𝚐𝚒 𝚈𝚐 𝙱𝚎𝚛𝚍𝚘𝚗𝚊𝚜𝚒 😁

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩

${botdate}
`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/a79591024bc8642a7794f.jpg', null, caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(donasi|dns)$/i;

handler.register = false
export default handler