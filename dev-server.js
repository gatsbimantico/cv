var fs = require("node:fs"),
  http = require("node:http"),
  zlib = require("node:zlib"),
  { pipeline } = require("node:stream"),
  childProcess = require("child_process"),
  mime = require("mime");

const ENCODING_CHARACTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const hashData = (data) => {
  const base = ENCODING_CHARACTERS.length;
  let hash = 5381;

  for (let i = 0; i < data.length; i++) {
    hash = (hash * 33) ^ data.charCodeAt(i);
  }

  let result = "";
  do {
    hash >>>= 0;
    result = ENCODING_CHARACTERS[hash % base] + result;
    hash = Math.floor(hash / base);
  } while (hash > 0);

  return result;
};

function staticServer(req, res) {
  let path = __dirname;
  if (req.url === "/") {
    path += "/index.html";
  } else {
    path += req.url.replace("/cv", "");
  }
  const stream = fs.createReadStream(path);

  stream.on("open", function () {
    res.writeHead(200, {
      "Content-Type": mime.getType(req.url),
      "Cache-Control": "max-age=31536000",
      "Content-Encoding": "gzip",
    });
  });

  pipeline(
    stream,
    zlib.createGzip(),
    res,
    (err) => {
      if (err) {
        // res.writeHead(404);
        res.end(JSON.stringify({ err, ctx: req.url }));
      }
    }
  );
}

function hotReloadCheck(req, res) {
  const output = childProcess.execSync('git diff', { encoding: 'utf8' });
  const hash = hashData(output);
  res.end(hash);
}

http
  .createServer(function (req, res) {
    if (req.url.endsWith("/hot")) {
      hotReloadCheck(req, res);
    } else {
      staticServer(req, res);
    }
  })
  .listen(3000, (error) => {
    if (error) return console.log(error);
    console.log("Now serving at http://localhost:3000");
  });
