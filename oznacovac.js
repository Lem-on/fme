API.chatLog(":ballot_box_with_check: Označovač 3000 - NAČTEN!");

API.off(API.CHAT, lemon);

API.on(API.CHAT, lemon);
 
 /* lemonjesuper */
 
function lemon(love){
	var msgData = love;
	if(msgData.message.indexOf("!paint") > -1){

		if(msgData.un == "Lem‏on" || msgData.un == "Cook‏ie"){
			var narcisekjekrasavec = msgData.message.replace("označ", "");
			nakresli(narcisekjekrasavec.toUpperCase());
		} else {
			API.sendChat("@"+msgData.un+" Hell Yeah! :P");
	 } 
	}
}
