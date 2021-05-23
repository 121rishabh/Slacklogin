import React from 'react'
import Login from './Components/Login'
import Home from './Components/Home'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Switch>
           <Route path="/login">
               <Login />
           </Route>
           <Route>
             <Home />
           </Route>
       </Switch>
    </div>
    </Router>
  )
}

export default App
