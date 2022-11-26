import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store';
import { fetchSchedule } from './features/scheduleSlice'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';
import { initializeConnect } from 'react-redux/es/components/connect';
import { setAuthenticationHeader } from './utils/authenticate';
// import reducer from './app/reducer';

// const store = configureStore(reducer)

async function init() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  const token = localStorage.getItem("jsonwebtoken")
  setAuthenticationHeader(token) // axios

//perform dispatch to change global state based on token
  if (token) {
    store.dispatch({type: 'ON_LOGGED_IN'})
  }
  store.dispatch(fetchSchedule())

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

init();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
