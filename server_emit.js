/**
 * Created by codingAgent on 9/1/2015.
 */

var http = require('http');

var server = new http.Server();
// http.Server -> net.Server -> EventEmitter

server.listen(1337, '127.0.0.1');

var emit = server.emit;
server.emit = function (event) {
    console.log(event);
    emit.apply(server, arguments);
};

var counter = 0;
server.on('request', function (req, res) {
    debugger;
    res.end('Привет, мир' + ++counter);
});

