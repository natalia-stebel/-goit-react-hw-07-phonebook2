import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from './../../contactStorage/contactsSlice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteContact(id));
  return (
    <li className={css.contactItem}>
      {name} : {number}
      <button
        className={css.deleteBtn}
        name="button"
        type="button"
        onClick={() => deleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { ContactItem };
