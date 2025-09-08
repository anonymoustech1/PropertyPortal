import React, { useState } from "react";
import "./SignUp.css";
import { Eye, EyeOff } from "lucide-react"; // npm i lucide-react

export default function Login() {
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

          <form className="form">

            <div className="field">
              <label>Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" />
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


          </form>

          <p className="alt">
            Don'thave an account? <a href="#">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
}
