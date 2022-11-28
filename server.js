require('dotenv').config();
const { response } = require('express');
const express = require('express'); //gives access to packages for server
const jwt = require('jsonwebtoken');
const path = require('path');
const server = express();
const cors = require('cors');
const { User } = require('./models')
const authenticate = require('./middlewares')
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

// LOGIN JWT
server.post('/login', authenticate, async (req, res) => {
    const { password, username } = req.body;
    const user = await User.findOne({
      where: {
        password,
        username
      }
    });
    if (user) {
      const token = jwt.sign({username: user.username}, 'SECRETKEY')
      res.json({isSuccess: true, token: token});
    } else {
      res.json({isSuccess: false, message: 'Not authenticated'});
    }
  });

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
