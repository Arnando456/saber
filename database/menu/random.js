//*TQTO NYA JANGAN DI HAPUS NJING,KALAU DI HAPUS KAGAK BAKAL UP SC LAGI!!!
const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *RANDOM MENU* 」
│
├ *${prefix}nekonime*
├ *${prefix}wibu*
├ *${prefix}loli*
├ *${prefix}neko*
├ *${prefix}husbu*
├ *${prefix}kpop*
├ *${prefix}anjing*
├ *${prefix}pokemon*
├ *${prefix}bokep*
├ *${prefix}darkjones*
├「 *TQTO* 」
│
├ MrG{108P}*
├ Sofyan AMV
├ Mr.A43G
├
└──「 *REM BOT* 」`
}
exports.random = random