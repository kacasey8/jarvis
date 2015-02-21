// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

function addRow(command, url) {
	$("#settingsTable").find('tbody')
	    .append($('<tr>')
	        .append($('<td>')
	            .append('<input type="text" name="command" value={0} >'.format(command)))
	        .append($('<td>')
	            .append('<input type="text" name="url" value={0} >'.format(url)))
	        .append($('<td>')
	            .append('<button type="button" class="delete">Delete</button>'))
	    )
	$('.delete').bind('click', function(e) {
		console.log("DELETE");
	    var row = e.target.parentNode.parentNode;
	    console.log(row);
	    $( row ).remove(); 
	});
}

var currentTab;
$(document).ready(function() {
	chrome.tabs.query({active:true,currentWindow:true},function(tab){
	  currentTab = tab[0].url;
	});
  	
  	recognizer();
	
	addRow("youtube", "www.youtube.com");

	$('.add').bind('click', function(e) {
	    addRow("", currentTab);
	});
});

function recognizer() {
  var recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;
  //recognition.continuous = true;
  recognition.onstart = function() {
    console.log("listen");
  };

  recognition.onerror = function(event) {
    console.log("ERROR: " + event.error);
  };

  recognition.onend = function(event) {
    console.log("finished: ");
    console.log(event);
    recognition.start();
  };

  recognition.onresult = function(event) {
    var interim_transcript = '';
    var final_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    console.log("FINAL: " + final_transcript);
    console.log("TMP: " + interim_transcript);

    if(final_transcript == "YouTube") {
      var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
      chrome.tabs.create({ url: newURL });
    }
    // final_span.innerHTML = linebreak(final_transcript);
    // interim_span.innerHTML = linebreak(interim_transcript);
    // if (final_transcript || interim_transcript) {
    //   showButtons('inline-block');
    // }
  };

  recognition.start();
}
