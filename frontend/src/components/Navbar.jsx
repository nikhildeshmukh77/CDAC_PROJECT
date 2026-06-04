import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="logo-section">
        <img src={logo} alt="KnowledgeGarden Logo" className="logo" />
        <h2>KnowledgeGarden</h2>
      </div>

      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Signup</li>
        
      </ul>

      {/* <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/aboutUs">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup" >Signup</Link></li>
        
      </ul> */}
    </nav>
  );
}

export default Navbar;