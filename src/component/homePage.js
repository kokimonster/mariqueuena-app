import React from "react";
import { Link } from "react-router-dom";

const containerStyle = {
  background: 'linear-gradient(31deg, rgba(251,229,15,1) 0%, rgba(156,135,76,1) 12%, rgba(121,101,98,1) 17%, rgba(35,16,153,1) 50%, rgba(113,93,103,1) 86%, rgba(182,161,59,1) 97%, rgba(251,229,15,1) 100%)',
  backgroundSize: 'cover',  // Set background size to cover the entire container
  backgroundPosition: 'center',  // Center the background image
  backgroundRepeat: 'no-repeat',  // Prevent background image from repeating
};
function Homepage() {
    return(
    <div className="App" style={containerStyle}>
      <header className="App-header">
        <h1>MARIQUEUENA</h1>
        <p>
          COMELEC MARIKINA
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/registrationPage">
          <button id="signup" className="btn btn-outline-light mx-2">Sign Up</button>
          </Link>
          <Link to="/loginPage">
          <button id="login" className="btn btn-light mx-2">Login</button>
          </Link>
        </div>
      </header>
    </div>
    )
}

export default Homepage;
