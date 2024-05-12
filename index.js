import http from 'http';

const server = http.createServer((req, res) => {
    console.log('req url', req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
});
