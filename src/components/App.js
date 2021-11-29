import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";
import DashBoard from "./DashBoard";
import CreateItem from "./CreateItem";
import CreateWorker from "./CreateWorker";
import Error from "./Error";

function App(props) {
  useEffect(() => {});
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/add-item" component={CreateItem} />
        <Route path="/worker" component={CreateWorker} />
        <Route path="/error" component={Error} />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);
