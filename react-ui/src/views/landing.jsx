import React, { useEffect } from "react";

function Landing ({ }) {

    useEffect(() => {
        fetch("/teams").then(response => response.json()).then(data => console.log(data))
    }, [])

    return (
        <div className="y-wrap">
            <h2>Select your favorite team</h2>
            <input placeholder="Who's your favorite team?"></input>
            <button>Search</button>
        </div>
    );
};

export default Landing