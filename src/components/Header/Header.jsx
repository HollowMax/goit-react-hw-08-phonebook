import { useDispatch, useSelector } from 'react-redux';
import { CustomHeader, Container, Text, LogOutBtn } from './Header.styled';
import { logOutUser } from 'redux/operations';
import { Navigate } from 'react-router-dom';

export function Header() {
  const email = useSelector(state => state.user.email);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <CustomHeader>
      <h1>Phonebook</h1>
      <Container>
        <Text>{email}</Text>
        <LogOutBtn type="button" onClick={() => dispatch(logOutUser(token))}>
          Log Out
        </LogOutBtn>
      </Container>
    </CustomHeader>
  );
}
