import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, SearchLabel, SearchInput } from './SearchField.styled';
import { setFilter } from 'redux/filter';

export function SearchField() {
  const filter = useSelector(state => state.filter);
  const dispathc = useDispatch();

  return (
    <SearchForm>
      <SearchLabel htmlFor="search">Find contacts by name</SearchLabel>
      <SearchInput
        type="text"
        name="search"
        value={filter}
        onChange={evt => dispathc(setFilter(evt.target.value))}
      />
    </SearchForm>
  );
}
