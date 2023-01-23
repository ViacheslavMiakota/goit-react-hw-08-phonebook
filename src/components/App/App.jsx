import { Container, Title, ContactTitle } from 'components/App/App.styled';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <>
        <Filter />
        <ContactList />
      </>
    </Container>
  );
};
export default App;
