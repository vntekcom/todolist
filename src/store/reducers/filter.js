import { ADD_KEYWORD } from "../constants/task";

let initialState = {
  filterType: null,
  filterStr: null
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEYWORD:
      return { ...action.payload };
    default:
      return state;
  }
};

export default filterReducer;
