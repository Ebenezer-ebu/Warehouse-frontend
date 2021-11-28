import React from "react";
import { connect } from "react-redux";

const Form = (props) => {
  const { handleChange, data, handleSubmit } = props;
  return (
    <div>
      <form id="item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <br />
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={data.itemName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="catergory">Catergory</label>
          <br />
          <input
            type="text"
            id="catergory"
            name="catergory"
            value={data.catergory}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={data.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <br />
          <input
            type="number"
            id="price"
            name="price"
            min="1"
            value={data.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Choose An Image</label>
          <br />
          <input
            type="file"
            accept="image/*"
            id="imageUrl"
            name="imageUrl"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

function mapStateToProps(state, { handleChange, data }) {
  return {
    state,
    handleChange,
    data,
  };
}

export default connect(mapStateToProps)(Form);
