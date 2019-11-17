const http = require('http')
const express = require('express')

process.env.NODE_ENV = 'development';

const app = express()
const hostname = "127.0.0.1"
const port = 8081

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/plain');
    res.end("Hello nodejs");
})

// app.get('/', (req, res) => {
//     res.send("http hi!")
// })

// const server2 = app.listen(3000, () => {
//     console.log("server2 ready")
// })

server.listen(port, hostname, () => {
    console.log(`server started ${hostname}:${port}`)
})

process.on('SIGTERM', () => {
    server.close()
    // server2.close()
})
