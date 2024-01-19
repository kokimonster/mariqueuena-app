import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap";
import LandingPageApp from "./component/landingPage";
import LoginPage from "./component/loginPage";
import Homepage from "./component/homePage";
import RegistrationPage from "./component/registrationPage";


function App() {

  const [data, setData] = useState([])

    useEffect(()=>{
      fetch('http://localhost:8081/')
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
      </Routes>
    </Router>      
    )
}

export default App;
