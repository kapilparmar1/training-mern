const path = require("path");

// TASK A
// console.log("PATH : ", path.resolve());
// console.log("DIR : ", path.dirname("document/d/users/index.js"));
// console.log("Extension : ", path.extname("document/d/users/index.js"));
// console.log("BASE : ", path.basename("document/d/users/index.js"));

// TASK B
// console.log(path.sep);
// console.log(
//   path.format({
//     dir: "document/d/users/",
//     base: "kapil.js",
//   })
// );

// TASK C
const Dir = path.parse("document/d/users/index.js");
console.log("Directory is : ", Dir.dir);
