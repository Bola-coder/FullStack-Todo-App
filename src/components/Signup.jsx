import React, { useState } from "react";
import { useAuth } from "./context/authContext";
import "./../css/signup.css";

const Signup = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = formData;

  const handleFormChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: [e.target.value],
    }));
  };
  console.log(formData);
  signup();

  return (
    <form>
      <h2>Register </h2>
      <div>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your FirstName"
          value={firstname}
          onChange={handleFormChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">LastName</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter your LastName"
          value={lastname}
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
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handleFormChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
