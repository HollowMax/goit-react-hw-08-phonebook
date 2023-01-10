import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomTitle,
  CustomContainer,
  CustomForm,
  FormLabel,
  CustomInput,
  LogInBtn,
  SignUpBtn,
} from './LogIn.styled';
import { logInUser } from 'redux/operations';
import { Navigate } from 'react-router-dom';

export default function LogIn() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  if (token) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <>
      <CustomContainer>
        <CustomTitle>Log In</CustomTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={data => {
            dispatch(logInUser(data));
          }}
        >
          {() => (
            <CustomForm>
              <FormLabel htmlFor="LogInEmail">Email</FormLabel>
              <CustomInput type="email" id="LogInEmail" name="email" required autoComplete="off" />
              <FormLabel htmlFor="LogInPassword">Password</FormLabel>
              <CustomInput
                type="password"
                id="LogInPassword"
                name="password"
                required
                autoComplete="off"
              />
              <LogInBtn type="submit">Log in</LogInBtn>
              <SignUpBtn to="/signup">Sign Up</SignUpBtn>
            </CustomForm>
          )}
        </Formik>
      </CustomContainer>
    </>
  );
}
