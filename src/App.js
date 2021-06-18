import React from 'react';


import './App.css';
import { 
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
import {  selectUserEmail } from './features/User/userSlice';




function App() {

  const userMail = useSelector(selectUserEmail); 
  
  return (
    
    <FirebaseContext.Provider value={firebase}>
      

    
    <HashRouter>
   
       <Switch>
        <Route path="/signup">
        {!userMail? <SignUp/> : <Redirect to="/notes"/> }
          
        </Route>
        <Route path="/login">
          
          
          {!userMail? <Login /> : <Redirect to="/notes"/> }
        </Route>
        <Route path="/notes">
          { /* userMail? <MainPage /> : <Redirect to="/"/>  */} 
          <MainPage />
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
