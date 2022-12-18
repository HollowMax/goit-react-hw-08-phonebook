import { Formik } from 'formik';
import { ContainerForm, FormLabel, ContactsInput } from './ContactsField.styled';
import PropTypes from 'prop-types';

export function SearchField({ filter, onChange }) {
  return (
    <Formik initialValues={{ search: '' }}>
      <ContainerForm>
        <FormLabel htmlFor="search">Find contacts by name</FormLabel>
        <ContactsInput type="text" name="search" value={filter} onChange={onChange} />
      </ContainerForm>
    </Formik>
  );
}

SearchField.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
