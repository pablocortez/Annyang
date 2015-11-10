var express = require('express');
var port = process.rnv.PORT || 3000;
var app - express.createServer();

app.get('/', function(request, response) {
  response.sendfile(__dirname + 'index.html');
}).configure(function() {
  app.use('/img/', express.static(__dirname + '/img/'));
}).listen(port);
