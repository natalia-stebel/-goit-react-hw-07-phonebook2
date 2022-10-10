// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './FormContainer.module.css';
import { getIsLoading } from '../contactStorage/store';

import { useSelector } from 'react-redux';

export default function App() {
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      <div className={css.formContainer}>
        <h1 className={css.titleCard}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.titleCard}>Contacts</h2>
        <Filter />
        {isLoading}
        <ContactList />
      </div>
    </>
  );
}
