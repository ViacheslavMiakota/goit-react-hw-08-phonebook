import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import Loader from 'components/Loader/Loader';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';

export default function Register() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {isLoading && !error && <Loader isLoading={isLoading} />}
      <RegisterForm />
    </div>
  );
}
