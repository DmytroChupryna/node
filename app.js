const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Use 1 !")
    next();
});

app.use((req, res, next) => {
    console.log("Use 2 !")
    res.send('<h1>Hello from Express!</h2>');
});

const server = http.createServer(app);

server.listen(3000);