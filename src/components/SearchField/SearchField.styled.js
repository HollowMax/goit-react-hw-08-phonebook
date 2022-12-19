import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchLabel = styled.label`
  font-size: 20px;
`;

export const SearchInput = styled.input`
  width: 200px;

  border: none;
  border-radius: 6px;

  outline: 1px solid lightblue;

  &:focus {
    outline: none;

    box-shadow: 0px 0px 25px lightblue;
  }
`;
