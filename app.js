var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
