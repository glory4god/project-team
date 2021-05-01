import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Root = styled.section`
  margin-top: 2rem;
  padding-left: 2rem;
`;

const getNumbers = () => {};

const NumberBaseball = () => {
  const [number, setNumber] = React.useState({
    number: '',
    value: '',
    result: '',
  });

  const [tryList, setTryList] = React.useState([]);

  const onSubmit = () => {};
  const onChange = () => {};

  return (
    <Root>
      <div>{number.number}</div>
      <form onSubmit={onSubmit}>
        <Input onChange={onChange} value={number.value}></Input>
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
