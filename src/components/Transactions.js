import React from "react";
import { connect } from "react-redux";

const Transactions = (props) => {
  const { state } = props;
  const { transaction } = state;
  const arr = Object.keys(transaction);
  return (
    <div>
      <h1>Transaction</h1>
      <ul className="content">
        {arr.map((trans) => (
          <li key={transaction[trans]._id}>
            <div className="trans-item">{transaction[trans].itemName}</div>
            <div className="trans-item">
              <strong>Product Category:</strong>
              <span className="det">{transaction[trans].catergory}</span>
            </div>
            <div className="trans-item">
              <strong>Selling Price:</strong>
              <span className="det">
                {Number(transaction[trans].price).toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </span>
            </div>
            <div className="trans-item">
              <strong>Quantity Sold:</strong>
              <span className="det">
                {transaction[trans].quantity}
                {transaction[trans].quantity > 1 ? " units" : " unit"}
              </span>
            </div>
            <div className="trans-item">
              <strong>Profit Made:</strong>
              <span className="det">
                {Number(transaction[trans].profit).toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </span>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Transactions);
