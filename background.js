// React when a browser action's icon is clicked.

$(document).ready(function() {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = function() {
    console.log("listen");
  };

  recognition.onerror = function(event) {
    console.log("ERROR: " + event.error);
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
    // final_span.innerHTML = linebreak(final_transcript);
    // interim_span.innerHTML = linebreak(interim_transcript);
    // if (final_transcript || interim_transcript) {
    //   showButtons('inline-block');
    // }
  };

  recognition.start();
});