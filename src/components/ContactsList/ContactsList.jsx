import { useSelector } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';

export function ContactsList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const query = useSelector(state => state.filter);
  const handelChange = () =>
    contacts.filter(el => el.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <ul>
      {handelChange().map(el => (
        <ContactsListItem key={el.id} name={el.name} number={el.number} id={el.id} />
      ))}
    </ul>
  );
}
