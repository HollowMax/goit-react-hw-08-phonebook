import { ContactsField } from './ContactsField/ContactsField';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyles, Container } from './GlobalStyles/GlobalStyles';
import { SearchField } from './SearchField/SearchField';

export function App() {
  return (
    <Container>
      <GlobalStyles />
      <h1>Phonebook</h1>
      <ContactsField />
      <h2>Contacts</h2>
      <SearchField />
      <ContactsList />
    </Container>
  );
}
