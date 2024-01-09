import "./App.css";
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap";
import AppNavbar from "./component/navbarApp";
import LandingPageApp from "./component/landingPage";
import LoginPage from "./component/loginPage";



function App() {
    return(
    <Router>
        <AppNavbar/>
          <Container>
            {/* <LandingPageApp/> */}
            <LoginPage/>
          </Container>
    </Router>      
    )
}

export default App;
