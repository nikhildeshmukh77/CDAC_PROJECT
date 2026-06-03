import logo from "../assets/logo.png";
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
    </nav>
  );
}

export default Navbar;