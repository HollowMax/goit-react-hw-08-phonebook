import { Formik } from 'formik';
import {
  CustomContainer,
  CustomTitle,
  CustomForm,
  FormLabel,
  CustomInput,
  SignUpBtn,
  LogInBtn,
} from './SingUp.styled';
import { addUser } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  if (token) {
    return <Navigate to="/contacts" replace />;
  }
  return (
    <CustomContainer>
      <CustomTitle>Sign up</CustomTitle>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={data => {
          dispatch(addUser(data));
        }}
      >
        {({ isSubmiting, values }) => (
          <CustomForm>
            <FormLabel htmlFor="UserName">Name</FormLabel>
            <CustomInput type="name" id="UserName" name="name" required />
            <FormLabel htmlFor="SignUpEmail">Email</FormLabel>
            <CustomInput type="email" id="SignUpEmail" name="email" required autoComplete="email" />

            <FormLabel htmlFor="SignUpPassword">Password</FormLabel>
            <CustomInput
              type="password"
              id="SignUpPassword"
              name="password"
              required
              autoComplete="current-password"
            />
            <SignUpBtn type="submit">Sing Up</SignUpBtn>
            <LogInBtn to="/login">Log In</LogInBtn>
          </CustomForm>
        )}
      </Formik>
    </CustomContainer>
  );
}
