const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer(function (req, res) {
    const method = req.method;
    const path = req.url;

    const log = `[${Date.now()}]: ${method}: ${path}\n`;
    fs.appendFileSync('log.txt', log, 'utf-8');

    switch (method) {
        case 'GET': {
            switch (path) {
                case '/':
                    return res.writeHead(200).end(`Hello from the server`);
                case '/contact-us':
                    return res.writeHead(200).end(`Email: xyz@gmail.com \nNumber: 9843324674`);
                case '/tweet':
                    return res.writeHead(200).end(`Tweet-1 \nTweet-2`);
            };
        }
            break;
        case 'POST': {
            switch (path) {
                case '/tweet':
                    return res.writeHead(201).end(`Your tweet is created!`);
            }
        }
    }
    res.writeHead(404).end('You are lost!');
});

server.listen(8000, () => console.log(`Server started at port 8000`));