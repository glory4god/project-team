import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Try from './Try';

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

const NumberBaseball = React.memo(() => {
  const [value, setValue] = React.useState('');
  const [answer, setAnswer] = React.useState(getNumbers());
  const [tryList, setTryList] = React.useState([]);
  const inputRef = React.useRef();

  const onSubmit = () => {
    if (value.length !== 4) {
      alert('숫자는 4개만 입력해주세요');
      setValue('');
      return;
    }
    if (value === answer.join('')) {
      setTryList((tryList) => [...tryList, { try: value, result: '홈런' }]);
      window.alert('이겼습니다');
      setAnswer(getNumbers());
      setValue('');
      setTryList([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      for (let i = 0; i < 4; i++) {
        if (answerArray[i] === answer[i]) {
          strike += 1;
        } else if (answer.includes(answerArray[i])) {
          ball += 1;
        }
      }

      setTryList((tryList) => [
        ...tryList,
        { try: value, result: `${strike}스트라이크 ${ball}볼 입니다` },
      ]);
      setValue('');
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Root>
      <div>{answer}</div>
      <Input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
        onChange={onChange}
        value={value}></Input>
      <Button onClick={onSubmit}>click</Button>
      <div>시도 : {tryList.length}</div>
      <ul>
        {tryList.map((idx, key) => (
          <Try key={`${key + 1}차 시도`} idx={idx} />
        ))}
      </ul>
    </Root>
  );
});

export default NumberBaseball;
