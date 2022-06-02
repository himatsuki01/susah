let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *Online* 
Oke Kak Sekarang Bisa（ ・∀・）
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Kagumi Di Sini')).buffer(), ext, 'KagumiBotz Siap Membantu Kamu (*´ω｀*)', 'Siap Kagumi', 'Iya', 'Hallo Kagumi', 'Hallo Kagumi', m)

}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
