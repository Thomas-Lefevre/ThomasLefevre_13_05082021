import React from 'react';
import ReactDOM from 'react-dom/client';
import FormSignIn from './components/FormSignIn';
import './designs/css/main.css';
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
import Home from './pages/Home';
import SignIn from './pages/SignIn'; 
import User from './pages/User';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
