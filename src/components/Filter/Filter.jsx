import React from 'react';
import { setFilter } from 'redux/filtersSlice';
import { useDispatch } from 'react-redux';

import { FormLabel, FormInput } from 'components/Form/Form.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FormLabel htmlFor="">
      Find contacts by name
      <FormInput
        type="text"
        name="filter"
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </FormLabel>
  );
};

export default Filter;
