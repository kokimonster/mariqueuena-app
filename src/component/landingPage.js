import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function LandingPageApp () {
  return (  
    <div className="App">
    <header className="App-header">
      <h1>Welcome to Our Website</h1>
      <p>
        Explore amazing features and benefits!
      </p>
      <div className="d-flex justify-content-center">
        <a href="#signup" className="btn btn-primary mx-2">Sign Up</a>
        <a href="#login" className="btn btn-outline-primary mx-2">Login</a>
      </div>
    </header>
  </div>
  );
}
export default LandingPageApp