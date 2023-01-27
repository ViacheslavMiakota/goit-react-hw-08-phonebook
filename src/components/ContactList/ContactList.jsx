import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from 'components/ContactList/ContactList.styled';
import {
  selectContacts,
  selectStatusFilter,
} from 'redux/contacts/contactsSelectors';

const getVisibleContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);
  return visibleContacts.map(({ id, name, phone }) => (
    <List key={id}>
      <ContactItem name={name} id={id} number={phone} />
    </List>
  ));
};

export default ContactList;
