import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ItemText = styled.p`
  font-size: 23px;
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 20px;

  border: 1px solid #777;
  border-radius: 8px;

  background-color: transparent;

  cursor: pointer;

  &:active {
    background-color: #d6ffff;
  }
`;
