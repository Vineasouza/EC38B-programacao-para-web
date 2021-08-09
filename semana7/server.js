const http = require("http");

let server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html; charset=UTF-8");

  console.log(req);
  console.log(res.getHeaders());

  res.write("Olá mundo");
  res.end();
});

server.listen(8000);
