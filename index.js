import http from 'http';

const server2 = http.createServer((req, res) => {
    console.log('req url', req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<a href="/x">Link</a>');
});

server2.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});

// setInterval(() => {
//     console.log('ping');
// }, 1000);   
