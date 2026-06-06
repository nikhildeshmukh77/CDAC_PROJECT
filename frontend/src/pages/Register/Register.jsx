import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import student from "../../assets/student.png";
import Navbar from "../../components/Navbar";

import "../Login/Login"
import "./Register.css"
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async () => {
    if (password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return;
  }
    if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }
    if ( data.status == 'success') {
      toast.success('Registration Successful')
      Navigate('/Login')
    }
    else
      toast.error(data.error)
  }

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-form">
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          </div>

          <button onClick={handleSignUp}>Create Account</button><br/><br/>

          <div>
          <a href="/">Already have an account? Login</a>
        </div>
        </div>

        

        <div className="login-image">
          <img src={student} alt="Student" />
        </div>
      </div>
    </>
  );
}

export default Register;