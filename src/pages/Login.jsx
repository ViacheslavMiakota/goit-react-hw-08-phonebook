import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Loader from 'components/Loader/Loader';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';

export default function Login() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {isLoading && !error && <Loader isLoading={isLoading} />}
      <LoginForm />
    </div>
  );
}
