import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  ContactTitle,
  Warning,
} from 'components/App/App.styled';

import Loader from 'components/Loader/Loader';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contactsSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {isLoading && !error && <Loader isLoading={isLoading} />}
      {contacts.items.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Warning>
          Your phone book is empty, your first contact has been added
        </Warning>
      )}
    </Container>
  );
}
