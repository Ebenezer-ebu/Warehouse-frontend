import React, { useState } from "react";
import Nav from "./Nav";
import { createWorker } from "../utils/api";

const Worker = () => {
  const [detail, setDetail] = useState({
    fullname: "",
    email: "",
    role: "worker",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDetail({ ...detail, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createWorker(detail);
    setDetail({ fullname: "", email: "", role: "worker" });
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <h3>Create A Worker</h3>
        <form onSubmit={handleSubmit} id="item-form">
          <div className="form-group">
            <label htmlFor="fullname">Workers Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={detail.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Worker's Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={detail.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Select role:</label>
            <select value={detail.role} onChange={handleChange}>
              <option value="">Select your option</option>
              <option value="worker">Worker</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Worker;
