let fs = require('fs')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
locationMessage: {
name: '𝙸𝙽𝙸 𝙺𝙰𝙺 𝙾𝚆𝙽𝙴𝚁 𝙺𝙰𝙶𝚄𝙼𝙸 OωO',
jpegThumbnail: fs.readFileSync('./src/mikey.jpg')
  }
 }
}
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel: Kukira idaman ternyata geleman (◞‸◟ㆀ)\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '.donasi', buttonText: {displayText: '💌 Donasi'}, type: 1},
  {buttonId: '.menu', buttonText: {displayText: '🧾 Menu'}, type: 1},
]
const buttonsMessage = {
    contentText: `
Itu Owner Ku Kak >ω<
*Jangan Di Apa Apain Kak Owner Ku.*
`.trim(),    footerText: ``,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { quoted: test})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
