API.chatLog("Označovač 3000");
API.on(API.CHAT, lol); /* lemon */
 
 
/* lemon */
 
function lol(a) {
    var me = API.getUser().id;
    var msg = a.message;
    var from = a.uid;
    if (me != from) {
        if (msg.toLowerCase().indexOf("označ") > -1) {
            API.sendChat("@•TiGeR• cz ♪♫");
        }
    }
}
