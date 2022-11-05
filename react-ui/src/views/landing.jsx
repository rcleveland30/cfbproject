import React, { useEffect } from "react";
import LastWeek from '../components/last-week';

function Landing ({ }) {

    useEffect(() => {
        // fetch("/teams").then(response => response.json()).then(data => console.log(data))
    }, [])

    return (
        <div className="y-wrap">
            <h2>Select your favorite team</h2>
            <input placeholder="Who's your favorite team?"></input>
            <button>Search</button>
            <LastWeek />
        </div>
    );
};

export default Landing