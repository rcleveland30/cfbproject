import { useState } from 'react';
import { useSelector } from "react-redux";
import SearchBar from '../components/search';

function Landing ({ }) {

    return (
        <div className="y-wrap">
            <h2 className="landing-headline">Welcome to American University Football Weekend! Keep track of your favorite American University Football teams and games!</h2>
            <div className="landing-wrapper">
                <div className="search-team">
                    <h3>Select Your Favorite Team</h3>
                    <input placeholder="ex/ Michigan" />
                </div>
                <div className="upcoming-games">
                    <h3>Upcoming Games</h3>
                    <ul>
                        <li>Game 1</li>
                        <li>Game 2</li>
                        <li>Game 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Landing