import { RECEIVE_ITEMS, CREATE_ITEMS, EDIT_ITEMS } from "../actions/item";

export default function items(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return { ...state, ...action.data };
    case CREATE_ITEMS:
      const leng = Object.keys(state).length - 1;
      state[leng] = action.info;
      return { ...state };
    case EDIT_ITEMS:
      console.log(action.info, state);
      const leng2 = Object.keys(state);
      let indx = leng2.find((el) => state[el]._id === action.info.data._id);
      return { ...state, [indx]: action.info.data };
    default:
      return state;
  }
}
