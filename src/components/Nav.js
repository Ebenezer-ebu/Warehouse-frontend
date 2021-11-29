import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { whichUser } from "../utils/helper";
import { setAuthedUser } from "../actions/user";

const Nav = (props) => {
  const [role, setRole] = useState('');

  const setUser = () => {
    document.cookie =
      'user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    props.dispatch(setAuthedUser({}))
  }
  useEffect(() => {
    setRole(whichUser);
  }, [role])
  return (
    <nav className="nav">
      <div className="logo">
        D.. WAREHOUSE
      </div>
      <ul>
        <li
          className="tag"
          id={window.location.pathname === "/dashboard" ? "active" : ""}
        >
          <NavLink to="/dashboard" exact activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        {role && role === "admin" ? (
          <>
            <li
              className="tag"
              id={window.location.pathname === "/add-item" ? "active" : ""}
            >
              <NavLink to="/add-item" exact activeClassName="active">
                Create Item
              </NavLink>
            </li>
            <li
              className="tag"
              id={window.location.pathname === "/worker" ? "active" : ""}
            >
              <NavLink to="/worker" exact activeClassName="active">
                Recruit Worker
              </NavLink>
            </li>{" "}
          </>
        ) : null}

        <li
          className="tag"
          id={window.location.pathname === "/" ? "active" : ""}
          onClick={setUser}
        >
          <NavLink to="/" exact activeClassName="active">
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Nav);
