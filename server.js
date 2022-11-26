require('dotenv').config();
const { response } = require('express');
const express = require('express'); //gives access to packages for server
const jwt = require('jsonwebtoken');
const path = require('path');
const server = express();
const cors = require('cors');
const authenticate = require('./middlewares/authMiddleware')
const { appendFile } = require('fs');

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

server.use(cors())
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

//////////////////////////////////
// LOGIN JWT
global.users = [
    {username: 'johndoe', password: 'password'},
    {username: 'marydoe', password: 'password'}
];

const accounts = [
    {accountType: 'checking', balance: 5000, username: 'johndoe'},
    {accountType: 'savings', balance: 15000, username: 'johndoe'},
    {accountType: 'checking', balance: 3000, username: 'marydoe'}
]

server.use(express.json())

server.post('/deposit', authenticate, (req, res) => {

});

server.get('/profile/:username', authenticate, (req, res) => {
    
})

server.get('/accounts/:username', authenticate, (req, res) => {

    const username = req.params.username
    const userAccounts = accounts.filter((account) => account.username == username)
    res.json(userAccounts)

});

server.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find((user) => user.username == username && user.password == password)
    if (user) {
        // generate the jwt
        const token = jwt.sign({username: user.username}, 'SECRETKEY')
        res.json({success: true, token: token})
    } else {
        // response with not authenticated
        res.json ({success: false, message: 'Not authenticated'})
    }
});
///////////////////////////////


// Fetch games from API
server.get('/schedule', async(req,res) => {
    const currentWeek = req.query.currentWeek*1;
    const _currentWeek = await fetchData(`https://api.collegefootballdata.com/games/?year=2022&week=${currentWeek}`)
    const _lastWeek = await fetchData(`https://api.collegefootballdata.com/games/?year=2022&week=${currentWeek-1}`)
    const _nextWeek = await fetchData(`https://api.collegefootballdata.com/games/?year=2022&week=${currentWeek+1}`)
    res.json({
        currentWeek : _currentWeek,
        lastWeek : _lastWeek,
        nextWeek : _nextWeek
    });
})

server.get('/teams', async(req,res) => {
    const data = await fetchData("https://api.collegefootballdata.com/teams")
    res.json({data})
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})