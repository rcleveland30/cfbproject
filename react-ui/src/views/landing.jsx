import { useState } from 'react';
import { useSelector } from "react-redux";

function Landing ({ }) {
    

    // function handleClick(e) {
    //     const id = e.target.id
    //     setShowWeek(id);
    //   }
// incoroporate Redux and use Selector for teams API

    return (
        <div className="y-wrap">
            <p>Welcome to **insert name**! You can do x, y, z, a, b, c </p>
            <h3>Upcoming Games</h3>
            <ul>
                <li>Game 1</li>
                <li>Game 2</li>
                <li>Game 3</li>
            </ul>  
            <h2>Let's start by selecting your favorite team.</h2>
            <input placeholder="Who's your favorite team?"></input>
            <button className="landing-btn">Search</button>
        </div>
    );
};

export default Landing