import React from 'react';
import AllTaskCSS from '../allTask/allTask.module.css';

export const Task = ({ x, checkbox, remove }) => {
  return (
    <div
      key={x.id}
      className={`${AllTaskCSS.add_task_result1} 
           ${
             x.changeColor
               ? AllTaskCSS.add_task_chacked_color
               : AllTaskCSS.add_task_result1
           }`}>
      <span
        id={x.id}
        className={`${
          x.changeColor
            ? AllTaskCSS.add_task_result_text_t
            : AllTaskCSS.add_task_result_text
        }`}>
        {x.message}
      </span>
      <div>
        <input
          id={x.id}
          type="checkbox"
          onClick={() => checkbox(x.id)}
          defaultChecked={x.changeColor ? true : false}
        />
        <button
          id={x.id}
          className={AllTaskCSS.add_task_result_text_remove}
          onClick={() => {
            remove(x.id);
          }}>
          удалить
        </button>
      </div>
    </div>
  );
};
