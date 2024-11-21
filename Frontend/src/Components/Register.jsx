import React, { useState } from "react";
import "./Register.css";
import { Navbars } from "./Navbars";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";
export const Register = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [details, setDetails] = useState({
    name: "",
    pass: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const onFinishHandler = async (e) => {
    e.preventDefault();
    console.log("Form Data:", details); 

    try {
      dispatch(showLoading());
      const resp = await axios.post('http://localhost:4000/Register', details); 
      dispatch(hideLoading());
      if (resp.data.success) {
        message.success(`Registered Successfully. Hi, ${details.name}`); // Success
        navigate('/Login');
      }
    } catch (err) {
      console.log("Something went wrong while registering:", err);
      message.error("Registration failed. Please try again."); // Show error 
    }
  };

  return (
    <>
      <div className="navs">{<Navbars />}</div>
      <div className="container">
        <div className="signup-box">
          <h2>Signup</h2>
          <form onSubmit={onFinishHandler}>
            <div className="input-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={details.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input
                type="password"
                id="pass"
                name="pass"
                value={details.pass}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            <Link to='/Login'>Already have an account? Login here!</Link>
          </p>
        </div>
      </div>
    </>
  );
};
