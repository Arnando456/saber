//*TQTO NYA JANGAN DI HAPUS NJING,KALAU DI HAPUS KAGAK BAKAL UP SC LAGI!!!
const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *OWNER MENU* 」
│
├ *${prefix}bc*
├ *${prefix}bcgc*
├ *${prefix}clearall*
├ *${prefix}block*
├ *${prefix}unblock*
├ *${prefix}clone*
├ *${prefix}setppbot*
├ *${prefix}setreplay*
├ *${prefix}setprefix*
├ *${prefix}addprem*
├ *${prefix}dellprem*
├ *${prefix}ban*
├ *${prefix}unban*
├ *${prefix}event1/0*
├「 *TQTO* 」
│
├ MrG{108P}*
├ Sofyan AMV
├ Mr.A43G
├
└──「 *REM BOT* 」`
}
exports.owb = owb