import { SearchForm, SearchLabel, SearchInput } from './SearchField.styled';
import PropTypes from 'prop-types';

export function SearchField({ filter, onChange }) {
  return (
    <SearchForm>
      <SearchLabel htmlFor="search">Find contacts by name</SearchLabel>
      <SearchInput type="text" name="search" value={filter} onChange={onChange} />
    </SearchForm>
  );
}

SearchField.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
