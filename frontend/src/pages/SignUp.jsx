import React, { useState } from "react";
import "./SignUp.css";
import { Eye, EyeOff } from "lucide-react"; // npm i lucide-react

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [role, setRole] = useState("");

  return (
    <div className="signup-page">
      {/* the entire page has your logo as bg via CSS */}
      <div className="signup-shell">
        <div className="form-card">
          <h2 className="title">
            Get <span>Started</span>!
          </h2>

          <form className="form" method='POST'>
            <div className="field">
              <label>Full Name</label>
              <input type="text" name="name" id="name" placeholder="Enter your full name" />
            </div>

            <div className="field">
              <label>Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" />
            </div>

             <div className="field">
              <label>phone number</label>
              <input type="tel" name="phone" id="phone" placeholder="Enter your email" />
            </div>

            <div className="field">
              <label>Password</label>
              <div className="pwd-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password" id="password" placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="eye"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <div className="pwd-wrap">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirm_password" id="confirm_password" placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="eye"
                  aria-label="Toggle confirm password visibility"
                  onClick={() => setShowConfirm((v) => !v)}
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* single-select role (radio) */}
            <div className="role-row">
              <label className="role">
                <input
                  type="radio"
                  name="role"
                  value="agent"
                  checked={role === "agent"}
                  onChange={() => setRole("agent")}
                />
                As an Agent
              </label>
              <label className="role">
                <input
                  type="radio"
                  name="role"
                  value="client"
                  checked={role === "client"}
                  onChange={() => setRole("client")}
                />
                As a Client
              </label>
            </div>

            <button type="submit" className="btn">Sign Up</button>
          </form>

          <p className="alt">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
