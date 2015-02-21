// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("test");
});
