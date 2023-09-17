import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactContainer, List, ListContainer } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ListContainer>
      <List>
        {contacts
          .filter(({ name }) => name.toLowerCase().includes(filter))
          .map(({ id, name, number }) => (
            <ContactContainer key={id}>
              <ContactItem name={name} number={number} />
              <Button
                type="button"
                onClick={() => dispatch(removeContact({ id }))}
              >
                Delete
              </Button>
            </ContactContainer>
          ))}
      </List>
    </ListContainer>
  );
};
