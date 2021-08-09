let http = require("http"),
  express = require("express"),
  path = require("path"),
  exphbs = require("express-handlebars"),
  app = express();

var hbs = exphbs.create({
  /* config */
});

app.set("views", path.join(__dirname, "/views"));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/a", (req, res) => {
  res.render("abobrinha");
});

/*
app.get("/b", (req, res) => {
  res.send("<h1>Pagina B</h1>");
});
*/

app.get("/p", (req, res) => {
  let nomes = ["abacate", "abacaxi", "mamao"];
  res.render("pepino", { nomes: nomes });
});

http.createServer(app).listen(3000);
