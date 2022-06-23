const ADDTASKS = 'ADD-TASKS';
const REMOVETASK = 'REMOVE-TASK';
const FILTER = 'FILTER';
const CHANGECOLOR = 'CHANGECOLOR';

const storeReducer = (state, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case ADDTASKS:
      const newTask = {
        id: Math.random(),
        message: action.message,
        changeColor: false,
      };
      stateCopy.tasks.push(newTask);
      stateCopy.counter++;
      state = stateCopy;
      return state;
    case REMOVETASK:
      const removeTask = stateCopy.tasks.filter(
        (task) => task.id !== action.id
      );
      for (const item of stateCopy.tasks) {
        if (item.id === action.id && item.changeColor === false) {
          stateCopy.counter--;
          break;
        }
      }
      stateCopy.tasks = removeTask;
      state = stateCopy;
      return state;
    case FILTER:
      stateCopy.filter = action.value;
      state = stateCopy;
      return state;
    case CHANGECOLOR:
      const resultChange = stateCopy.tasks.map((item) => {
        if (item.id === action.id) {
          item.changeColor = !item.changeColor;
          if (item.changeColor) {
            stateCopy.counter--;
          } else {
            stateCopy.counter++;
          }
        }
        return item;
      });
      stateCopy.tasks = resultChange;
      state = stateCopy;
      return state;
    default:
      return state;
  }
};
export const addTaskActionCreator = (input) => {
  return {
    type: ADDTASKS,
    message: input,
  };
};
export const removeTaskActionCreator = (id) => {
  return {
    type: REMOVETASK,
    id: id,
  };
};
export const filterActionCreator = (value) => {
  return {
    type: FILTER,
    value: value,
  };
};
export const changeColorActionCreator = (id) => {
  return {
    type: CHANGECOLOR,
    id: id,
  };
};
export default storeReducer;
