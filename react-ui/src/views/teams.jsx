import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSavedGames } from '../features/savedGamesSlice'
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from '../features/authenticationSlice';


function Teams ({}) {
    // const myGames = useSelector(selectSavedGames)
    const [myGames, setMyGames] = useState([]);
    const isLoggedIn = useSelector(selectIsAuth);
    const navigate = useNavigate();


//if authenticated
    useEffect(() => {
        if (!isLoggedIn) {
          navigate("/login");
        }
      });

    useEffect(() => {
    axios.get('http://localhost:8080/games').then(response => {
        if(response.data){
            setMyGames(response.data);
        }
      }).catch(error => {
        console.log(error)
      })
    }, []);

    const _myGames = myGames.map((myGame, index) => {
    const {week, awayTeam, away_points, homeTeam, home_points} = myGame;
        return (
            <div>
                <p className="saved-games">Week {week} | {awayTeam} @ {homeTeam}</p>
            </div>
        )
    })



    return (
        <div className="y-wrap">
            <div className="profile-wrapper">
                <div className="games-list">
                    <h2>Games you're following:</h2>
                    <div className="saved-games">{_myGames}</div>
                </div>
                <div className="teams-list">
                    <h2>Teams you follow:</h2>
                    <div className="saved-games">Michigan</div>
                </div>
            </div>
        </div>
    );
};

export default Teams