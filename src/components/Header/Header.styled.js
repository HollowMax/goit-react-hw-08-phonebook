import styled from 'styled-components';

export const CustomHeader = styled('header')`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled('div')`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-right: 30px;
`;

export const Text = styled('p')`
  font-size: 20px;
  font-weight: 600;
`;

export const LogOutBtn = styled('button')`
  width: 90px;
  border: 1px solid #777;
  border-radius: 8px;

  background-color: rgb(232, 240, 254);

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 25px lightblue;
  }

  &:active {
    background-color: #fff;
  }
`;
