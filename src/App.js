import "./App.css";
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap";
import AppNavbar from "./component/navbarApp";
import LandingPageApp from "./component/landingPage";
import LoginPage from "./component/loginPage";
import Homepage from "./component/homePage";
import Registrationpage from "./component/registrationPage";


function App() {
    return(
    <Router>
        {/* <AppNavbar/>
          <Container>
            <LandingPageApp/>
            <DropDown/>
          </Container> */}
           {/* <Homepage/> */}
          <Registrationpage/>
          
          <LoginPage/>
    </Router>      
    )
}

export default App;
