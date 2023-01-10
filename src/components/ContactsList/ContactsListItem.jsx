import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ItemText, ListItem, DeleteBtn } from './ContactsListItem.styled';
import { deleteContact } from 'redux/operations';

export function ContactsListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  return (
    <ListItem>
      <ItemText>
        {name}: {number}
      </ItemText>
      <DeleteBtn
        type="button"
        onClick={async el => {
          el.target.disabled = true;
          await dispatch(deleteContact({ token, id }));
          el.target.disabled = false;
        }}
      >
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
