import React from 'react';
import FilterCSS from './filter.module.css';
import { filterActionCreator } from '../../store/storeReducer';
export const Filter = ({ changeFilter }) => {
  const value = React.createRef();
  const change = () => {
    changeFilter(filterActionCreator(value.current.value));
  };
  return (
    <div className={FilterCSS.filter_block}>
      <select
        ref={value}
        onChange={change}
        className={FilterCSS.filter}
        defaultValue={'DEFAULT'}>
        <option id="1" value="ALL" selected>
          Выбрать все{' '}
        </option>
        <option id="2" value={'ALLACTIVE'}>
          {' '}
          Выбрать активные{' '}
        </option>
        <option id="3" value={'ALLINACTIVE'}>
          Выбрать законченные
        </option>
      </select>
    </div>
  );
};
