import { RECEIVE_TRANSACTION, SHIPMENT } from "../actions/transaction";

export default function transaction(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return { ...state, ...action.data };
    case SHIPMENT:
      const leng = Object.keys(state).length - 1;
      console.log(leng, action.data);
      state[leng] = action.data.newSales;
      return { ...state };
    default:
      return state;
  }
}
