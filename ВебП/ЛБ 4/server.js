const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    fs.readFile('./users.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});