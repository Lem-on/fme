API.chatLog(/me :white_check_mark: L.BOT v6.9 "banana" :banana: );
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
        if (msg.toLowerCase().indexOf("srač") > -1) {
            API.sendChat("@"+a.un+" Nebuď sprostý nebo tě kopnu!");
        }
        if (msg.toLowerCase().indexOf("skip") > -1) {
            API.sendChat("@"+a.un+" Pokud tento song neporušuje pravidla tak ho prostě nepřeskočím! :/");
        }
    }
}
