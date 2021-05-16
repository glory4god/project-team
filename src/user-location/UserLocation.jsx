import React from 'react';
import UserList from './UserList';
// import back from './images/back.svg';
import './userLocation.css';

const UserLocation = () => {
  const [userList, setUserList] = React.useState([
    { name: '하영', address: '서울대입구역' },
  ]);
  const [inputName, setInputName] = React.useState('');
  const [inputAddress, setInputAddress] = React.useState('');

  const addToList = () => {
    setUserList([...userList, { name: inputName, address: inputAddress }]);
  };
  const calculate = () => {};

  const removeList = (name) => {
    setUserList(userList.filter((userList) => userList.name !== name));
  };

  return (
    <div className="mainWrap">
      {/* <img src={back} className="back" alt="back" /> */}
      <div className="mainTitle">
        만날 친구들의
        <br />
        출발 위치를 입력해주세요.
      </div>

      <button className="addPerson" onClick={addToList}>
        사람 추가
      </button>
      <UserList users={userList} removeList={removeList} />
      <button className="searchBtn" onClick={calculate}>
        0명의 약속 장소 찾기
      </button>
    </div>
  );
};

export default UserLocation;
