import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignupScreen.css";

const SignupScreen = () => {
  const url = "http://localhost:8000/api/users";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg);
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.msg);
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1 className="signup-heading">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Your Name</label>
            <input
              type="text"
              id="username"
              value={user.userName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Your Email</label>
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

          <div className="input-field">
            <label htmlFor="age">Your Age</label>
            <input
              type="text"
              id="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
