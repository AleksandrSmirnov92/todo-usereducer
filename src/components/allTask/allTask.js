/* eslint-disable array-callback-return */
import React from 'react';
import { Task } from '../task/task';
import {
  removeTaskActionCreator,
  changeColorActionCreator,
} from '../../store/storeReducer';
export const AllTask = ({ tasks, dispatch, filter }) => {
  const remove = (id) => {
    dispatch(removeTaskActionCreator(id));
  };
  const checkbox = (id) => {
    dispatch(changeColorActionCreator(id));
  };

  return tasks.map((x) => {
    if (filter === 'ALL') {
      return <Task x={x} remove={remove} checkbox={checkbox} />;
    }
    if (filter === 'ALLACTIVE' && x.changeColor === false) {
      return <Task x={x} remove={remove} checkbox={checkbox} />;
    }
    if (filter === 'ALLINACTIVE' && x.changeColor === true) {
      return <Task x={x} remove={remove} checkbox={checkbox} />;
    }
  });
};
