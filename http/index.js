const http = require('http');


const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.write('<div>Hello world</div>');
        response.end()
    }
});

server.listen('3000');

console.log('Listening on port 3333...');