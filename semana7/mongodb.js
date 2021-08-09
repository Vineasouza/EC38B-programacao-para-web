let client = require("mongodb").MongoClient;

client.connect(
  "mongodb://localhost:27017/mongo-test",
  { useNewUrlParser: true },
  function (err, client) {
    if (err) throw err;
    let db = client.db("mongo-test");

    db.collection("users").insertOne({ nome: "Willian" }, function (err, msg) {
      if (err) throw err;
      console.log(msg);
    });

    db.collection("users")
      .find({ nome: new RegExp("^W", "i") })
      .limit(1)
      .toArray(function (err, result) {
        if (err) throw err;
        console.log("Retornando pelo nome");
        console.log(result);
        client.close();
      });
  }
);
