import React from 'react';
import PropTypes from 'prop-types';
import { Average, Paragraph, ParagraphWrapper, Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Average>{average}</Average>
      <ParagraphWrapper>
        <Paragraph isBold>{name}</Paragraph>
        <Paragraph>{attendance}</Paragraph>
      </ParagraphWrapper>
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
