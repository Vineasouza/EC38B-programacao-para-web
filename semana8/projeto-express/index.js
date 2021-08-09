let http = require("http"),
  express = require("express"),
  path = require("path"),
  app = express();

app.set("view engine", "hbs");
app.set("views"), path.join(__dirname, "view");
app.set(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
