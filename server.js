/**
 * Created by kieranpark on 23/11/15.
 */

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("something to write");
    response.end('Hello World\n');
}).listen(port);
