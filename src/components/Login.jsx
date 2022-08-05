import React, { useState } from "react";
import { useAuth } from "./context/authContext";
import ShowPassword from "./utils/showPassword";
import "./../css/signup.css";

const Login = () => {
  const { login } = useAuth();
  const { Icon, type, handleShow } = ShowPassword();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login </h2>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleFormChange}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password:</label>
        <input
          type={type}
          name="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handleFormChange}
        />
        <div className="show" onClick={handleShow}>
          {" "}
          {Icon}
        </div>
      </div>
      <button type="submit" className="auth">
        Register
      </button>
    </form>
  );
};

export default Login;
