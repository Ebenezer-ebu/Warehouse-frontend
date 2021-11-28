import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "./FormCreateEdit";
import Nav from "./Nav";
import { handleCreateItems } from "../actions/item";

const CreateItem = (props) => {
  const { dispatch } = props;
  const [data, setData] = useState({
    itemName: "",
    catergory: "",
    imageUrl: "",
    quantity: "",
    price: "",
  });
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
    dispatch(handleCreateItems(data));
    setData({
      itemName: "",
      catergory: "",
      imageUrl: "",
      quantity: "",
      price: "",
    });
  };
  return (
    <div className="create-item">
      <Nav />
      <div className="container">
        <Form
          handleChange={handleChange}
          data={data}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(CreateItem);
