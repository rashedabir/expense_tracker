import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalState } from "../GlobalState";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [callback, setCallback] = state.userAPI.callback;
  const [info] = state.userAPI.info;
  const [menu, setMenu] = useState(false);

  const history = useHistory();

  const logout = async () => {
    await axios.get("/user/logout");
    localStorage.clear();
    setIsLogged(false);
    setMenu(!menu);
    history.push("/");
    setCallback(!callback);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <div>
      <header>
        <div className="header navbar">
          <div className="menu" onClick={() => setMenu(!menu)}>
            <i className="fas fa-bars icon"></i>
          </div>
          <div className="logo">
            {isLogged ? (
              <Link to="/dashboard">
                <h2>
                  <i className="fas fa-euro-sign"></i>xpense Tracker
                </h2>
              </Link>
            ) : (
              <h2>
                <i className="fas fa-euro-sign"></i>xpense Tracker
              </h2>
            )}
          </div>
          <div className="header-content">
            <ul style={styleMenu}>
              {isLogged ? (
                <>
                  <li onClick={() => setMenu(!menu)}>
                    <Link to="/profile">
                      <i className="fas fa-user-circle"></i>
                      {info.name}
                    </Link>
                  </li>
                  <li id="by">|</li>
                  <li onClick={logout}>
                    log out <i className="fas fa-sign-out-alt"></i>
                  </li>
                  <li className="menu cross" onClick={() => setMenu(!menu)}>
                    <i className="fas fa-times"></i>
                  </li>
                </>
              ) : (
                <li onClick={() => setMenu(!menu)}>
                  <Link to="/register">join us</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
