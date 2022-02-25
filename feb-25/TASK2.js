const fs = require("fs");
const http = require("http");

const port = 9000;
const hostname = "localhost";

// JSON RESPONSE
const ResponseServer = (req, res) => {
  res.setHeader("Content-type", "Application/json");
  res.writeHead(200);
  fs.readFile("HTML.json", "utf8", (err, body) => {
    if (err) {
      console.log(err);
    }
    console.log("LOG : ", body);
    res.end(body);
  });
};

const server = http.createServer(ResponseServer);

server.listen(port, hostname, () => {
  console.log(`Server running on ${hostname}:${port}`);
});
