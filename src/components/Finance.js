import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helper";

const Finance = (props) => {
  const { state } = props;
  const { transaction } = state;
  const arr = Object.keys(transaction);
  let total = arr.reduce((accum, item) => {
    return accum + transaction[item].profit;
  }, 0);
  console.log(total);
  return (
    <div>
      <h1>Financial</h1>
      <div className={total > 0 ? "to-right" : "to-left"}>
        {total > 0
          ? "Profit of " +
            Number(total).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })
          : "Loss of " +
            Number(total).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
      </div>
      <div className="content3">
        {arr.map((fin) => (
          <div key={transaction[fin]._id} className="fin-list">
            <div>
              Product sold at{" "}
              {Number(transaction[fin].price).toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            </div>
            <p>Sales made on {formatDate(transaction[fin].createdAt)} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Finance);
