

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
        <h1>MARIQUEUENA</h1>
        <p>
          COMELEC MARIKINA
        </p>
        <div className="d-flex justify-content-center">
          <a href="#signup" id="signup" className="btn btn-outline-light mx-2">Sign Up</a>
          <a href="#login" id="login" className="btn btn-light mx-2">Login</a>
        </div>
      </header>
    </div>
    )
}

export default Homepage;
