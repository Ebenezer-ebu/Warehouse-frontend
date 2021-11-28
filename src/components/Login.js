import React, { useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../actions/user";

const Login = (props) => {
  const [detail, setDetail] = useState({
    fullname: "",
    email: "",
  });
  const { dispatch, history } = props;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setDetail({
      ...detail,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(detail));
    setDetail({
      fullname: "",
      email: "",
    });
    history.push("/dashboard");
  };
  return (
    <div className="login-container">
      <div className="logo-div">
        <h1 className="login-logo">D.. WAREHOUSE</h1>
      </div>
      <div className="form-div">
        <form className="login-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Fullname</label>
            <br />
            <input
              type="text"
              value={detail.fullname}
              name="fullname"
              id="fullname"
              placeholder="Fullname..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              value={detail.email}
              name="email"
              id="email"
              placeholder="Email..."
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={!detail.fullname || !detail.email}
            className="btn-login"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Login);
