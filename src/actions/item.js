import { getStocks, createItem, editItem } from "../utils/api";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const CREATE_ITEMS = "CREATE_ITEMS";
export const EDIT_ITEMS = "EDIT_ITEMS";

function itemList(data) {
  return {
    type: RECEIVE_ITEMS,
    data,
  };
}

function createItems(info) {
  return {
    type: CREATE_ITEMS,
    info
  }
}

function editedItem(info) {
  return {
    type: EDIT_ITEMS,
    info
  };
}

export function handleInitialItems() {
  return (dispatch) => {
    return getStocks()
      .then((data) => {
        dispatch(itemList(data));
      })
      .catch((error) => {
          if (error.response) {
            console.log(error.response)
        };
      });
  };
}

export function handleCreateItems(info) {
  return (dispatch) => {
    return createItem(info).then((data) => {
      console.log(data)
      dispatch(createItems(data.data))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export function handleEditItems(info) {
  console.log(info)
  return (dispatch) => {
    return editItem(info).then((data) => {
      dispatch(editedItem(data));
    }).catch((error) => {
      console.log(error)
    })
  }
}
