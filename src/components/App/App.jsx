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
import { useEffect } from 'react';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(contacts.items);
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
};
export default App;
