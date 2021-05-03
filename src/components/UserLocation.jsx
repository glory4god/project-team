import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const UserLocation = () => {
  const [userList, setUserList] = React.useState([
    { name: 'hayoung', location: '강남역' },
  ]);
  return (
    <Root>
      {userList.map((user, key) => (
        <div key={user.name + user.location + key}>
          <div>{user.name}</div>
          <div>{user.location}</div>
        </div>
      ))}
      <p>{userList.length}명의 위치</p>
    </Root>
  );
};

export default UserLocation;
