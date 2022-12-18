import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormLabel = styled.label`
  font-size: 20px;
`;

export const ContactsInput = styled(Field)`
  width: 200px;

  border: none;
  border-radius: 6px;

  outline: 1px solid lightblue;

  &:focus {
    outline: none;

    box-shadow: 0px 0px 25px lightblue;
  }
`;

export const AddBtn = styled.button`
  width: 100px;

  border: 1px solid #777;
  border-radius: 8px;
  margin-top: 30px;

  background-color: transparent;

  cursor: pointer;

  &:active {
    background-color: #d6ffff;
  }
`;
