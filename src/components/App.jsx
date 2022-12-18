import { Component } from 'react';
import { ContactsField } from './phonebookFields/ContactsField';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsContainer } from './Container/Container';
import { GlobalStyles } from './GlbalStyles/GlobalStyles';
import { SearchField } from './phonebookFields/SearchField';

export class App extends Component {
  state = {
    contacts: [],
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
