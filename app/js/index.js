var express = require('express');
var app = express();
const http = require('http');
const path = require('path');
const dirPage = path.join(__dirname, '../../app');
const mysql = require('mysql2');

const urlencodedParser=express.urlencoded({extended: false});

app.use("/public", express.static(path.join(dirPage, '/public')));
console.log(dirPage);

app.get('/', function(req,res){
    res.sendFile(dirPage + '/public/pages/main.html' );
});

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);


