var xmlHttp;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( 'GET', 'https://graph.api.smartthings.com/api/smartapps/installations/612c3553-2557-4797-8c12-8bf768aaf944/switch', false );
xmlHttp.setRequestHeader("Authorization", "Bearer 2dfeeaed-8d56-4c5d-ad12-ced461aa3728");
xmlHttp.setRequestHeader("Content-Type", "application/json");
xmlHttp.send();
console.log(xmlHttp.responseText);

var xmlHttp;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( 'POST', 'https://graph.api.smartthings.com/api/smartapps/installations/612c3553-2557-4797-8c12-8bf768aaf944/switch', true );
xmlHttp.setRequestHeader("Authorization", "Bearer 2dfeeaed-8d56-4c5d-ad12-ced461aa3728");
xmlHttp.setRequestHeader("Content-Type", "application/json");
var jsonBody = JSON.stringify({"value":"on"});
xmlHttp.send(jsonBody);
console.log(xmlHttp.responseText);

var xmlHttp;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( 'POST', 'https://graph.api.smartthings.com/api/smartapps/installations/612c3553-2557-4797-8c12-8bf768aaf944/switch', true );
xmlHttp.setRequestHeader("Authorization", "Bearer 2dfeeaed-8d56-4c5d-ad12-ced461aa3728");
xmlHttp.setRequestHeader("Content-Type", "application/json");
var jsonBody = JSON.stringify({"value":"off"});
xmlHttp.send(jsonBody);
console.log(xmlHttp.responseText);

