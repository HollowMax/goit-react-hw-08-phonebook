import { Header } from 'components/Header/Header';
import { ContactsField } from 'components/ContactsField/ContactsField';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { GlobalStyles, Container } from 'components/GlobalStyles/GlobalStyles';
import { SearchField } from 'components/SearchField/SearchField';

export default function Contacts() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <ContactsField />
      <h2>Contacts</h2>
      <SearchField />
      <ContactsList />
    </Container>
  );
}
