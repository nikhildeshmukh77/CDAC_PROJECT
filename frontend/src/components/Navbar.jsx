import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function decodeToken(token) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = decodeToken(token);
      setUser(decoded);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("userEmail");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/" className="logo-section">
        <img src={logo} alt="KnowledgeGarden Logo" className="logo" />
        <h2>KnowledgeGarden</h2>
      </Link>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allcourses">Courses</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {user && user.user_role === "INSTRUCTOR" && (
          <li><Link to="/instructordashboard">Dashboard</Link></li>
        )}

        {user ? (
          <>
            <li>Hi, {user.sub}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;