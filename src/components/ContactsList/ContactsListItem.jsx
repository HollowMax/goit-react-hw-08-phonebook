import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ItemText, ListItem, DeleteBtn } from './ContactsListItem.styled';
import { deleteContacts } from 'redux/contacts';

export function ContactsListItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ItemText>
        {name}: {number}
      </ItemText>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </DeleteBtn>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
