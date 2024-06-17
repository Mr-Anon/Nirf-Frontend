import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import "../../styles/Login/Form.css";
// import { register } from "../actions/auth";

export const Register = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(formData)
    });
    props.onFormSwitch("login")
  } catch (error) {
    alert("Error: " + error)
    console.error('There was an error registering the user!', error);
  }
};

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

return (
  <div className="form_cont">
    <h2 className="text">Register</h2>
    <form aria-autocomplete="off" className="register_form" onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        placeholder="Name"
        handleChange={handleChange}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
        handleChange={handleChange}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
        handleChange={handleChange}
      />
      <button
        className="l_btn"
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Register
      </button>
    </form>
    <button className="link_btn" onClick={() => props.onFormSwitch("login")}>
      Already have an account? Login
    </button>
  </div>
);
};