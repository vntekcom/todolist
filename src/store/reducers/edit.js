let initialState = {};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASK":
      return action.payload;
    default:
      return state;
  }
};

export default editReducer;
