let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :     *Rp 15000*
╠➥ *1 Bulan* :      *Rp 20000*
╠➥ *2 Bulan* :      *Rp 30000*
╠➥ *Permanen* : *Rp 40000*
╠➥ *Owner* :   *Rp 30000*/bln
╠➥ *Nomer Gopay & pulsa* : 
║    081298309340
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 𝙺𝙰𝙶𝚄𝙼𝙸𝙱𝙾𝚃𝚉 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
