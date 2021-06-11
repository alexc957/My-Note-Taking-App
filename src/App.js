import React, { useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import {  BrowserRouter as Router,
  Switch,
  Route,
  
  Redirect,
  HashRouter} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import LandinPage from './pages/LandinPage';
import FirebaseContext from './context/firebase';
import {firebase} from './firebase/index';
import { useSelector } from 'react-redux';
import { selectDocId } from './features/User/userSlice';


function App() {

  const userDocId = useSelector(selectDocId);

 
  
  return (
    
    <FirebaseContext.Provider value={firebase}>
      

    
    <HashRouter>
   
       <Switch>
        <Route path="/signup">
        {!userDocId? <SignUp/> : <Redirect to="/notes"/> }
          
        </Route>
        <Route path="/login">
          
          
          {!userDocId? <Login /> : <Redirect to="/notes"/> }
        </Route>
        <Route path="/notes">
          {userDocId? <MainPage /> : <Redirect to="/"/> } 
        </Route>
        <Route path="/">
          <LandinPage />

        </Route>
      </Switch>

     
      

    </HashRouter>
    </FirebaseContext.Provider>

  );
}

export default App;
