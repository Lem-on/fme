API.chatLog("Nebuď sprostý nebo tě kopnu! v69.6.9 [LOADED]");
API.on(API.CHAT, lol); /* lemon */
 
 
/* lemon */
 
function lol(a) {
    var me = API.getUser().id;
    var msg = a.message;
    var from = a.uid;
    if (me != from) {
        if (msg.toLowerCase().indexOf("čurák") > -1) {
            API.sendChat("@"+a.un+" Nebuď sprostý nebo tě kopnu!");
        }
        if (msg.toLowerCase().indexOf("debil") > -1) {
            API.sendChat("@"+a.un+" Nebuď sprostý nebo tě kopnu!");
        }
            if (msg.toLowerCase().indexOf("čurák") > -1) {
            API.sendChat("@"+a.un+" Nebuď sprostý nebo tě kopnu!");
        }
    }
}
