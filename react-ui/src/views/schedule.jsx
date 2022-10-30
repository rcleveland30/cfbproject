import React from "react";
import {useEffect, useState} from 'react';
import { weeksSplit } from '../utils'
import data from '../mocks/data.json'

function Schedule ({ }) {
    const [showWeek, setShowWeek] = useState('thisWeek')
    const [ lastWeek, setLastWeek] = useState([]);
    const [ thisWeek, setThisWeek] = useState([]);
    const [ nextWeek, setNextWeek] = useState([]);
    
    useEffect(() => {
        // fetch("/schedule")
        //     .then(response => response.json())
        //     .then(games => {
        //         const {
        //             lastWeeksGames,
        //             thisWeeksGames,
        //             nextWeeksGames
        //         } = weeksSplit(games.data)
        //             console.log(lastWeeksGames)
        //             console.log(thisWeeksGames)
        //             console.log(nextWeeksGames)
        //     })
        const {
                lastWeeksGames,
                thisWeeksGames,
                nextWeeksGames
            } = weeksSplit(data)
                setThisWeek(thisWeeksGames)
                setNextWeek(nextWeeksGames)
                setLastWeek(lastWeeksGames)
    }, []);

    function prepWeekForRendering(games) {
        const _games = games.map((game, index) => {
            return (
                <div className="scoreboard">
                    <div className="team-score">
                        <h3 key={index}>{game.home_team}</h3>
                        <p>{game.home_points}</p>
                    </div>
                    <div className="team-score">
                        <h3 key={index}>{game.away_team}</h3>
                        <p>{game.away_points}</p>
                    </div>
                </div>
        )
        });

        return _games
    }

    // const _thisWeeksGames = thisWeek.map((game, index) => {
    //     return (
    //         <div>
    //             <h3 key={index}>{game.away_team}</h3>
    //         </div>
    //     )
    // })

    // const _nextWeeksGames = nextWeek.map((game, index) => {
    //     return (
    //         <li key={index}>{game.away_team}</li>
    //     )
    // })

        function handleClick(e) {
        const id = e.target.id;
        setShowWeek(id)
      }

    return (
        <div className="y-wrap">
            <div>
                <h1>Scoreboard</h1>
                <div className="btn-wrap">
                    <button id="last" onClick={handleClick}>Prev. Week</button>
                    <button id="current" onClick={handleClick}>This Week</button>
                    <button id="next" onClick={handleClick}>Next Week</button>
                </div>
                <div>
                    {showWeek ='last' && prepWeekForRendering(last)}
                    {showWeek ='current' && prepWeekForRendering(current)}
                    {showWeek ='next' && prepWeekForRendering(next)}
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className="y-wrap">
    //         <div className="game-schedule">
    //         <h1>Last Week's Matchups</h1>
    //             {gameDay && gameDay.map((game) => (
    //                 <div className="game-list">
    //                     <h3>Week {game.week}</h3>
    //                     <p>Home: {game.home_team} - {game.home_points}</p>
    //                     <p>Away: {game.away_team} - {game.away_points}</p>
    //                 </div>
    //             ))
    //         }
    //         </div>
    //     </div>
    // );
};

export default Schedule