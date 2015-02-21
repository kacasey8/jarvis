var video = document.getElementById("live_video");
navigator.webkitGetUserMedia({video:true, audio:true},
    function(stream) {
      video.src = window.webkitURL.createObjectURL(stream);
    },
    function (){console.warn("Error getting audio stream from getUserMedia")}
);