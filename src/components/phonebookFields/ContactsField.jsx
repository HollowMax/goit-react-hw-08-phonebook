import { Formik } from 'formik';
import { ContainerForm, FormLabel, AddBtn, ContactsInput } from './ContactsField.styled';
import PropTypes from 'prop-types';

export function ContactsField({ add }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        add(values);
      }}
    >
      {({ isSubmiting }) => (
        <ContainerForm>
          <FormLabel htmlFor="name">Name</FormLabel>
          <ContactsInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <FormLabel htmlFor="number" style={{ marginTop: '20px' }}>
            Number
          </FormLabel>
          <ContactsInput
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

ContactsField.propTypes = {
  add: PropTypes.func.isRequired,
};
