API.chatLog("Nebuď sprostý nebo tě kopnu! v69.6.9 [LOADED]");
API.on(API.CHAT, lol); /* lemon */
 
 
/* lemon */
 
function lol(a) {
    var me = API.getUser().id;
    var msg = a.message;
    var from = a.uid;
    if (me != from) {
        if (msg.toLowerCase().indexOf("píča") > -1 || msg.toLowerCase().indexOf("píče") > -1 || msg.toLowerCase().indexOf("píčo") >  -1 || msg.toLowerCase().indexOf("píču") > -1 || msg.toLowerCase().indexOf("kokot") > -1 || msg.toLowerCase().indexOf("kurva") > -1 || msg.toLowerCase().indexOf("čubka") > -1 || msg.toLowerCase().indexOf("čurák") > -1 || msg.toLowerCase().indexOf("děvka") > -1 || msg.toLowerCase().indexOf("koňomrd") > -1 || msg.toLowerCase().indexOf("kretén") > -1 || msg.toLowerCase().indexOf("zasraný") > -1 || msg.toLowerCase().indexOf("mrdat") > -1 || msg.toLowerCase().indexOf("šukat") > -1 || msg.toLowerCase().indexOf("zmrd") > -1 ) {
            API.sendChat("Nebuď sprostý nebo tě kopnu!");
        }
    }
}
