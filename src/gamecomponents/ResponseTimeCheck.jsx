import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 500px;
  height: 300px;
  div {
    width: 500px;
    height: 300px;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: skyblue;
  }
`;

const ResponseTimeCheck = () => {
  const [className, setClassName] = React.useState('blue');
  const [currentTime, setCurrentTime] = React.useState(0);
  const [timeOut, setTimeOut] = React.useState(null);
  const [message, setMessage] = React.useState('클릭하면 시작합니다');
  const [responeTimeList, setResponeTimeList] = React.useState([]);

  const onClick = () => {
    if (className === 'blue') {
      setMessage('초록색으로 변하면 클릭하세요');
      setClassName('red');
      setTimeout(() => {
        setClassName('green');
        setMessage('클릭하세요!!!!');
        setTimeOut(
          setInterval(() => {
            setCurrentTime((c) => c + 1);
            console.log(currentTime);
          }, 1),
        );
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (className === 'green') {
      setResponeTimeList([...responeTimeList, currentTime]);
      setMessage(currentTime + 'ms 입니다 클릭해서 다시 시작하세요');
      setCurrentTime(0);
      clearInterval(timeOut);
      setClassName('blue');
    } else {
      setCurrentTime(0);
      clearInterval(timeOut);
      setClassName('blue');
      setMessage('성급하게 클릭했습니다 다시 시작하세요!');
    }
  };

  return (
    <Root>
      <div className={className} onClick={onClick}>
        {message}
      </div>
      <div>
        {responeTimeList.map((arr, idx) => {
          return (
            <p key={idx}>
              {idx + 1} : {arr}
            </p>
          );
        })}
        {!(responeTimeList.length === 0) && (
          <>
            {(
              responeTimeList.reduce((a, c) => a + c) / responeTimeList.length
            ).toFixed(2)}
            <button onClick={() => setResponeTimeList([])}>RESET</button>
          </>
        )}
      </div>
    </Root>
  );
};

export default ResponseTimeCheck;
