import { ItemText, ListItem, DeleteBtn } from './ContactsListItem.styled';
import PropTypes from 'prop-types';

export function ContactsListItem({ name, number, id, onDelete }) {
  return (
    <ListItem>
      <ItemText>
        {name}: {number}
      </ItemText>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
