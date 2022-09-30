import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactList/ContactItem';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../contactStorage/contactsSlice';
import { getValue, getContacts } from '../../contactStorage/store';

export const ContactList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getValue);
  const toLower = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(toLower)
  );
  const dispatch = useDispatch();

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.contactList}>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDeleteClick={() => dispatch(deleteContact(id))}
              />
            );
          })}
        </ul>
      ) : (
        <p className={css.titleContact}>YOUR CONTACT LIST IS EMPTY</p>
      )}
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
