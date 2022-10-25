import React from "react";
import {useEffect, useState} from 'react';

function Schedule ({ }) {

    let [ gameDay, setGameDay] = useState()
    
    useEffect(() => {
        fetch("/schedule").then(response => response.json()).then(data => setGameDay(data.data))
    }, [])

    return (
        <div className="y-wrap">
            <div className="game-schedule">
            <h1>Last Week's Matchups</h1>
                {gameDay && gameDay.map((game) => (
                    <div className="game-list">
                        <h3>Week {game.week}</h3>
                        <p>Home: {game.home_team} - {game.home_points}</p>
                        <p>Away: {game.away_team} - {game.away_points}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Schedule