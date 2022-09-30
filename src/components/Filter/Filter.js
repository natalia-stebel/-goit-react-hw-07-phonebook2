import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from './../../contactStorage/contactsSlice';
import { getValue, getContacts } from '../../contactStorage/store';
import css from './Filter.module.css';

export const Filter = () => {
  const value = useSelector(getValue);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <label className={css.labelFilter}>
          Find contacts by name
          <input
            className={css.inputFilter}
            name="filter"
            onChange={e => dispatch(changeFilter(e.currentTarget.value))}
            type="text"
            value={value}
          />
        </label>
      )}
    </>
  );
};
