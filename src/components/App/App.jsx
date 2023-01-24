import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  ContactTitle,
  Warning,
} from 'components/App/App.styled';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {contacts.length > 0 ? (
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
