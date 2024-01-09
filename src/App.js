import "./App.css";
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap";
import AppNavbar from "./component/navbarApp";


// import { Route, Routes } from "react-router-dom"
// import { BrowserRouter as Router } from "react-router-dom"
// import { Container } from "react-bootstrap";
// import { useState, useEffect } from "react"
// import { UserProvider } from "./UserContext"



export default function App() {
    return(
        <Router>
            <AppNavbar/>
        </Router>
        
    )
}
