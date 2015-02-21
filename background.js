chrome.app.runtime.onLaunched.addListener(function() {
  console.log("test");
 chrome.app.window.create('popup.html', {
   id: 'main',
   bounds: { width: 620, height: 500 }
 });
});

// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("test");
});
