import React from "react";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { selectThisWeek, selectLastWeek, selectNextWeek } from '../features/scheduleSlice'

function Schedule ({ }) {
    const currentWeek = useSelector(selectThisWeek)
    const lastWeek = useSelector(selectLastWeek)
    const nextWeek = useSelector(selectNextWeek)
    const [showWeek, setShowWeek] = useState('current');

    function prepWeekForRendering(games) {
        const _games = games && games.map((game, index) => {
            return (
                <div key={index} className="scoreboard">
                    <div className="team-score">
                        <h3>{game.away_team}</h3>
                        <p>{game.away_points}</p>
                    </div>
                    <h3 className="versus">@</h3>
                    <div className="team-score">
                        <h3>{game.home_team}</h3>
                        <p>{game.home_points}</p>
                    </div>
                    <button data-type={game.home_team} onClick={followClick} className="follow-btn">Follow Game</button>
                </div>
        )});
        return _games
    }

    function handleClick(e) {
        const id = e.target.dataset.type
        setShowWeek(id);
    }

    function followClick(e) {
        const followGame = e.target.dataset.type
        console.log(followGame)
    
        
    }

    return (
        <div className="y-wrap">
            <div>
                <h2 className="schedule-header">Schedule</h2>
                <div className="btn-wrap">
                    <button data-type='last' className={showWeek==='last' ? "active": ''} onClick={handleClick}>Week #</button>
                    <button data-type='current' className={showWeek==='current' ? "active": ''} onClick={handleClick}>Week #</button>
                    <button data-type='next' className={showWeek==='next' ? "active": ''} onClick={handleClick}>Week #</button>
                </div>
                <div>
                    {showWeek==='last' && prepWeekForRendering(lastWeek)}
                    {showWeek==='current' && prepWeekForRendering(currentWeek)}
                    {showWeek==='next' && prepWeekForRendering(nextWeek)}
                </div>
            </div>
        </div>
    )
};

export default Schedule