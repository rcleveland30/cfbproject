import { useState, useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import { fetchLogin, selectIsLoggedIn } from '../features/authenticationSlice';
import axios from 'axios'
import { setAuthenticationHeader } from '../utils/authenticate';
import { selectIsAuth, verifyAuthentication } from '../features/authenticationSlice';

const Login = () => {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = useSelector(selectIsAuth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/schedule");
    }
  });

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    const _creds = {...creds, [key]: value};
    setCreds(_creds);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const { username, password } = creds
    dispatch(verifyAuthentication(creds));
    // setCreds({password, username});
    setCreds({});
  };

  const handleLogin = () => {

    axios.post('http://localhost:8080/login', {
      username: creds.username,
      password: creds.password
    }).then(response => {
      if(response.data){
        const token = response.data.token
        localStorage.setItem('jsonwebtoken', token)
        //set default headers
        setAuthenticationHeader(token)
        localStorage.setItem('username', creds.username)
        // props.onLoggedIn()
      }
    }).catch(error => {
      console.log(error)
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name='username' onChange={handleChange} placeholder='username' value={creds.username ?? ''} />
          <input name='password' onChange={handleChange} placeholder='password' type='password' value={creds.password ?? ''} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoggedIn: () => dispatch({type: 'ON_LOGGED_IN'})
  }
}

export default connect(null, mapDispatchToProps)(Login);