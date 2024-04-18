import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap";
import LandingPageApp from "./component/landingPage";
import LoginPage from "./component/loginPage";
import Homepage from "./component/homePage";
import RegistrationPage from "./component/registrationPage";
import QueuePageApp from "./component/queuePage";
import CandidatesProfileApp from "./component/candidatesProfile";
import LeniProfileApp from "./component/leniProfile";
import LeodyProfileApp from "./component/leodyProfile";
import IskoProfileApp from "./component/iskoProfile";
import MannyProfileApp from "./component/mannyProfile";
import LacsonProfileApp from "./component/lacsonProfile";
import MarcosProfileApp from "./component/marcosProfile";
import tipsAndTricksApp from "./component/tipsAndTricks";


function App() {

  const [data, setData] = useState([])

    useEffect(()=>{
      fetch('http://localhost:3031/')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }, [])

    return(
    <Router>
      <Routes>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/loginPage" Component={LoginPage}></Route>
        <Route path="/registrationPage" Component={RegistrationPage}></Route>
        <Route path="/landingPage" Component={LandingPageApp}></Route>
        <Route path="/queuePage" Component={QueuePageApp}></Route>
        <Route path="/candidatesProfile" Component={CandidatesProfileApp}></Route>
        <Route path="/leniProfile" Component={LeniProfileApp}></Route>
        <Route path="/leodyProfile" Component={LeodyProfileApp}></Route>
        <Route path="/iskoProfile" Component={IskoProfileApp}></Route>
        <Route path="/mannyProfile" Component={MannyProfileApp}></Route>
        <Route path="/lacsonProfile" Component={LacsonProfileApp}></Route>
        <Route path="/marcosProfile" Component={MarcosProfileApp}></Route>
        <Route path="/tipsAndTricks" Component={tipsAndTricksApp}></Route>
      </Routes>
    </Router>      
    )
}

export default App;
