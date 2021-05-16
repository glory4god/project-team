import React from 'react';
import './user.css';

const User = ({ user, removeList }) => {
  return (
    <div className="list-box">
      <div className="profile-image"></div>
      <div className="profile">
        <div>
          <div>
            <b>{user.name}</b>
          </div>
          <div>({user.address})</div>
        </div>
        <div>
          <button onClick={() => removeList(user.name)}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default User;
