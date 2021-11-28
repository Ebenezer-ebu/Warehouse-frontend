import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "./FormCreateEdit";
import { handleEditItems } from "../actions/item";
import { handleShipment } from "../actions/transaction";
import { whichUser } from "../utils/helper";

const Item = (props) => {
  const { state, dispatch } = props;
  const [form, showForm] = useState(false);
  const [order, showOrder] = useState(false);
  const [select, setSelect] = useState("");
  const [data, setData] = useState({
    itemName: "",
    catergory: "",
    imageUrl: "",
    quantity: "",
    price: "",
  });
  const [item, orderItem] = useState({
    number: "",
    price: "",
  });
  const { items } = state;
  const arr = Object.keys(items);
  const cloud = process.env.REACT_APP_CLOUDINARY_URL;
  const handleChange = (e) => {
    const { value, name, files } = e.target;
    if (files) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "hbcyue9x");
      fetch(cloud, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((datas) => {
          setData({ ...data, imageUrl: datas.secure_url });
        });
    }
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleEditItems({ ...data, id: select }));
    setData({
      itemName: "",
      catergory: "",
      imageUrl: "",
      quantity: "",
      price: "",
    });
  };
  const handleOrderChange = (e) => {
    const { value, name } = e.target;
    orderItem({ ...item, [name]: value });
  };
  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(handleShipment({ ...item, id: select }));
  };
  return (
    <div className="item">
      <ul className="content">
        {arr.map((item) => (
          <li key={items[item]._id} className="content2">
            <div className="item">
              <div className="image-container">
                <img src={items[item].imageUrl} alt={items[item].itemName} />
              </div>
              <div className="list-container">
                <div className="list-item">{items[item].itemName}</div>
                <div className="list-item">{items[item].quantity}</div>
                <div className="list-item">
                  {Number(items[item].price).toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </div>
              </div>
            </div>
            {whichUser() === "admin" ? (
              <div className="btn-item">
                <button
                  onClick={() => {
                    showForm(!form);
                    setSelect(items[item]._id);
                  }}
                  className="btn"
                >
                  {form && items[item]._id === select ? "hide" : "edit"}
                </button>
                <button
                  onClick={() => {
                    showOrder(!order);
                    setSelect(items[item]._id);
                  }}
                  className="btn"
                >
                  {order && items[item]._id === select ? "Cancel" : "Ship Item"}
                </button>
              </div>
            ) : null}
            {form && items[item]._id === select ? (
              <Form
                handleChange={handleChange}
                data={data}
                handleSubmit={handleSubmit}
              />
            ) : null}
            {order && items[item]._id === select ? (
              <form onSubmit={handleOrder} id="item-form">
                <div className="form-group">
                  <label htmlFor="price">Selling Price</label>
                  <br />
                  <input
                    type="number"
                    id="price"
                    name="price"
                    min="1"
                    value={item.price}
                    onChange={handleOrderChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Quantity to deliver</label>
                  <br />
                  <input
                    type="number"
                    id="number"
                    name="number"
                    min="1"
                    value={item.number}
                    onChange={handleOrderChange}
                  />
                </div>
                <button type="submit" className="btn">
                  Send
                </button>
              </form>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state, { items }) {
  return { state, items };
}

export default connect(mapStateToProps)(Item);
