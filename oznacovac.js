API.chatLog(":ballot_box_with_check: Označovač 3000 - NAČTEN!");
API.on(API.CHAT, lol); /* lemonjesuper */
 
 
/* lemonjesuper */
 
function lol(a) {
    var me = API.getUser().id;
    var msg = a.message;
    var from = a.uid;
    if (me != from) {
        if (msg.toLowerCase().indexOf("označ") > -1) {
            API.sendChat("@"+msgData.un+"");
        }
    }
}
