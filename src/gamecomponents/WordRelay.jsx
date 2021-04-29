import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const WordRelay = () => {
  const [word, setWord] = React.useState({
    word: '유하영',
    value: '',
    result: '',
  });
  const inputRef = React.useRef(null);

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
    <>
      <div>{word.word}</div>
      <form onSubmit={onsubmit}>
        <Input ref={inputRef} onChange={onChange} value={word.value}></Input>
        <Button>입력</Button>
      </form>
      <div>{word.result}</div>
    </>
  );
};

export default WordRelay;
