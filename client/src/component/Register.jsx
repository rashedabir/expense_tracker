import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", {
        name: name,
        email: email,
        password: password,
        rePassword: rePassword,
      });
      localStorage.setItem("firstLogin", true);
      window.location.href = "/dashboard";
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h3 className="mb-4">registration</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Repeat Password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
          </div>
          <button
            style={{ backgroundColor: "#359222", border: "#359222" }}
            type="submit"
            className="btn btn-primary mt-3"
          >
            register
          </button>
        </form>
        <h6 className="mt-4">
          Already member? <Link to="/">login...</Link>
        </h6>
      </div>
      {error.length === null ? null : (
        <Error error={error} setError={setError} />
      )}
    </div>
  );
}

export default Register;
