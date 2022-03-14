const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/hola_angular'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/hola_angular/index.html'));
});

app.listen(process.env.PORT || 8080);