import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}


export default App;
