const getCounterFromLocalStorage = () => {
  const counterLocalStorage = JSON.parse(localStorage.getItem('counter'));
  if (counterLocalStorage) {
    return JSON.parse(localStorage.getItem('counter'));
  } else {
    return 0;
  }
};
const getTasksFromLocalStorage = () => {
  const tasksLocalStorage = JSON.parse(localStorage.getItem('todo'));
  if (tasksLocalStorage) {
    return JSON.parse(localStorage.getItem('todo'));
  } else {
    return [];
  }
};

export const initialState = {
  tasks: getTasksFromLocalStorage(),
  counter: getCounterFromLocalStorage(),
  filter: 'ALL',
};
