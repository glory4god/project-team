import React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import Main from './components/Main';

const Root = styled.div``;

const App = () => {
  return (
    <Root>
      <Route path="/" component={Main}></Route>
    </Root>
  );
};

export default App;
