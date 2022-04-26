// const express = require('express');
// const http = require('http');
// const path = require('path');
//
// const app = express();
//
// const port = process.env.PORT || 3001;
//
//
// app.use(express.static('/dist/it-academy-fe/index.html'));
//
//
// app.get('/*', (req, res) =>
//   res.sendFile('index.html', {root: '/it-academy-fe/'}),
// );
//
// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
//
// const server = http.createServer(app);
//
// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//         ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }
// // Instruct the app
// // to use the forceSSL
// // middleware
// app.use(forceSSL());
//
// server.listen(port, () => console.log(`App running on: http://localhost:${port}`));


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('it-academy-fe'));

app.get('/*', function(req,res) {
  res.sendFile('index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
