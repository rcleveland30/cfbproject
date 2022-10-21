require('dotenv').config();
const express = require('express') //gives access to packages for server
const path = require('path');
const server = express()

process.env.HTTPS = true

server.use(express.json())
server.use(express.static(path.resolve(__dirname + "/react-ui")));

server.get('/', (req,res) => {
    res.json ({
        "is": "working"
    })
});

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})