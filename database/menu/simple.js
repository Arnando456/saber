//*TQTO NYA JANGAN DI HAPUS NJING,KALAU DI HAPUS KAGAK BAKAL UP SC LAGI!!!
const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `┌──「 *${botName}* 」
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
├「 *SIMPLE MENU* 」
│
├ *${prefix}sticker*
├ *${prefix}ttp*
├ *${prefix}tts*
├ *${prefix}toimg*
├ *${prefix}nulis*
├ *${prefix}stalking*
├ *${prefix}quotes*
├ *${prefix}bikinquote*
├ *${prefix}memeindo*
├ *${prefix}profile*
├「 *TQTO* 」
│
├ MrG{108P}*
├ Sofyan AMV
├ Mr.A43G
├
└──「 *REM BOT* 」`
}
exports.simple = simple