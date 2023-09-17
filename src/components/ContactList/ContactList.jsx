import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListContainer } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <ListContainer>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} />
        ))}
      </List>
    </ListContainer>
  );
};
