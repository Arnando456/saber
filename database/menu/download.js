//*TQTO NYA JANGAN DI HAPUS NJING,KALAU DI HAPUS KAGAK BAKAL UP SC LAGI!!!
const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `┌┌──「 *${botName}* 」
│        
├「 *USER STATUS* 」
│
├ NAMA : ${pushname}
├LEVEL:${getLevelingLevel(sender)}
├USER ${botName} : ${_registered.length}
├OWNER:${ownerName}
├ TOTAL USER: 
│          
├「 *ABOUT BOT* 」
│
├ *${prefix}info*
├ *${prefix}ping*
├ *${prefix}donasi*
├ *${prefix}owner* 
│
├「 *DOWNLOADER* 」
│
├ *${prefix}play*
├ *${prefix}play2*
├ *${prefix}joox*
├ *${prefix}ytmp4*
├ *${prefix}ytmp3*
├「 *TQTO* 」
│
├ MrG{108P}*
├ Sofyan AMV
├ Mr.A43G
├ Arashi~
└──「 *Rem Bot-X* 」`
}
exports.download = download