let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/BCgUSCxQltq8SwcpJe1tDf

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'KagumiBotz#3')).buffer(), ext, '🎮 Created By Kagumi', 'Siap Kagumi', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot3']
handler.tags = ['main']
handler.command = /^(gcbot3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
