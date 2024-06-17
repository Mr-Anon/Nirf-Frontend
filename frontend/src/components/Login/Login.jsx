import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import "../../styles/Login/Form.css";


export const Login = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      // console.log(data);

      if (!data.error) {
        localStorage.setItem("isloggedin", true);
        localStorage.setItem("isAdmin", data.isadmin);
        navigate("/"); // navigate to dashboard
      }
      else {
        alert("Wrong Email or Password")
      }

    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form_cont">
      <h2 className="text">Login</h2>
      <form
        aria-autocomplete="off"
        className="login_form"
        onSubmit={handleSubmit}
      >
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          handleChange={handleChange}
          autofocus
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
          Log In
        </button>
      </form>
      <button
        className="link_btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register
      </button>
    </div>
  );
};