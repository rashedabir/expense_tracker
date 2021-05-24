import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import Header from "../component/Header";
import Login from "../component/Login";
import Profile from "../component/Profile";
import Register from "../component/Register";
import NotFound from "../screens/NotFound"
import { GlobalState } from "../GlobalState";

function MainScreen() {
  const state = useContext(GlobalState)
  const [auth] = state.userAPI.isLogged
  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/" exact component={auth ? NotFound : Login} />
            <Route path="/register" exact component={auth ? NotFound : Register} />
            <Route path="/dashboard" exact component={auth ? Dashboard : NotFound} />
            <Route path="/profile" exact component={auth ? Profile : NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default MainScreen;
