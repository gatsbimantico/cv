var fs = require('fs'),
    http = require('http'),
    mime = require('mime');

http.createServer(function (req, res) {
  let path = __dirname;
  if (req.url === '/') {
    path += '/index.html';
  } else {
    path += req.url.replace('/cv', '');
  }
  fs.readFile(path, (err,data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify({err,ctx:req.url}));
      return;
    }
    res.setHeader("Content-Type", mime.getType(req.url));
    res.writeHead(200);
    res.end(data);
  });
}).listen(3000);