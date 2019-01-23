const http = require('http');

/* Because it runs in a Docker container. 0.0.0.0 means all interfaces (including the ip in the container mapping to localhost on the host machine)
   See: https://forums.docker.com/t/using-localhost-for-to-access-running-container/3148 */
const hostname = '0.0.0.0';
const port = 3000;

// TODO: Find the correct types!
const server = http.createServer((req: any, res: any) => {
    var MongoClient = require('mongodb').MongoClient

    // Connection URL
    var url = 'mongodb://db:27017/myproject';
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err: any, db: any) {
        console.log(err);
        console.log("Connected correctly to server");

        db.close();
    });
    
    console.log("In create server!");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
