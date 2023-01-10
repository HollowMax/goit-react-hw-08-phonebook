import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { ContainerForm, FormLabel, AddBtn, ContactsInput } from './ContactsField.styled';
import { addContact } from 'redux/operations';

export function ContactsField() {
  const contacts = useSelector(state => state.contacts.items);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        if (contacts.find(el => el.name === values.name)) {
          alert(`${values.name} is already in contacts.`);
          return;
        }
        dispatch(addContact({ token, values }));
        resetForm();
      }}
    >
      {({ isSubmiting }) => (
        <ContainerForm>
          <FormLabel htmlFor="name">Name</FormLabel>
          <ContactsInput
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <FormLabel htmlFor="phone" style={{ marginTop: '20px' }}>
            Number
          </FormLabel>
          <ContactsInput
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <AddBtn type="submit">Add contact</AddBtn>
        </ContainerForm>
      )}
    </Formik>
  );
}
