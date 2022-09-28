import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from './../../contactStorage/contactsSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onChange = element => {
    dispatch(changeFilter(element.currentTarget.value));
  };

  return (
    <label className={css.labelFilter}>
      Find contacts by name
      <input
        className={css.inputFilter}
        name="filter"
        onChange={onChange}
        type="text"
        value={filter}
      />
    </label>
  );
};
