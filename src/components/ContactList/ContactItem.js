import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactItem = ({ name, number, onDeleteClick }) => {
  return (
    <li className={css.contactItem}>
      {name} : {number}
      <button
        className={css.deleteBtn}
        name="button"
        type="button"
        onClick={onDeleteClick}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export { ContactItem };
