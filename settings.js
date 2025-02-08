/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '628557573123'
global.versi = version
global.namaOwner = "Andi Spnb"
global.packname = 'Bot WhatsApp'
global.botname = 'SPNB-AI'
global.botname2 = 'SPNB-AI'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/628557573123"
global.linkGrup = "https://chat.whatsapp.com/IYZ8wTwKKSWCqYdY4dbR9O"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029Vb471scFnSzESKWyd71F"
global.idSaluran = "120363396525574851@newsletter"
global.namaSaluran = "SPNB STORE"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "OK2266093"
global.apiOrderKuota = "607045317383752642266093OKCTCE650F89A756C27B3CB6D6CB88F5A92A"
global.qrisOrderKuota = "00020101021126570011ID.DANA.WWW011893600915327009964702092700996470303UMI51440014ID.CO.QRIS.WWW0215ID10221738718340303UMI5204481453033605802ID5910SPNB STORE6009Kab. Bone61059271363045DD5"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "api-spnb"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "082212268179"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://img86.pixhost.to/images/496/563164404_skyzopedia.jpg", 
reply: "https://img86.pixhost.to/images/496/563164404_skyzopedia.jpg", 
logo: "https://img86.pixhost.to/images/496/563164404_skyzopedia.jpg", 
qris: "https://img86.pixhost.to/images/496/563165098_skyzopedia.jpg"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://private.skyzopedia.us.kg"
global.apikeyV2 = "ptla_lfucQxgxJ2q9YARtJmIBMqE0nbAP0DqgULZV4XyTepP" //ptla
global.capikeyV2 = "ptlc_6HPcjlup1PXA1U7AxMq5dA5s2D612xs7j93Pqd743rK" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk Spnb",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}
//==== Order kuota H2H okeconnect.com ====//
global.memberID = 'OK2266093' // Sesuaikan dengan ID merchant OkeConnect Anda
global.pin = "2809" 
global.pw = "2892006Ukki"
global.codeqr = "00020101021126570011ID.DANA.WWW011893600915327009964702092700996470303UMI51440014ID.CO.QRIS.WWW0215ID10221738718340303UMI5204481453033605802ID5910SPNB STORE6009Kab. Bone61059271363045DD5"
global.keyorkut = "607045317383752642266093OKCTCE650F89A756C27B3CB6D6CB88F5A92A"

//========= Settings Digital Product =========//
global.markupHarga = 1.1 // Markup 10%
global.delayTrx = 8000 // Delay cek status transaksi
global.expiredPayment = 300000 // Expired payment 5 menit
global.autobackup = true // Auto backup database
global.backupInterval = 3600000 // Backup setiap 1 jam

//========= API Configuration =========//
global.okeconnectAPI = "https://www.okeconnect.com"
global.paymentAPI = "https://api.spnb.my.id/orkut"

//========= Message Template =========//
global.msgTrx = {
  wait: "*⏳ Memproses transaksi...*",
  success: "*✅ Transaksi berhasil*",
  pending: "*⏳ Menunggu pembayaran...*",
  failed: "*❌ Transaksi gagal*",
  expired: "*⌛ Pembayaran expired*",
  refund: "*💰 Refund berhasil diproses*"
}

//========= Digital Products Type =========//
global.productType = {
  ff: "FF", // Free Fire
  ml: "ML", // Mobile Legends
  pubg: "PUBG", // PUBG Mobile
  valo: "VALO", // Valorant
  gi: "GI", // Genshin Impact
  token: "PLN", // Token Listrik
  pulsa: "PULSA", // Pulsa All Operator
  ewallet: "EWALLET" // Saldo E-Wallet
}

//========= Product Category Settings =========//
global.productCategory = {
  games: {
    name: "Games",
    products: ["FF", "ML", "PUBG", "VALO", "GI"]
  },
  ppob: {
    name: "PPOB", 
    products: ["PLN", "PULSA"]
  },
  ewallet: {
    name: "E-Wallet",
    products: ["DANA", "OVO", "GOPAY", "QRIS"] 
  }
}

//========= Min Max Transaction =========//
global.trxLimit = {
  min: 10000, // Minimal 10rb
  max: 1000000, // Maksimal 1jt
  cooldown: 60000 // Cooldown 1 menit
}

//========= Error Messages =========//
global.errMsg = {
  noProduct: "Produk tidak tersedia",
  invalidID: "ID tidak valid",
  notEnough: "Saldo tidak mencukupi",
  failed: "Gagal memproses transaksi",
  system: "Terjadi kesalahan sistem"
}

//========= Success Messages =========// 
global.successMsg = {
  order: "Pesanan berhasil diproses",
  payment: "Pembayaran diterima",
  topup: "Topup berhasil"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})