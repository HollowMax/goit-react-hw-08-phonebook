import { ContactsListItem } from './ContactsListItem';
import PropTypes from 'prop-types';

export function ContactsList({ list, onDelete }) {
  return (
    <ul>
      {list.map(el => {
        return (
          <ContactsListItem
            key={el.id}
            name={el.name}
            number={el.number}
            onDelete={onDelete}
            id={el.id}
          />
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
  onDelete: PropTypes.func.isRequired,
};
