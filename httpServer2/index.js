const http = require('http');
const server = http.createServer((req, res) => {
    console.log(`Server created at: ${Date.now()}`);
    // console.log(req.headers);
    // console.log(req.method);
    console.log(req.url);

    switch (req.url) {
        case '/':
            res.writeHead(200);
            return res.end(`Homepage`);
        case '/about':
            res.writeHead(200);
            return res.end(`About Page`);
        case '/contact-us':
            res.writeHead(200);
            return res.end(`Contact Us`);
        default:
            res.writeHead(404);
            return res.end(`You are lost!`);
    }

    // res.writeHead(200);
    // res.end(`Hey you can accept: ${req.headers['accept-encoding']}`);
});

const PORT = 8000;

server.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));