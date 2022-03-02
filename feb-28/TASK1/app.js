const http = require("http");
const url = require("url");

const port = 8000;
const hostname = "localhost";

const createdServer = (req, res) => {
  // res.setHeader({ "Content-type": "Application/json" });
  // const urlParams = new URL("localhost:9000/sum?ok=12");
  const url1 = url.parse(req.url);
  const pathname = url1.pathname;
  const Param = new URLSearchParams(url1.search);
  res.setHeader("Content-type", "Application/json");
  switch (pathname) {
    case "/sum": {
      let result = parseInt(Param.get("first")) + parseInt(Param.get("second"));
      res.writeHeader(200);
      res.end(`Addition is : ${result}`);
      break;
    }

    case "/multiply": {
      let result = parseInt(Param.get("first")) * parseInt(Param.get("second"));

      res.writeHeader(200);
      res.end(`Multiplication is : ${result}`);
      break;
    }

    case "/sub": {
      let result = parseInt(Param.get("first")) - parseInt(Param.get("second"));

      res.writeHeader(200);
      res.end(`Subtraction is : ${result}`);
      break;
    }

    case "/divide": {
      let result = parseInt(Param.get("first")) / parseInt(Param.get("second"));

      res.writeHeader(200);
      res.end(`Division is : ${result}`);
      break;
    }
    default:
      res.end("Null");
      break;
  }
};

const server = http.createServer(createdServer);
server.listen(port, hostname, () => {
  console.log("Server is running on :", port);
});
