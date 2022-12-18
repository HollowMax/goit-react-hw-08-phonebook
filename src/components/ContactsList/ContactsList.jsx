import { ContactsListItem } from './ContactsListItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export function ContactsList({ list, onDelete }) {
  return (
    <ul>
      {list.map(el => (
        <ContactsListItem key={nanoid()} name={el.name} number={el.number} onDelete={onDelete} />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
  onDelete: PropTypes.func.isRequired,
};
