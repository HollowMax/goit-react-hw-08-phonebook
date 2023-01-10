import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { removeError } from 'redux/phonebook';

const LogIn = lazy(() => import('../Pages/LogIn/LogIn'));
const SignUp = lazy(() => import('../Pages/SignUp/SignUp'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.contacts.error);

  if (error) {
    Notify.warning(error, { position: 'left-top', showOnlyTheLastOne: true });
    dispatch(removeError());
  }

  return (
    <Suspense fallback={<p></p>}>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
}
