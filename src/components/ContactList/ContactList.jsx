import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListContainer } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ListContainer>
      <List>
        {contacts
          .filter(({ name }) => name.toLowerCase()?.includes(filter))
          .map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} />
          ))}
      </List>
    </ListContainer>
  );
};
