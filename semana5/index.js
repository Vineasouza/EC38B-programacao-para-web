let express = require("express");
let path = require("path");
let http = require("http");

app = express();

app.use(express.static(path.join(__dirname, "static/")));
http.createServer(app).listen(3000);

console.log("Listening port: 3000");
