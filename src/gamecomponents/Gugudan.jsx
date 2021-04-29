import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Root = styled.section`
  font-size: 2rem;
  padding: 2rem 0 0 2rem;
  .result {
    padding-top: 1rem;
  }
`;

const Gugudan = () => {
  const [gugudan, setGugudan] = React.useState({
    first: Math.ceil(Math.random() * 20),
    second: Math.ceil(Math.random() * 20),
    value: '',
    result: '',
  });
  const [score, setScore] = React.useState(0);
  const inputRef = React.useRef(null);

  const resultHandle = (value) => {
    if (!value) {
      window.alert('입력하세요');
    } else if (parseInt(value) === gugudan.first * gugudan.second) {
      setGugudan(() => ({
        first: Math.ceil(Math.random() * 20),
        second: Math.ceil(Math.random() * 20),
        value: '',
        result: '정답은 ' + value + '입니다',
      }));
      setScore(score + 1);
    } else {
      setGugudan((prev) => ({
        ...prev,
        value: '',
        result: '땡',
      }));
    }
    inputRef.current.focus();
  };

  const onChange = (e) => {
    setGugudan((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  };
  const reset = () => {
    setScore(0);
    setGugudan({
      first: Math.ceil(Math.random() * 20),
      second: Math.ceil(Math.random() * 20),
      value: '',
      result: '',
    });
  };

  return (
    <Root>
      <div>
        {gugudan.first} X {gugudan.second} = ?
      </div>
      <Input
        inputRef={inputRef}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            resultHandle(e.target.value);
          }
        }}
        placeholder="입력"
        value={gugudan.value}></Input>
      <Button onClick={() => resultHandle(gugudan.value)}>입력</Button>
      <p>{gugudan.result}</p>
      <p>정답 개수 : {score}</p>
      <Button onClick={reset}>reset</Button>
    </Root>
  );
};

export default Gugudan;
