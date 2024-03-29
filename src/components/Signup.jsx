import React, { useState } from "react";
import { useAuth } from "./context/authContext";
import ShowPassword from "./utils/showPassword";
import "./../css/signup.css";

const Signup = () => {
  const { signup } = useAuth();
  const { Icon, type, handleShow } = ShowPassword();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register </h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your First Name"
          value={firstName}
          onChange={handleFormChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your Last Name"
          value={lastName}
          onChange={handleFormChange}
        />
      </div>
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

export default Signup;
