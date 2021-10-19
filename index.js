const http = require("http");
const fs = require("fs");

const requestListener = (req, res) => {
  // res.writeHead(200);
  // res.end("Hello Node JS again!");
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(500); // internal server error
      res.write("Internal Server Error: aaaaaah!");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
};

const server = http.createServer(requestListener);

server.listen(3001, () => {
  console.log("Server is listening on port 3001");
});

// const fs = require("fs");

// fs.readFile("myFile.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// try {
//   const result = fs.readdirSync("/");
//   console.log(result);
// } catch (e) {
//   console.log(e.message);
// }

// fs.readdir("/", (err, files) => {
//   // error-first callback pattern
//   console.log(err);
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(files);
//   }
// });

// const { addRainbows, addUnicorns } = require("./utilities");

// console.log(addRainbows("Hello unicorns!"));
// console.log(addUnicorns("Hello rainbows!"));

// console.log(addRainbows(addUnicorns("Hello Node")));

// const os = require("os"); // commonJS
// // import { totalmem, freemem, platform, cpus } from "os";

// console.log({
//   totalmem: os.totalmem(),
//   freemem: os.freemem(),
//   platform: os.platform(),
//   cpus: os.cpus(),
// });

// Globals in NodeJS
// console.log(process); // info about the host machine
// require() // allows you to import modules to use inside the current one (internal / external / npm)
// __dirname // current directory path (as a string)
// __filename // current directory path + filename being executed
// module.exports // what we want to export from a module
