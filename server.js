// require('dotenv').config();
const express = require('express'); //gives access to packages for server
const path = require('path');
const server = express();

import { fetch, Request, Response } from 'node-fetch'

// process.env.HTTPS = true

// server.use(express.json())
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'))
});

server.get('/search', (req,res) => {
    var url = "https://api.collegefootballdata.com/games/?year=2022&week=8";
    var bearer = 'Bearer ' + '2MiMGs6jrLE51/fAzQzVpImICjEUX3+rmfIEiCFhvI69aSS2puXlOPbtDBofqE2s';
    fetch(url, {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
    }
}).then(response => response.text())
    .then (data => console.log('hi,mom', data))
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})