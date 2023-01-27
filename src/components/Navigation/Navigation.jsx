import { useAuth } from 'hooks';

import { NavTitleLink } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavTitleLink to="/">Home</NavTitleLink>
      {isLoggedIn && <NavTitleLink to="/contacts">Contacts</NavTitleLink>}
    </nav>
  );
};
