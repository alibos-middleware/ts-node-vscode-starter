"use strict";
var http_1 = require('http');
var server = http_1.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});
var hostname = "127.0.0.1";
var port = 3000;
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
//# sourceMappingURL=app.js.map