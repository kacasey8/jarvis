var xmlHttp = null;

xmlHttp = new XMLHttpRequest();
xmlHttp.open( 'GET', 'https://www.facebook.com', false );
xmlHttp.send( null );
console.log(xmlHttp.responseText);
