import React from "react";

function Teams ({}) {
    return (
        <div className="y-wrap">
            <div className="teams-list">
                <h2>Teams you follow:</h2>
                <ul>
                    <li>Michigan</li>
                    <li>Oregon</li>
                    <li>Alabama</li>
                    <li>Tennessee</li>
                </ul>
            </div>
            <div className="games-list">
                <h2>Upcoming games:</h2>
                <ul>
                    <li>Michigan vs Ohio State</li>
                    <li>Oregon vs Oregon State</li>
                    <li>Alabama @ Georgia</li>
                    <li>Tennessee vs Florida</li>
                </ul>
            </div>
        </div>
    );
};

export default Teams