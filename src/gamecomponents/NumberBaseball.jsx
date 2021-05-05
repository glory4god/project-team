import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Root = styled.section`
  margin-top: 2rem;
  padding-left: 2rem;
`;

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = () => {
  const [tries, setTries] = React.useState({
    result: '',
    value: '',
  });
  const [answer, setAnswer] = React.useState(getNumbers());

  const [tryList, setTryList] = React.useState([]);

  const onSubmit = (e) => {
    if (tries.value === answer.join('')) {
      setTries((prev) => ({
        ...prev,
        result: '홈런',
      }));
      setTryList([...tryList, { try: tries.value, result: tries.result }]);
      setAnswer(getNumbers());
    } else {
      const answerArray = tries.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      for (let i = 0; i < 4; i++) {
        if (answerArray[i] === answer[i]) {
          strike += 1;
        } else if (answer.incluedes(answerArray[i])) {
          ball += 1;
        }
      }
      setTries((prev) => ({
        ...prev,
        result: '볼',
      }));
      setTryList([...tryList, { try: tries.value, result: tries.result }]);
    }
  };
  const onChange = () => {};

  return (
    <Root>
      <div>{tries.result}</div>
      <form onSubmit={onSubmit}>
        <Input onChange={onChange} value={tries.value}></Input>
        <Button>click</Button>
      </form>
      <div>시도 : {tryList.length}</div>
      <ul>
        {tryList.map((idx, key) => (
          <li>{idx}</li>
        ))}
      </ul>
    </Root>
  );
};

export default NumberBaseball;
