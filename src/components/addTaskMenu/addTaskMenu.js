import React, { useRef, useState } from 'react';
import AddTaskCSS from './addTaskMenu.module.css';
import { addTaskActionCreator } from '../../store/storeReducer';
export const AddTaskMenu = ({ dispatch }) => {
  const refText = useRef();
  const [input, setinput] = useState('');
  const taskText = () => {
    setinput(refText.current.value);
  };
  const addTask = (input) => {
    if (input.trim() !== '') {
      dispatch(addTaskActionCreator(input));
      setinput('');
    } else {
      alert('Вы ничего не ввели!');
    }
  };
  const onKeyPressHandler = (event) => {
    if (event.keyCode === 13) {
      addTask(input);
    }
  };
  return (
    <div className={AddTaskCSS.add_task}>
      <h1 className={AddTaskCSS.add_task_text}>Добавить задачу</h1>
      <div className={AddTaskCSS.add_task_input_and_button}>
        <input
          ref={refText}
          type="text"
          className={AddTaskCSS.add_task_input}
          onChange={taskText}
          onKeyDown={onKeyPressHandler}
          value={input}
          placeholder="Добавить задачу"
        />
        <button className={AddTaskCSS.button_add}>
          <span
            className={AddTaskCSS.button_add_text}
            onClick={() => {
              addTask(input);
            }}>
            Добавить
          </span>
        </button>
      </div>
    </div>
  );
};
