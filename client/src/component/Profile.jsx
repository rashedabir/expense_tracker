import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../GlobalState";
import Error from "./Error";

function Profile() {
  const state = useContext(GlobalState);
  const [info] = state.userAPI.info;
  const [token] = state.token;
  const [callback, setCallback] = state.userAPI.callback;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const id = info._id;

  const editProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/user/info/${id}`,
        {
          name: name,
          password: password,
          rePassword: rePassword,
        },
        {
          headers: { Authorization: token },
        }
      );
      window.location.href = "/profile";
      setCallback(!callback);
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div>
      <div className="profile">
        <i className="fas fa-user-circle"></i>
        <h3 className="mt-2"> {info.name} </h3>
        <h4 className="mb-4">
          joined: {new Date(info.createdAt).toLocaleDateString()}
        </h4>
        <form onSubmit={editProfile}>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
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
              disabled="true"
              value={info.email}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="New Password"
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
            <i
              className="fas fa-user-edit"
              style={{ fontSize: "15px", marginRight: "5px" }}
            ></i>
            update
          </button>
        </form>
      </div>
      {error.length === null ? null : (
        <Error error={error} setError={setError} />
      )}
    </div>
  );
}

export default Profile;
