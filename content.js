$(document).ready(function() {
	console.log("HI");

	var recognition = new webkitSpeechRecognition();
	recognition.onresult = function(event) { 
	  console.log(event) 
	}
	recognition.start();
})

