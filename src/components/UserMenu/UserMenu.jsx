import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import {
  UserName,
  UserWraper,
  UserButton,
} from 'components/UserMenu/UserMehu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWraper>
      <UserName>Welcome, {user.name}</UserName>
      <UserButton onClick={() => dispatch(logOut())}>Log out</UserButton>
    </UserWraper>
  );
};
