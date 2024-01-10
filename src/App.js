import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap";
import LandingPageApp from "./component/landingPage";
import LoginPage from "./component/loginPage";
import Homepage from "./component/homePage";
import Registrationpage from "./component/registrationPage";


function App() {
    return(
    <Router>
          <Routes>
            <Route path="/" Component={Homepage}></Route>
            <Route path="/loginPage" Component={LoginPage}></Route>
            <Route path="/registrationPage" Component={Registrationpage}></Route>
            <Route path="/landingPage" Component={LandingPageApp}></Route>
          </Routes>
    </Router>      
    )
}

export default App;
