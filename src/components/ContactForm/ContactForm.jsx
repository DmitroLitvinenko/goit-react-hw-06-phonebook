import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button, ErrorMessage } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handlerSubmit = (values, actions) => {
    const handlerAddContact = () => dispatch(addContact(values));

    const overlap = contacts.map(({ name }) => name).includes(values.name);

    overlap
      ? alert(`${values.name} is already in contacts`)
      : handlerAddContact();

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handlerSubmit}
      >
        <Form>
          <label>
            <p>Name</p>
            <Field type="text" name="name" />
          </label>
          <ErrorMessage component="p" name="name" />

          <label>
            <p>Number</p>
            <Field type="tel" name="number" />
          </label>
          <ErrorMessage component="p" name="number" />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};
