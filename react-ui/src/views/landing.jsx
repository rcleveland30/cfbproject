import { useState } from 'react';
import { useSelector } from "react-redux";
import SearchBar from '../components/search';

function Landing ({ }) {

    return (
        <div className="y-wrap">
            <h2>Select Your Favorite Team</h2>
            <p className="landing-headline">Welcome to **insert name**! You can do x, y, z, a, b, c </p>
            <h3>Upcoming Games</h3>
            <ul>
                <li>Game 1</li>
                <li>Game 2</li>
                <li>Game 3</li>
            </ul>  
        </div>
    );
};

export default Landing