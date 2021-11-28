import { getTransactions, orderItems } from "../utils/api";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const SHIPMENT = "SHIPMENT";

function transactions(data) {
  return {
    type: RECEIVE_TRANSACTION,
    data,
  };
}
function shipment(data) {
  return {
    type: SHIPMENT,
    data,
  };
}

export function handleInitialTransaction() {
  return (dispatch) => {
    return getTransactions()
      .then((data) => {
        dispatch(transactions(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function handleShipment(info) {
  return (dispatch) => {
    return orderItems(info)
      .then((data) => {
        dispatch(shipment(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
