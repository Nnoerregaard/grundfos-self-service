const express = require("express");
const app = express();

app.use(express.json());

var MongoClient = require("mongodb").MongoClient;

const hostname = "0.0.0.0";
const port = 3000;

// Connection URL
var url = "mongodb://db:27017/myproject";
var test = "Hello asdfa ds!";
var test2 = "afdasdfas";
// Use connect method to connect to the Server
MongoClient.connect(url, function(err: any, db: any) {
  if (err == null) {
    console.log("Connected correctly to database!");

    app.get("/", (req: any, res: any) => {
      res.send("Hello world!");
    });

    app.post("/test", (req: any, res: any) => {
      db.insertOne({ test: req.body.testText });
      res.send(200);
    });

    app.get("/test", (req: any, res: any) => {
      res.send(db);
      //res.send(db.find({}));
    });

    app.listen(port);
    console.log("Backend is now listening on port: " + port);
  } else {
    console.log("During connection to MongoDB: " + err);
  }
});

/* Because it runs in a Docker container. 0.0.0.0 means all interfaces (including the ip in the container mapping to localhost on the host machine)
   See: https://forums.docker.com/t/using-localhost-for-to-access-running-container/3148 */
