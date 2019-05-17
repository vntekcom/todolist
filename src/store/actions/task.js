import { ADD_TASK,DEL_TASK,SET_TASK,ADD_KEYWORD } from "../constants/task";

//action creator
export const accAddTtask = newTask => {
  return {
    type: ADD_TASK,
    payload: newTask
  };
};

export const delTask = task => {
  return {
    type: DEL_TASK,
    payload: task
  };
};

export const editTask = task => {
  return {
    type: SET_TASK,
    payload: task
  };
};

export const addKeyword = (keyword,type) => {
  return {
    type: ADD_KEYWORD,
    payload: {
      filterStr: keyword,
      filterType: type
    }
  };
};
