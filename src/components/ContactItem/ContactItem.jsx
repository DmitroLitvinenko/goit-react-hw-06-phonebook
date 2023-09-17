import { useDispatch } from 'react-redux';
import { ListItem } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { removeContact } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </Button>
    </ListItem>
  );
};
