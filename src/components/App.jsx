import { Component } from 'react';
import { ContactsField } from './ContactsField/ContactsField';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyles, Container } from './GlobalStyles/GlobalStyles';
import { SearchField } from './SearchField/SearchField';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('contacts'));
    if (local) {
      this.setState({ contacts: local });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleSubmit = value => {
    if (this.state.contacts.find(el => el.name === value.name)) {
      alert(`${value.name} is already in contacts.`);
      return false;
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, value] }));
    return true;
  };

  handelChange = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDelete = value => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(el => el.id !== value) }));
  };

  onChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    return (
      <Container>
        <GlobalStyles />
        <h1>Phonebook</h1>
        <ContactsField add={this.handleSubmit} />
        <h2>Contacts</h2>
        <SearchField filter={this.state.filter} onChange={this.onChange} />
        <ContactsList list={this.handelChange()} onDelete={this.handleDelete} />
      </Container>
    );
  }
}
