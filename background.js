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

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});

$(document).ready(function() {
	console.log("BOO");
  recognizer();
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
	}
	
	addRow("youtube", "www.youtube.com");

	$('.delete').bind('click', function(e) {
	    var row = e.target.parentNode.parentNode;
	    $( row ).remove(); 
	});

	$('.add').bind('click', function(e) {
		console.log("ADD");
	    addRow("", "");
	});
});

var recognizer = function() {
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

    if(final_transcript == "youtube") {

    }
    // final_span.innerHTML = linebreak(final_transcript);
    // interim_span.innerHTML = linebreak(interim_transcript);
    // if (final_transcript || interim_transcript) {
    //   showButtons('inline-block');
    // }
  };

  recognition.start();
}
