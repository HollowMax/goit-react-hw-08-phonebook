import { useSelector } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';
import { Circles } from 'react-loader-spinner';
import { Container } from './ContactsListItem.styled';

export function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  const query = useSelector(state => state.filter);
  const handelChange = () =>
    contacts.items.filter(el => el.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <ul>
        {handelChange().map(el => (
          <ContactsListItem key={el.id} name={el.name} number={el.number} id={el.id} />
        ))}
      </ul>
      {contacts.isLoading && (
        <Container>
          <Circles
            height="60"
            width="60"
            color="#9fe3f9"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Container>
      )}
    </>
  );
}
