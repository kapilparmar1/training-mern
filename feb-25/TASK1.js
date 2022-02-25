const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 8000;
const hostname = "localhost";
// HTML RESPONSE
const ResponseServer = (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.writeHead(201);

  fs.readFile("./task1.html", "utf8", (err, data) => {
    console.log("DATA is : ", data);
    res.write(data);
    res.end();
  });
};
// fs.readFile("./task1.html", "utf8", (err, data) => {
//   console.log("DATA is : ", data);
// });
// JSON RESPONSE
// const ResponseServer = (req, res) => {
//   res.setHeader("Content-type", "Application/json");
//   res.writeHead(200);
//   const body = [
//     {
//       Ename: "Suraj",
//       Esalary: 20000,
//       Eage: 23,
//       Eid: 10052476,
//     },
//     {
//       Ename: "Arun",
//       Esalary: 25000,
//       Eage: 27,
//       Eid: 10856476,
//     },
//   ];

//   res.end(JSON.stringify(body));
// };

//   TEXT RESPONSE
// const ResponseServer = (req, res) => {
//   // res.setHeader("Content-type", "text/html");
//   res.writeHead(201);
//   res.end("This is Employee's Details page");
// };
const server = http.createServer(ResponseServer);

server.listen(port, hostname, () => {
  console.log(`Server running on ${hostname}:${port}`);
});
