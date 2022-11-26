import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { connect } from 'react-redux';
import { setAuthenticationHeader } from '../utils/authenticate';
// import { verifyAuthentication } from '../features/authenticationSlice';

const Login = (props) => {
  const [creds, setCreds] = useState({});

  const dispatch = useDispatch();

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    const _creds = {...creds, [key]: value};
    setCreds(_creds);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(verifyAuthentication(creds));
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
        props.history.push('/accounts')
        localStorage.setItem('username', creds.username)
        props.onLoggedIn()
      }
    }).catch(error => {
      console.log(error)
    })
  }

  const handleAllAccounts = () => {

    const token = localStorage.getItem("jsonwebtoken")

    axios.get(`http://localhost:8080/accounts/${creds.username}`)
    .then(response => console.log(response))
    .catch(error=> console.log(error))

  }

  const handleGetProfile = () => {
    axios.get(`http://localhost:8080/profile/${creds.username}`)
    .then(response => console.log(response))
    .catch(error=> console.log(error))
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name='username' onChange={handleChange} placeholder='username' value={creds.username ?? ''} />
          <input name='password' onChange={handleChange} placeholder='password' type='password' value={creds.password ?? ''} />
        </div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleAllAccounts}>All Accounts</button>
        <button onClick={handleGetProfile}>Profile</button>
      
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