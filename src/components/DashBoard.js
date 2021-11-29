import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import Item from "./Item";
import Transactions from "./Transactions";
import Finance from "./Finance";
import { handleInitialItems } from "../actions/item";
import { handleInitialTransaction } from "../actions/transaction";
import { whichUser } from "../utils/helper";
import Error from "./Error";

const DashBoard = (props) => {
  console.log(props);
  const { dispatch, state } = props;
  const { authUser } = state;
  const loading = Object.keys(authUser).length === 0;
  const [activeTab, setActiveTab] = useState("Stocks");
  const labels = ["Stocks", "Transactions", "Financial Summary"];
  const labels2 = ["Stocks", "Transactions"];
  console.log(props, loading);
  useEffect(() => {
    dispatch(handleInitialItems());
    dispatch(handleInitialTransaction());
  }, [dispatch]);
  if (loading === false && authUser.error) {
    props.history.push("/error");
  }
  return (
    <div>
      <LoadingBar />
      {loading === true && whichUser() === undefined ? null : (
        <>
          <Nav />
          <div className="container">
            {whichUser() === "admin" ? (
              <ul className="sub-nav">
                {labels.map((label) => (
                  <li
                    key={label}
                    onClick={() => setActiveTab(label)}
                    id={activeTab === label ? "active" : ""}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="sub-nav">
                {labels2.map((label) => (
                  <li
                    key={label}
                    onClick={() => setActiveTab(label)}
                    id={activeTab === label ? "active" : ""}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "Stocks" && <Item />}
            {activeTab === "Transactions" && <Transactions />}
            {activeTab === "Financial Summary" && <Finance />}
          </div>
        </>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(DashBoard);
