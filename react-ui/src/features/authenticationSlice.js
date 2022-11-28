// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// // writing to the store
// export const fetchLogin = createAsyncThunk('login/user', async ({password, username}) => {

//   const options = {
//     body: JSON.stringify({password, username}),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//   };

//   const response = await fetch('http://localhost:8080/login', options);
//   const data = await response.json();
//   if (password === 'password' && username === 'johndoe') {
//     return true;
//   }
//   return false;
// });

// export const isLoggedInSlice = createSlice({
//   name: 'users',
//   initialState: false,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(fetchLogin.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   }
// });

// // reading from the store
// export const selectIsLoggedIn = state => state.isLoggedIn;

// export default isLoggedInSlice.reducer;


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchLogin = async (password, username) => {
  const options = {
    body: JSON.stringify({password, username}),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
  };

  const response = await fetch('http://localhost:8080/login', options);
  const data = await response.json();
  return await data;
};

const verifyToken = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'POST'
  };

  const response = await fetch('http:/localhost:8080/', options);
  const data = await response.json();
  return data;
};

export const verifyAuthentication = createAsyncThunk('auth/verify', async ({password, token, username}) => {
  if (!token && password && username) {
    const response = await fetchLogin(password, username);
    const { isSuccess, token } = response;
    if (isSuccess && token) {
      localStorage.setItem('jwt', token);
    }
    return isSuccess;
  } else if (token) {
    const response = await verifyToken(token);
    const { isSuccess } = response;
    if (!isSuccess) {
      localStorage.removeItem('jwt');
    }
    return isSuccess;
  } else {
    localStorage.removeItem('jwt');
    return false;
  }
});

export const authenticationSlice = createSlice({
  name: 'isAuth',
  initialState: false,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(verifyAuthentication.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectIsAuth = state => state.isAuth;

export default authenticationSlice.reducer;