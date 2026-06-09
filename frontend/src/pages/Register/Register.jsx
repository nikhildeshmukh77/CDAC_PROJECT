import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import student from "../../assets/student.png";
import Navbar from "../../components/Navbar";

import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [role, setRole] = useState("student");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePasswords = (pwd, confirmPwd) => {
    if (!confirmPwd) {
      setPasswordMessage("");
      setPasswordsMatch(false);
      return;
    }

    if (pwd === confirmPwd) {
      setPasswordMessage("Passwords match");
      setPasswordsMatch(true);
    } else {
      setPasswordMessage("Passwords do not match");
      setPasswordsMatch(false);
    }
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      window.alert("Please fill all required fields");
      return;
    }
    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }

    const userDetails = { firstName, lastName, email, password, role };
    window.sessionStorage.setItem("registeredUser", JSON.stringify(userDetails));
    window.alert("Registration Successful");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="register-container">
        <div className="register-form">
          <h1>Create Account</h1>
          <br />

          <p className="subtitle">
            <span>
              <b>ज्ञानोद्याने परिश्रमः जलम्, अनुशासनं भूमिः, सफलता फलम्।</b>
            </span>
          </p>


          <div className="role-container">
            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />
              <span className="role-dot"></span>
              Student
            </label>

            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={role === "teacher"}
                onChange={() => setRole("teacher")}
              />
              <span className="role-dot"></span>
              Teacher
            </label>
          </div>


          <div className="field-row">
            <div className="field-group">
              <label>First Name <span className="required">*</span></label>
              <input
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="field-group">
              <label>Last Name <span className="required">*</span></label>
              <input
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <label>Email Address <span className="required">*</span></label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="field-row">
            <div className="field-group">
              <label>Create Password <span className="required">*</span></label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);
                    validatePasswords(value, confirmPassword);
                  }}
                />
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="field-group">
              <label>Confirm Password <span className="required">*</span></label>
              <div className="password-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setConfirmPassword(value);
                    validatePasswords(password, value);
                  }}
                />
                <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          </div>
          <p>{passwordMessage}</p>

          <button type="button" onClick={handleSignUp} disabled={!passwordsMatch}>
            Create Account
          </button><br /><br />

          <div>
            <Link to="/">Already have an account? Login</Link>
          </div>
        </div>



        <div className="register-image">
          <img src={student} alt="Student" />
        </div>
      </div>
    </>
  );
}

export default Register;
