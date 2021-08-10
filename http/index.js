const http = require('http');

const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.write('<div>Hello world</div>');
        response.end()
    }
});

server.listen(port);

console.log(`Listening on port ${port}...`);