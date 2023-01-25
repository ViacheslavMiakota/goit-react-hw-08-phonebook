import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import PropTypes from 'prop-types';
import { Item } from 'components/ContactItem/ContactItem.styled';
import { FormButton } from 'components/Form/Form.styled';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      <p>{name}:</p>
      <p>{phone}</p>
      <FormButton onClick={handleDelete}>DELETE</FormButton>
    </Item>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
};
