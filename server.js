// require('dotenv').config();
const { response } = require('express');
const express = require('express'); //gives access to packages for server
const path = require('path');
const server = express();

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

server.use(express.json())
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'))
});

async function fetchData(url) {
    var bearer = 'Bearer ' + '2MiMGs6jrLE51/fAzQzVpImICjEUX3+rmfIEiCFhvI69aSS2puXlOPbtDBofqE2s';
    const data = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
    }
  }).then(response => response.json()).then(data => data)
    return data;
}

server.get('/schedule', async(req,res) => {
    const data = await fetchData("https://api.collegefootballdata.com/games/?year=2022")
    res.json({data})
})

server.get('/teams', async(req,res) => {
    const data = await fetchData("https://api.collegefootballdata.com/teams")
    res.json({data})
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})