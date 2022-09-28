import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from './../../contactStorage/contactsSlice';
import css from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setForm(contacts => ({ ...contacts, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { id: nanoid(), ...form };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      reset();
      return toast.error(`${data.name} is already in your list`);
    }

    dispatch(addContact(data));

    reset();
  };

  const reset = () => {
    setForm({ name: '', number: '' });
  };
  const { name, number } = form;
  return (
    <div className={css.contactForm}>
      <form action="submit" onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.name}>Name</span>
          <input
            className={css.input}
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          <span className={css.name}>Number</span>
          <input
            className={css.input}
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </form>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
