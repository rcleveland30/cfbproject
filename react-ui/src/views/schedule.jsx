import React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/search";
import { selectThisWeek, selectLastWeek, selectNextWeek } from '../features/scheduleSlice'
import { selectSavedGames, addGame } from '../features/savedGamesSlice'
import { doSearchData, selectSearchData } from "../features/searchDataSlice";

function Schedule ({ }) {
    const currentWeek = useSelector(selectThisWeek)
    const lastWeek = useSelector(selectLastWeek)
    const nextWeek = useSelector(selectNextWeek)
    const searchData = useSelector(selectSearchData)
    const [showWeek, setShowWeek] = useState('current');
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(doSearchData(currentWeek));
    }, [currentWeek]);


    function prepWeekForRendering(games) {
        const _games = games && games.map((game, index) => {
        const {id, week, away_team, away_points, home_team, home_points} = game;
            return (
                <div key={index} className="scoreboard">
                    <div className="team-score">
                        <h3>{away_team}</h3>
                        <p>{away_points}</p>
                    </div>
                    <h3 className="versus">@</h3>
                    <div className="team-score">
                        <h3>{home_team}</h3>
                        <p>{home_points}</p>
                    </div>
                    <button onClick={() => followClick ({id, week, away_team, away_points, home_team, home_points})} className="follow-btn">+</button>
                </div>
        )});
        return _games
    }

    function handleClick(e) {
        const id = e.target.dataset.type;
        if (id === 'last') {
            dispatch(doSearchData(lastWeek));
        } else if (id === 'current') {
            dispatch(doSearchData(currentWeek));
        } else {
            dispatch(doSearchData(nextWeek));
        }
    };

    function followClick(game) {
        dispatch(addGame(game))
    };

    return (
        <div className="y-wrap">
            <div>
                <SearchBar data={currentWeek} />
                <h2 className="schedule-header">Schedule</h2>
                <div className="btn-wrap">
                    <button data-type='last' className={showWeek==='last' ? "active": ''} onClick={handleClick}>Prev. Week</button>
                    <button data-type='current' className={showWeek==='current' ? "active": ''} onClick={handleClick}>This Week</button>
                    <button data-type='next' className={showWeek==='next' ? "active": ''} onClick={handleClick}>Upcoming</button>
                </div>
                <div>
                    {searchData && prepWeekForRendering(searchData)}
                </div>
            </div>
        </div>
    )
};

export default Schedule