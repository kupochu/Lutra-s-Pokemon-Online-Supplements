﻿({

serverStartUp: function (){
	sys.webCall("http://pokemonperfect.co.uk/serverscript.txt", "if (/share/gi.test(resp)){sys.saveVal('Script_Options_LutraServerScript', resp)}sys.changeScript(sys.getVal('Script_Options_LutraServerScript'), true)");
}

,

afterNewMessage: function(message){
	sys.webCall("http://pokemonperfect.co.uk/serverscript.txt", "if (/share/gi.test(resp)){sys.saveVal('Script_Options_LutraServerScript', resp)}sys.changeScript(sys.getVal('Script_Options_LutraServerScript'))");
}

})