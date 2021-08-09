var http = require("http");
var fs = require("fs");

/* EXEMPLO 1
var server = http.createServer(function (req, res) {
  console.log("Requisição Nova");
  res.write("Hello");
  res.end();
});
*/

/* EXEMPLO 2
var server = http.createServer(function (req, res) {
  let l = req.headers["accept-language"].split(";");

  if (l[0] && l[0].search("pt-BR") >= 0) res.write("Ola mundo");
  else res.write("Hello World");

  res.end();
});
*/

/* EXEMPLO 3 
var server = http.createServer(function (req, res) {
  fs.readFile("./data/index.html", function (err, data) {
    res.setHeader("Content-type", "text/html");
    res.write(data);
    res.end();
  });
});
*/

/* EXEMPLO 4 */
var server = http.createServer((req, res) => {
  let url = req.url;
  switch (url) {
    case "/usuário":
      res.write("Página de Usuários");
      break;
    case "/posts":
      res.write("Página de Posts");
      break;
    case "/login":
      res.write("Pagina de Lgin");
      break;
    default:
      res.write("xxx");
      break;
  }
  res.end();
});

server.listen(8000);
