var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });

  var url = req.url;

  if (url === '/') {
    res.write('<center><h1>......... WELCOME TO WEBSITE GABUT .........<h1>maaf ga pake button</center>');
    res.end();
  }
  else if (url === '/home') {
    fs.readFile('home.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/profile') {
    fs.readFile('profil.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/about') {
    fs.readFile('about.html', function (err, data) {
      res.end(data)
    })
  }
  else {
    res.write('<center><h1>......... NEK SEARCH KI SENG NGGENAH!!! .........</h1></center>');
    res.end()
  }
}).listen(5000, function () {

  console.log("server start at http://localhost:5000");
});