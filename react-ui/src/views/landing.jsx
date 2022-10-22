import React, { useEffect } from "react";

function Landing ({}) {
    useEffect(() => {
        var url = "https://api.collegefootballdata.com/games/media/?year=2022&week=8";
        var bearer = 'Bearer ' + '2MiMGs6jrLE51/fAzQzVpImICjEUX3+rmfIEiCFhvI69aSS2puXlOPbtDBofqE2s';
        fetch(url, {
        method: 'GET',
        // withCredentials: true,
        // credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    }).then(response => response.text())
        .then (data => console.log('hi,mom', data))
    }, [])

    return (
        <div className="y-wrap">
            <input placeholder="Who's your favorite team?"></input>
            <button>Search</button>
        </div>
    );
};

export default Landing