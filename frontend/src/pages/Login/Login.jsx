import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import student from "../../assets/student.png";
import Navbar from "../../components/Navbar";
import "../Register/Register"
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-form">
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
          <input type="email" placeholder="Enter email address" />

          <label>
            Password <span className="required">*</span>
          </label>

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button>Sign In</button><br/><br/>
          <div>
          <a href="/Register/">Don't have account? Register</a>
        </div>
        </div>

        <div className="login-image">
          <img src={student} alt="Student" />
        </div>
      </div>
    </>
  );
}

export default Login;
