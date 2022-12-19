import { Styles } from './GlobalStyles.styled';
import { PhonebookContainer } from './GlobalStyles.styled';
import PropTypes from 'prop-types';

export function GlobalStyles() {
  return <Styles />;
}

export function Container({ children }) {
  return <PhonebookContainer>{children}</PhonebookContainer>;
}

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};
