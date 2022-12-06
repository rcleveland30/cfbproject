import { useDispatch } from "react-redux";
import { doLogout } from "../features/authenticationSlice";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogOut = (e) => {
      e.preventDefault();
      dispatch(doLogout());
      localStorage.clear();
      navigate('/login');
      console.log('logged out')
    };
  
    return (
      <div className="main-logout-container">
        <div className="logout-container-text">
          <h3 className="logout-signup-text">Thank you for visiting!</h3>
          <p>Check back later for new content.</p>
          <form className="logout-form" onSubmit={handleLogOut}>
            <button type="submit" className="logout-button">
              Log Out
            </button>
        </form>
        </div>
      </div>
      ) 
}

export default LogOut