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
  reducers: {
    doLogout: (state) => false // Logout from Anna
  },
  extraReducers(builder) {
    builder.addCase(verifyAuthentication.fulfilled, (state, action) => {
      return true;
    });
  }
});

export const selectIsAuth = state => state.isAuth;

export const { doLogout } = authenticationSlice.actions;

export default authenticationSlice.reducer;