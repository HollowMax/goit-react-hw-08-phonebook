import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -75%);
`;

export const CustomTitle = styled('p')`
  font-size: 30px;
  font-weight: 600;
  text-align: center;

  margin-bottom: 50px;
`;

export const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  gap: 10px;
`;

export const FormLabel = styled.label`
  font-size: 26px;
`;

export const CustomInput = styled(Field)`
  width: 100%;
  height: 30px;

  font-size: 22px;

  border: none;
  border-radius: 6px;

  outline: 1px solid lightblue;

  &:focus {
    outline: none;

    box-shadow: 0px 0px 25px lightblue;
  }
`;

export const LogInBtn = styled.button`
  width: 200px;
  height: 50px;

  font-size: 20px;

  border: 1px solid #777;
  border-radius: 8px;
  margin: 30px auto 0;

  background-color: transparent;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 25px lightblue;
  }

  &:active {
    background-color: #d6ffff;
  }
`;

export const SignUpBtn = styled(NavLink)`
  width: 200px;
  height: 50px;

  font-size: 20px;
  text-decoration: none;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #777;
  border-radius: 8px;
  margin: 30px auto 0;

  background-color: rgb(232, 240, 254);

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 25px lightblue;
  }

  &:active {
    background-color: #fff;
  }
`;
