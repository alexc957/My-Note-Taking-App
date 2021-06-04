import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import LandinPage from './pages/LandinPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {

  
  
  return (
    <Router>
   
       <Switch>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/login">
          <Login />

        </Route>
        <Route path="/notes">
          <MainPage />
        </Route>
        <Route path="/">
          <LandinPage />

        </Route>
      </Switch>

     
      

    </Router>

  );
}

export default App;
