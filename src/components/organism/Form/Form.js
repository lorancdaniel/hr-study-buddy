import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import { users as usersData } from 'data/users';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'error' });
      }
    }, 2000);
  });
};

const Form = ({ handleAddUser, formValues, handleNameChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <h1>Student's list</h1>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleNameChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleNameChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleNameChange} />
        <Button type="submit">Add user</Button>
      </Wrapper>
    </>
  );
};

export default Form;
