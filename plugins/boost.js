let { performance } = require('perf_hooks')

let handler = async (m, { conn }) => {

 let start = `π»Mulai Akselerasi....Mohon Tunggu Sebentar`
 let boost = `${pickRandom(['[ββββββββββ]'])}`
 let boost2 = `${pickRandom(['[ββββββββββ]','[ββββββββββ]'])}`
 let boost3 = `${pickRandom(['[ββββββββββ]','[βββββββββββ]','[βββββββββββ]'])}`
 let boost4 = `${pickRandom(['[βββββββββββββ]','[ββββββββββββββ]','[ββββββββββββ]'])}`
 let boost5 = `${pickRandom(['[βββββββββββββ]','[βββββββββββββ]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[βββββββββββββ]','[ββββββββββ]'])}`
 let boost7 = `${pickRandom(['[βββββββββββββ]','[βββββββββββββ]','[ββββββββββββ]'])}`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   await m.reply(boost5)
   await m.reply(boost6)
   await m.reply(boost7)
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*Bot Berhasil Dipercepat*\n\n*_Kecepatan: ${speed} Detik!*`

     conn.reply(m.chat, finish, m)
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i

handler.rowner = true 


handler.fail = null
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}