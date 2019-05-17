const taskArr = [{ id: 1, name: "Alan", priority: 1, status: "1" }];

const taskReducer = (state = taskArr, action) => {
  //nhận vào action, xử lý acction và trả ra state
  switch (action.type) {
    case "ADD_TASK": //chú ý cái quái này!!!
      state.push(action.payload);
      return [...state];
    case "DEL_TASK":
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index,1)
      return [...state];
    default:
      return [...state];
  }
};

export default taskReducer;
