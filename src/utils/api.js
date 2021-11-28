// Get token from cookies
let pass = document.cookie.split("=")[1];
let token = `Bearer ${pass}`;

const headers = {
  Accept: "application/json",
  Authorization: token,
};

let url = process.env.REACT_APP_BACKEND;

export const login = ({ fullname, email }) =>
  fetch(`${url}/login-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullname, email }),
  })
    .then((res) => res.json())
    .then((data) => data);

export const createItem = ({
  itemName,
  catergory,
  imageUrl,
  quantity,
  price,
}) =>
  fetch(`${url}/create-item`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ itemName, catergory, imageUrl, quantity, price }),
  })
    .then((res) => res.json())
    .then((data) => data);

export const editItem = ({
  itemName,
  catergory,
  imageUrl,
  quantity,
  price,
  id,
}) =>
  fetch(`${url}/item/${id}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ itemName, catergory, imageUrl, quantity, price }),
  })
    .then((res) => res.json())
    .then((data) => data);

export const createWorker = ({ fullname, email, role }) => {
  fetch(`${url}/create-worker`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ fullname, email, role }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const getStocks = () =>
  fetch(`${url}/restocking`)
    .then((res) => res.json())
    .then((data) => data.stock);

export const getTransactions = () =>
  fetch(`${url}/transactions`)
    .then((res) => res.json())
    .then((data) => data.transaction);

export const orderItems = ({ price, number, id }) =>
  fetch(`${url}/order-item/${id}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ price, number }),
  })
    .then((res) => res.json())
    .then((data) => data);

    
