import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Root = styled.div`
  .rsp-box {
    margin: 0 auto;
    width: 300px;
    height: 300px;
    background-color: black;
    color: white;
  }

  .rsp-value {
    margin-top: 60px;
  }
  text-align: center;
  font-size: 2rem;
`;

const RSP = () => {
  const [rspState, setRspState] = React.useState('가위');
  const [result, setResult] = React.useState('');
  const [score, setScore] = React.useState(0);
  const [click, setClick] = React.useState(false);
  const gaming = React.useRef(null);

  const startGame = () => {
    if (rspState === '가위') {
      setRspState('바위');
    } else if (rspState === '바위') {
      setRspState('보');
    } else if (rspState === '보') {
      setRspState('가위');
    }
  };

  const gameStart = () => {
    gaming.current = setInterval(startGame, 10);
  };

  const onClickBtn = (value) => () => {
    clearInterval(gaming.current);
    gaming.current = null;
    setResult(value);
    console.log('result:' + value + ', state:' + rspState);
    if (value === rspState) {
      setRspState('비겼습니다');
    } else if (
      (value === '가위' && rspState === '바위') |
      (value === '바위' && rspState === '보') |
      (value === '보' && rspState === '가위')
    ) {
      setScore((c) => c - 1);
    } else {
      setScore((c) => c + 1);
    }

    setClick(true);
    setTimeout(() => {
      setRspState('가위');
      gaming.current = setInterval(startGame, 10);
      setClick(false);
    }, 1000);
  };

  React.useEffect(() => {
    gaming.current = setInterval(startGame, 10);
    console.log('실행');
    return () => {
      clearInterval(gaming.current);
    };
  }, [rspState]);

  return (
    <Root>
      <div className="rsp-box">
        <div className="title">RSP</div>
        <div className="rsp-value">{rspState}</div>
        <div className="rsp-value">{result && result}</div>
      </div>
      <div>
        <Button disabled={click} onClick={onClickBtn('가위')}>
          가위
        </Button>
        <Button disabled={click} onClick={onClickBtn('바위')}>
          바위
        </Button>
        <Button disabled={click} onClick={onClickBtn('보')}>
          보
        </Button>
        <Button
          onClick={() => {
            clearInterval(gaming.current);
            setScore(0);
            gaming.current = null;
          }}>
          FINISH
        </Button>
        <Button onClick={gameStart}>START</Button>
      </div>
      <div>점수 : {score}</div>
    </Root>
  );
};

export default RSP;
