import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginScreen.css";

const LoginScreen = () => {
  const url = "http://localhost:8000/api/signIn";
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);
        if (response.data.user.role === "user") {
          navigate("/");
        } else {
          navigate("/admin/customers");
        }
        localStorage.removeItem("cart");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-heading">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/#">Forgot password?</a>
          </div>

          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>

        <div className="signup-link">
          <p>
            Not a member? <a href="/signup">Register</a>
          </p>
          <p>or sign up with:</p>

          <div className="social-btns">
            <button className="social-btn facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-btn twitter">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="social-btn google">
              <i className="fab fa-google"></i>
            </button>
            <button className="social-btn github">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;


  