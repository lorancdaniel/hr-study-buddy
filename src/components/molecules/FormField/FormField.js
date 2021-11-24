import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = ({ label, name, id, type = 'type', ...props }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <Input name={name} id={id} type={type} />
  </>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};