import React from "react";
import { connect } from "react-redux";
import { whichUser } from "../utils/helper";

const Error = (props) => {
  console.log(props);
  const { state } = props;
  if (state.authUser.error) {
    return (
      <div className="error-container">
        <h2 className="error">{state.authUser.error}</h2>
        <button className="btn" onClick={() => props.history.push("/")}>
          Back To Login
        </button>
      </div>
    );
  }
  if (whichUser() === undefined) {
    return (
      <div className="error-container">
        <p className="error">Please Go back to login or contact the admin</p>
        <button className="btn" onClick={() => props.history.push("/")}>
          Back To Login
        </button>
      </div>
    );
  }
};

function mapStateToProps(state, { error }) {
  return {
    state,
    error,
  };
}

export default connect(mapStateToProps)(Error);
