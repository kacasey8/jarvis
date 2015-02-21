// React when a browser action's icon is clicked.

$(document).ready(function() {
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
      console.log('created');
      recognition.stop();
    }
    // final_span.innerHTML = linebreak(final_transcript);
    // interim_span.innerHTML = linebreak(interim_transcript);
    // if (final_transcript || interim_transcript) {
    //   showButtons('inline-block');
    // }
  };

  recognition.start();
});