API.chatLog("Nebuď sprostý nebo tě kopnu! v69.6.9 [LOADED]");
API.on(API.CHAT, lol); /* lemon */
 
 
/* lemon */
 
function lol(a) {
    var me = API.getUser().id;
    var msg = a.message;
    var from = a.uid;
    if (me != from) {
        if (msg.toLowerCase().indexOf("koza") > -1) {
            API.sendChat("@"+msgData.un+" Nebuď sprostý nebo tě kopnu!");
        }
    }
}
