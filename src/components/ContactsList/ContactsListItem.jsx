import { ItemText, ListItem, DeleteBtn } from './ContactsListItem.styled';
import PropTypes from 'prop-types';

export function ContactsListItem({ name, number, onDelete }) {
  return (
    <ListItem>
      <ItemText>
        {name}: {number}
      </ItemText>
      <DeleteBtn type="button" onClick={() => onDelete(name)}>
        Delete
      </DeleteBtn>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
