import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

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

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : `User's list`}</h1>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
