import React from 'react';
import styled from 'styled-components';
import KakaoMap from './KakaoMap';
import Button from '@material-ui/core/Button';

const Root = styled.div``;

const UserLocation = () => {
  const [mapSelect, setMapSelect] = React.useState(false);

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
      <KakaoMap mapSelect={mapSelect} />
      <Button onClick={() => setMapSelect((state) => !state)}>
        {mapSelect ? '취소' : '추가'}
      </Button>
    </Root>
  );
};

export default UserLocation;
