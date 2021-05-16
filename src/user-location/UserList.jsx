import React from 'react';
import User from './User';

function UserList({ users, removeList }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} removeList={removeList} />
      ))}
    </div>
  );
}

export default UserList;
