import { AuthNavLink } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </div>
  );
};
