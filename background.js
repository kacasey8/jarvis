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
