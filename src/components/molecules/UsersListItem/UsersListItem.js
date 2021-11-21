import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <div>
        <Button />
      </div>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    average: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
