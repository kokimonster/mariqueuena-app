import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Homepage() {
    return(
    // <Router>
    //     <AppNavbar/>
    //       <Container>
    //         {/* <LandingPageApp/> */}
    //         <LoginPage/>
    //         {/* <DropDown/> */}
    //       </Container>
    // </Router>      
    <div className="App">
      <header className="App-header">
        <h1>MARIQUEUENA </h1>
        <p>COMELEC MARIKINA </p>

        <div className="d-flex justify-content-center">
          <Link to="/registrationPage">
            <Button style={{ width: '100%', marginRight: '15px'}} variant="outline-light" size="lg">Sign Up</Button>
            {/* <button id="signup" className="btn btn-outline-light mx-2" >Sign Up</button> */}
          </Link>

          <Link to="/loginPage">
            <Button style={{ width: '100%', marginLeft: '15px' }} variant="light" size="lg">Login</Button>
            {/* <button id="login" className="btn btn-light mx-2">Login</button> */}
          </Link>

        </div>
      </header>
    </div>
    )
}

export default Homepage;
