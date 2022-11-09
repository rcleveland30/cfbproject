import React from "react";
import {useEffect, useState} from 'react';
import { weeksSplit } from '../utils'
import week9 from '../mocks/week9.json'
import week10 from '../mocks/week10.json'
import week11 from '../mocks/week11.json'
import week12 from '../mocks/week12.json'
import week13 from '../mocks/week13.json'

function Schedule ({ }) {
    const [showWeek, setShowWeek] = useState('current');
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
        //             setThisWeek(lastWeeksGames)
        //             setNextWeek(thisWeeksGames)
        //             setLastWeek(nextWeeksGames)
        //     })
        const {
                lastWeeksGames,
                thisWeeksGames,
                nextWeeksGames
            } = weeksSplit([...week9, ...week10, ...week11, ...week12, ...week13])
                setThisWeek(thisWeeksGames)
                setNextWeek(nextWeeksGames)
                setLastWeek(lastWeeksGames)
    }, []);

    function prepWeekForRendering(games) {
        const _games = games.map((game, index) => {
            return (
                <div key={index} className="scoreboard">
                    <div className="team-score">
                        <h3>{game.home_team}</h3>
                        <p>{game.home_points}</p>
                    </div>
                    <h3 className="versus">vs.</h3>
                    <div className="team-score">
                        <h3>{game.away_team}</h3>
                        <p>{game.away_points}</p>
                    </div>
                </div>
        )
        });
        return _games
    }

        function handleClick(e) {
        const id = e.target.id
        setShowWeek(id);
      }

    return (
        <div className="y-wrap">
            <div>
                <h2 className="schedule-header">Schedule</h2>
                <div className="btn-wrap">
                    <button className={showWeek==='last'? "active": ''} id="last" onClick={handleClick}>Last Week</button>
                    <button className={showWeek==='current'? "active": ''} id="current" onClick={handleClick}>This Week</button>
                    <button className={showWeek==='next'? "active": ''} id="next" onClick={handleClick}>Next Week</button>
                </div>
                <div>
                    {showWeek==='last' && prepWeekForRendering(lastWeek)}
                    {showWeek==='current' && prepWeekForRendering(thisWeek)}
                    {showWeek==='next' && prepWeekForRendering(nextWeek)}
                </div>
            </div>
        </div>
    )
};

export default Schedule