const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "๐ท๐ฐ๐๐๐ฐ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:๐ท๐ฐ๐๐๐ฐ\nitem1.TEL;waid=17472773940:0\nitem1.X-ABLabel:๐ Creator KagumiBotz\nitem2.EMAIL;type=INTERNET:harvasaestu01@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://instabio.cc/himatsuki\nitem3.X-ABLabel:๐ฎ Rest Api\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Provinsi | Jawa Timur\nitem5.X-ABLabel:โโโโโโ[ ๐ท๐ฐ๐๐๐ฐ ]โโโโโโ\nEND:VCARD"
}, {
    "displayName": "๐บ๐ด๐ป๐๐ธ๐ฝ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:๐บ๐ด๐ป๐๐ธ๐ฝ\nitem1.TEL;waid=6281298309340:0\nitem1.X-ABLabel:๐ Creator KamakoBotz\nitem2.EMAIL;type=INTERNET:kamakohimatsuki011@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://instabio.cc/violet\nitem3.X-ABLabel:โ๏ธ Rest Api\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Provinsi | Jawa Barat\nitem5.X-ABLabel:โโโโ[ แดy แดฉแดสแดษดแดส ]โโโโ\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler
