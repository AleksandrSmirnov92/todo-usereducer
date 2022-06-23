import React, { useReducer, useEffect } from 'react';

import AppCSS from './App.module.css';
import { Header } from './components/header/header';
import { AddTaskMenu } from './components/addTaskMenu/addTaskMenu';
import { Filter } from './components/filter/filter';
import { AllTask } from './components/allTask/allTask';
import storeReducer from './store/storeReducer';
import { initialState } from './store/store';

function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(state.counter));
    localStorage.setItem('todo', JSON.stringify(state.tasks));
    localStorage.setItem('Filter', JSON.stringify(state.filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className={`${AppCSS.App} ${AppCSS.AppWrapper}`}>
      <Header counter={state.counter} />
      <AddTaskMenu dispatch={dispatch} />
      <Filter changeFilter={dispatch} />
      <AllTask tasks={state.tasks} dispatch={dispatch} filter={state.filter} />
    </div>
  );
}

// localStorage.clear();
export default App;
