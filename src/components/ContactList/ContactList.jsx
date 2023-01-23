import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from 'components/ContactList/ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return visibleContacts.map(({ id, name, number }) => (
    <List key={id}>
      <ContactItem name={name} id={id} number={number} />
    </List>
  ));
};

export default ContactList;
