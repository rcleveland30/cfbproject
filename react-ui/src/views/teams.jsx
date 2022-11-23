import React from "react";
import { useSelector } from "react-redux";
import { selectSavedGames } from '../features/savedGamesSlice'

function Teams ({}) {
    const myGames = useSelector(selectSavedGames)

    const _myGames = myGames.map((myGame, index) => {
    const {week, away_team, away_points, home_team, home_points} = myGame;
        return (
            <div>
                <p className="saved-games">Week {week} | {away_team} @ {home_team}</p>
            </div>
        )
    })

    return (
        <div className="y-wrap">
            <div className="games-list">
                <h2>Games you're following:</h2>
                <div>{_myGames}</div>
            </div>
            <div className="teams-list">
                <h2>Teams you follow:</h2>
                <ul>
                    <li>Michigan</li>
                </ul>
            </div>
        </div>
    );
};

export default Teams