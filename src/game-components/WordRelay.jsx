import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Root = styled.section`
  font-size: 1.25rem;
  padding-top: 2rem;
  padding-left: 1rem;
`;

const WordRelay = React.memo(() => {
  const [word, setWord] = React.useState({
    word: '유하영',
    value: '',
    result: '',
  });
  const inputRef = React.useRef(null);
  const [list, setList] = React.useState([]);

  const onChange = (e) => {
    setWord((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (word.word[word.word.length - 1] === word.value[0]) {
      setWord({
        word: word.value,
        value: '',
        result: '딩동댕',
      });
      setList([...list, word.word]);
      inputRef.current.focus();
    } else {
      setWord((prev) => ({
        ...prev,
        value: '',
        result: '땡',
      }));
      inputRef.current.focus();
    }
  };

  return (
    <Root>
      <div>{word.word}</div>
      <form onSubmit={onsubmit}>
        <Input ref={inputRef} onChange={onChange} value={word.value}></Input>
        <Button>입력</Button>
      </form>
      <div>{word.result}</div>
      <p>기록 :</p>
      {list.map((idx, key) => (
        <div key={key}>
          {key + 1} : {idx}
        </div>
      ))}
    </Root>
  );
});

export default WordRelay;
