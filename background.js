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

$(document).ready(function() {
	console.log("BOO");
  	
  	recognizer();
	
	addRow("youtube", "www.youtube.com");

	$('.add').bind('click', function(e) {
	    addRow("", "");
	});
});

function recognizer() {
  var recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;
  //recognition.continuous = true;
  var done = false;
  recognition.onstart = function() {
    console.log("listen");
  };

  recognition.onerror = function(event) {
    console.log("ERROR: " + event.error);
  };

  recognition.onend = function(event) {
    if (!done) {
      console.log("finished: ");
      console.log(event);
      recognition.start();
    }
  };

  recognition.onspeechend = function(event) {
    console.log("end");
  }

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
    } else if (final_transcript.match(/^YouTube (.*)/g)) {
      arr = final_transcript.split(' ');
      arr.shift(); // remove first element (YouTube)
      var newURL = "https://www.youtube.com/results?search_query=" + arr.join(' ');

      chrome.tabs.create({ url: newURL }, function(tab) {
          new_tab_id = tab.id
          chrome.tabs.executeScript(new_tab_id, { file: "youtube_first_link.js", runAt: "document_end" });
        } 
      );
    } else if (final_transcript.match(/^Google (.*)/g) || final_transcript.match(/^google (.*)/g)) {
      arr = final_transcript.split(' ');
      arr.shift(); // remove first element (Google)
      var newURL = "https://www.google.com/search?gws_rd=ssl&q=" + arr.join(' ');
      chrome.tabs.create({ url: newURL });
    } else if (final_transcript.match(/^open (.*)/g) || final_transcript.match(/^google (.*)/g)) {
      arr = final_transcript.split(' ');
      arr.shift(); // remove first element (YouTube)
      var newURL = "https://www." + arr.join('') + ".com";
      chrome.tabs.create({ url: newURL });
    }

    if (final_transcript != "") {
      done = true;
      recognition.stop();
      // Just restart the recognizer, nothing else seems to work.
      recognizer();
    }
  };

  recognition.start();
}
