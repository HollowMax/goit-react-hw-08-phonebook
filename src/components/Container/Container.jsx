import { PhonebookContainer } from './Container.styled.js';
import PropTypes from 'prop-types';

export function ContactsContainer({ children }) {
  return <PhonebookContainer>{children}</PhonebookContainer>;
}

ContactsContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};
