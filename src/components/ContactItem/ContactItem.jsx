import { ListItem } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
    </ListItem>
  );
};
