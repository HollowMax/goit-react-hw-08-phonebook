import { useState, useEffect, useRef } from 'react';
import { ContactsField } from './ContactsField/ContactsField';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyles, Container } from './GlobalStyles/GlobalStyles';
import { SearchField } from './SearchField/SearchField';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filterField, setFilterField] = useState('');

  const componentDidMount = useRef(false);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('contacts'));
    if (local) {
      setContacts(local);
    }
  }, []);

  useEffect(() => {
    if (componentDidMount.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));

      return;
    }
    componentDidMount.current = true;
  }, [contacts]);

  const handleSubmit = value => {
    if (contacts.find(el => el.name === value.name)) {
      alert(`${value.name} is already in contacts.`);
      return false;
    }
    setContacts(prevState => [...prevState, value]);
    return true;
  };

  const handelChange = () => {
    return contacts.filter(el => el.name.toLowerCase().includes(filterField.toLowerCase()));
  };

  const handleDelete = value => {
    setContacts(prevState => prevState.filter(el => el.id !== value));
  };

  const onChange = evt => {
    setFilterField(evt.target.value);
  };

  return (
    <Container>
      <GlobalStyles />
      <h1>Phonebook</h1>
      <ContactsField add={handleSubmit} />
      <h2>Contacts</h2>
      <SearchField filter={filterField} onChange={onChange} />
      <ContactsList list={handelChange()} onDelete={handleDelete} />
    </Container>
  );
}
