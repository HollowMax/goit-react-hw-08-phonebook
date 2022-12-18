import { Component } from 'react';
import { ContactsField } from './phonebookFields/ContactsField';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsContainer } from './Container/Container';
import { GlobalStyles } from './GlbalStyles/GlobalStyles';
import { SearchField } from './phonebookFields/SearchField';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = value => {
    if (this.state.contacts.find(el => el.name === value.name)) {
      return alert(`${value.name} is already in contacts.`);
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, value] }));
  };

  handelChange = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDelete = value => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(el => el.name !== value) }));
  };

  onChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    return (
      <ContactsContainer>
        <GlobalStyles />
        <h1>Phonebook</h1>
        <ContactsField add={this.handleSubmit} />
        <h2>Contacts</h2>
        <SearchField filter={this.state.filter} onChange={this.onChange} />
        <ContactsList list={this.handelChange()} onDelete={this.handleDelete} />
      </ContactsContainer>
    );
  }
}
