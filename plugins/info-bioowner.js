// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htki} *BIODATA* ${htka}
${htjava} *💌 Nama Pena* : Ryeon
${htjava} *♂️ Gender* : Pria
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : PRIVATE
${htjava} *🎨 Umur* : PRIVATE
${htjava} *🧮 Kelas* : PRIVATE
${htjava} *🧩 Hobby* : Main Lucky Network
${htjava} *💬 Sifat* : KEPO CIL
${htjava} *🗺️ Tinggal* : PRIVATE 
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 TY:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendFile(m.chat, pu, 'menu.jpg', biooo, false, m, adReply)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
