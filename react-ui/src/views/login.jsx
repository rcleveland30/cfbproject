import { application } from 'express';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { verifyAuthentication } from '../features/authenticationSlice';

const Login = () => {
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
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    }) .then(response => response.json())
    .then(result => {
        if(result.success == true) {
            const token = result.token
            // put token in local storage
            localStorage.setItem('jsonwebtoken', token)
        }
    })
  }

  const handleAllAccounts = () => {
    fetch('http://localhost:8080/accounts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: creds.username})
    }) .then(response => response.json())
    .then (accounts => {
        console.log(accounts)
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
        <button onClick={handleAllAccounts}>Get all accounts</button>
      </form>
    </div>
  );
};

export default Login;