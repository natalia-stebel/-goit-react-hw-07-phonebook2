// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './FormContainer.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <div className={css.formContainer}>
        <h1 className={css.titleCard}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.titleCard}>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </>
  );
}
