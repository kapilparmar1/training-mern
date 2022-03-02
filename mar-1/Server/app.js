const http = require("http");
const url = require("url");

const port = 8000;
const hostname = "localhost";

const createdServer = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let body = {};
  let Body = {};
  req.on("data", (chunk) => {
    body = chunk.toString();
    Body = JSON.parse(body);
  });
  req.on("end", () => {
    if (Body.name !== "admin" || Body.pass !== "123456") {
      res.writeHeader(201);
      res.end("Failed");
    } else {
      res.writeHeader(200);
      res.end("Success");
    }
  });
};
const server = http.createServer(createdServer);

server.listen(port, hostname, () => {
  console.log("Server is runnig on : ", port);
});
