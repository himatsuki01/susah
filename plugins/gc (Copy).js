let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*ðŸŒŸ Tutorial Buat Bot WA:*

🌟 Ketik di *[TERMUX]*

🔭 *Install Package*
1) $ pkg upgrade
2) $ pkg update
3) $ pkg install nodejs
4) $ pkg install bash
5) $ pkg install git
6) $ pkg install wget
7) $ pkg install mc
8) $ pkg install ffmpeg
9) $ pkg install nano
10) $ pkg install imagemagick

🎨 *Untuk Sc nya cari sendiri, atau beli sc ku*
11) $ termux-setup-storage
12) $ cd storage/downloads/(nama file yg kmu rename)

🍃 *Penginstal :*
$ npm start
atau
$ npm i pm2 && pm2 start (sesuaikan sama sc kalian)

[ 📌 Note : Tanda $ Ga Perlu Di Ketik ]

💻 Info : Link Termux Di Klik Disini  Hapus Termux Lama Anda Ganti Sama Yang Saya Kasih`.trim()
  const button = {
        buttonText: 'Tutor By KagumiBotz',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada🐾", rows: [
        {title: '💌 › Group KagumiBotz', description: "Group Utama KagumiBotz", rowId:".gcbot1"},
        {title: '✉️ › Gruop KagumiBotz#2', description: "Group Kedua", rowId:".gcbot2"},
        {title: '✉️ › Group KagumiBotz#3', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '🎐 › Owner', description: "Creator Kagumi >ω<", rowId:".nowner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['carabuatbot','cbb']
handler.command = /^(cbb|carabuatbot)$/i
handler.help = ['carabuatbot','cbb']
module.exports = handler
