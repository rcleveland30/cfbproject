import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from '../features/authenticationSlice';


function Landing ({ }) {
    const isLoggedIn = useSelector(selectIsAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          navigate("/login");
        }
      });

    return (
        <div className="y-wrap">
            <h2 className="landing-headline">Welcome to American University Football Weekend! Keep track of your favorite American University Football teams and games!</h2>
            <div className="landing-wrapper">
                <div className="search-team">
                    <h3>Select Your Favorite Team</h3>
                    <p>COMING SOON!</p>
                </div>
                <div className="upcoming-games">
                    <h3>Upcoming Games</h3>
                    <ul>
                        <p>COMING SOON!</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Landing