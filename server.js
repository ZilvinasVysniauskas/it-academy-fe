const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;


app.use(express.static(__dirname + '/dist/it-academy-fe/index.html'));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
console.log(path.join(__dirname, '/index.html'));
console.log("++++++++++++++++++++++++++++++++++++++++++++++++")

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: '/it-academy-fe/'}),
);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));
