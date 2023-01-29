import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from 'components/ContactList/ContactList.styled';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelector';

const getVisibleContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return visibleContacts.map(({ id, name, number }) => (
    <List key={id}>
      <ContactItem name={name} id={id} number={number} />
    </List>
  ));
};

export default ContactList;
