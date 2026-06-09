import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import student from "../../assets/student.png";
import Navbar from "../../components/Navbar";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      window.alert("Please enter email and password");
      return;
    }

    const storedUser = window.sessionStorage.getItem("registeredUser");
    const registeredUser = storedUser ? JSON.parse(storedUser) : null;

    if (!registeredUser) {
      window.alert("Please register first");
      navigate("/register");
      return;
    }

    if (registeredUser.email === email && registeredUser.password === password) {
      window.sessionStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
      window.alert("Login successful");
      navigate("/allcourses");
    } else {
      window.alert("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Welcome Back</h1>
          <br />

          <p className="subtitle">
            <span>
              <b>ज्ञानोद्याने परिश्रमः जलम्, अनुशासनं भूमिः, सफलता फलम्।</b>
            </span>
          </p>

          <label>
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            Password <span className="required">*</span>
          </label>

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-links">
            <a href="#">Forgot Password?</a>
            <Link to="/register">Don't have account? Register</Link>
          </div>

          <button type="submit">Sign In</button>
        </form>

        <div className="login-image">
          <img src={student} alt="Student" />
        </div>
      </div>
    </>
  );
}

export default Login;
